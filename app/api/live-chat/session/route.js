import { randomUUID } from "crypto";
import dbConnect from "@/lib/dbConnect";
import Agent from "@/models/Agent";
import Visitor from "@/models/Visitor";
import ChatSession from "@/models/ChatSession";
import ChatMessage from "@/models/ChatMessage";
import VisitorLead from "@/models/VisitorLead";
import { pusherServer, CHANNELS } from "@/lib/pusherServer";

async function safeTrigger(channel, event, payload) {
  try {
    if (!pusherServer) return;
    await pusherServer.trigger(channel, event, payload);
  } catch (error) {
    console.error(`Pusher trigger failed: ${channel} / ${event}`, error);
  }
}

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId");

    if (!sessionId) {
      return Response.json(
        { success: false, message: "sessionId is required." },
        { status: 400 }
      );
    }

    const session = await ChatSession.findOne({ sessionId }).lean();

    if (!session) {
      return Response.json(
        { success: false, message: "Session not found." },
        { status: 404 }
      );
    }

    const messages = await ChatMessage.find({ sessionId })
      .sort({ createdAt: 1 })
      .lean();

    return Response.json({
      success: true,
      session,
      messages,
    });
  } catch (error) {
    console.error("Get live session error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();

    const visitorId = body.visitorId || randomUUID();

    const visitorName = String(body.visitorName || "").trim();
    const visitorContact = String(body.visitorContact || "").trim();
    const visitorBusiness = String(body.visitorBusiness || "").trim();
    const selectedService = String(body.selectedService || "").trim();
    const visitorLocation = String(body.visitorLocation || "").trim();
    const visitorRequirement = String(body.visitorRequirement || "").trim();
    const pageUrl = String(body.pageUrl || "");
    const userAgent = String(body.userAgent || "");

    if (!visitorName || !visitorContact) {
      return Response.json(
        {
          success: false,
          message: "Name and contact are required.",
        },
        { status: 400 }
      );
    }

    const sessionId = randomUUID();
    const onlineAgents = await Agent.countDocuments({ isOnline: true });
    const waitText = "Please wait, we will connect you shortly.";

    await Visitor.findOneAndUpdate(
      { visitorId },
      {
        $set: {
          visitorId,
          name: visitorName,
          contact: visitorContact,
          business: visitorBusiness,
          selectedService,
          location: visitorLocation,
          requirement: visitorRequirement,
          pageUrl,
          userAgent,
          isOnline: true,
          lastSeenAt: new Date(),
        },
        $inc: {
          totalSessions: 1,
        },
      },
      {
        upsert: true,
        new: true,
      }
    );

    await ChatSession.create({
      sessionId,
      visitorId,
      visitorName,
      visitorContact,
      visitorBusiness,
      selectedService,
      visitorLocation,
      visitorRequirement,
      pageUrl,
      userAgent,
      status: "pending",
      source: "website-chatbot",
      startedAt: new Date(),
      lastMessage: visitorRequirement || waitText,
      lastMessageAt: new Date(),
      unreadForAgent: visitorRequirement ? 1 : 0,
    });

    await VisitorLead.create({
      sessionId,
      visitorId,
      name: visitorName,
      contact: visitorContact,
      business: visitorBusiness,
      service: selectedService,
      location: visitorLocation,
      requirement: visitorRequirement,
      website: body.website || "",
      budget: body.budget || "",
      startTime: body.startTime || "",
      pageUrl,
      userAgent,
      source: "website-chatbot",
    });

    const systemMessage = await ChatMessage.create({
      sessionId,
      visitorId,
      senderType: "system",
      senderName: "Nova",
      message: waitText,
    });

    let requirementMessage = null;

    if (visitorRequirement) {
      requirementMessage = await ChatMessage.create({
        sessionId,
        visitorId,
        senderType: "visitor",
        senderName: visitorName || "Website Visitor",
        message: visitorRequirement,
        readStatus: "delivered",
      });
    }

    const updatedSession = await ChatSession.findOne({ sessionId }).lean();

    await safeTrigger(CHANNELS.dashboard, "new-session", {
      session: updatedSession,
    });

    await safeTrigger(CHANNELS.dashboard, "stats-updated", {});

    await safeTrigger(CHANNELS.session(sessionId), "new-message", {
      message: systemMessage,
    });

    if (requirementMessage) {
      await safeTrigger(CHANNELS.session(sessionId), "new-message", {
        message: requirementMessage,
      });
    }

    return Response.json({
      success: true,
      reused: false,
      visitorId,
      session: updatedSession,
      onlineAgents,
      message: systemMessage,
      offlineMessage:
        onlineAgents <= 0
          ? "Our team is currently offline, but your request has been saved."
          : "",
    });
  } catch (error) {
    console.error("Create live session error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Could not create live chat session.",
      },
      { status: 500 }
    );
  }
}