import dbConnect from "@/lib/dbConnect";
import ChatSession from "@/models/ChatSession";
import ChatMessage from "@/models/ChatMessage";
import { getAgentFromCookie } from "@/lib/agentAuth";
import { pusherServer, CHANNELS } from "@/lib/pusherServer";

async function safeTrigger(channel, event, payload) {
  try {
    if (!pusherServer) return;
    await pusherServer.trigger(channel, event, payload);
  } catch (error) {
    console.error(`Pusher skipped: ${channel} / ${event}`, error?.message);
  }
}

export async function POST(request) {
  try {
    await dbConnect();

    const authAgent = await getAgentFromCookie();

    if (!authAgent?.agentId) {
      return Response.json({ success: false }, { status: 401 });
    }

    const body = await request.json();

    const sessionId = String(body.sessionId || "");
    const status = String(body.status || "closed");

    if (!sessionId) {
      return Response.json(
        { success: false, message: "sessionId is required." },
        { status: 400 }
      );
    }

    const allowedStatus = ["resolved", "closed"];
    const finalStatus = allowedStatus.includes(status) ? status : "closed";

    const systemText =
      finalStatus === "resolved"
        ? "This chat has been marked as resolved."
        : "This chat has been closed.";

    const oldSession = await ChatSession.findOne({ sessionId }).lean();

    if (!oldSession) {
      return Response.json(
        { success: false, message: "Session not found." },
        { status: 404 }
      );
    }

    const updateData = {
      status: finalStatus,
      lastMessage: systemText,
      lastMessageAt: new Date(),
    };

    if (finalStatus === "resolved") {
      updateData.resolvedAt = new Date();
    }

    if (finalStatus === "closed") {
      updateData.closedAt = new Date();
    }

    const session = await ChatSession.findOneAndUpdate(
      { sessionId },
      updateData,
      { returnDocument: "after" }
    ).lean();

    const systemMessage = await ChatMessage.create({
      sessionId,
      visitorId: oldSession.visitorId,
      senderType: "system",
      senderName: "Nova",
      message: systemText,
      readStatus: "delivered",
    });

    await safeTrigger(CHANNELS.session(sessionId), "session-closed", {
      session,
      status: finalStatus,
    });

    await safeTrigger(CHANNELS.session(sessionId), "new-message", {
      message: systemMessage,
    });

    await safeTrigger(CHANNELS.dashboard, "session-updated", {
      session,
    });

    await safeTrigger(CHANNELS.dashboard, "message-updated", {
      sessionId,
      message: systemMessage,
      session,
    });

    await safeTrigger(CHANNELS.dashboard, "stats-updated", {});

    return Response.json({
      success: true,
      session,
      message: systemMessage,
    });
  } catch (error) {
    console.error("Close session error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Could not close session.",
      },
      { status: 500 }
    );
  }
}