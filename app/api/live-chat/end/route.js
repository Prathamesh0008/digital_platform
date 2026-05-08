import dbConnect from "@/lib/dbConnect";
import ChatSession from "@/models/ChatSession";
import ChatMessage from "@/models/ChatMessage";
import Visitor from "@/models/Visitor";
import { pusherServer, CHANNELS } from "@/lib/pusherServer";

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const sessionId = String(body.sessionId || "");
    const visitorId = String(body.visitorId || "");

    if (!sessionId) {
      return Response.json(
        { success: false, message: "sessionId is required." },
        { status: 400 }
      );
    }

    const oldSession = await ChatSession.findOne({ sessionId });

    if (!oldSession) {
      return Response.json(
        { success: false, message: "Session not found." },
        { status: 404 }
      );
    }

    const systemText = "Visitor ended the live chat.";

    const session = await ChatSession.findOneAndUpdate(
      { sessionId },
      {
        status: "closed",
        closedAt: new Date(),
        lastMessage: systemText,
        lastMessageAt: new Date(),
      },
      { new: true }
    ).lean();

    if (visitorId) {
      await Visitor.findOneAndUpdate(
        { visitorId },
        { isOnline: false, lastSeenAt: new Date() }
      );
    }

    const systemMessage = await ChatMessage.create({
      sessionId,
      visitorId: oldSession.visitorId,
      senderType: "system",
      senderName: "Nova",
      message: systemText,
    });

    await pusherServer.trigger(CHANNELS.session(sessionId), "session-closed", {
      session,
      status: "closed",
    });

    await pusherServer.trigger(CHANNELS.session(sessionId), "new-message", {
      message: systemMessage,
    });

    await pusherServer.trigger(CHANNELS.dashboard, "session-updated", {
      session,
    });

    await pusherServer.trigger(CHANNELS.dashboard, "stats-updated", {});

    return Response.json({ success: true, session });
  } catch (error) {
    console.error("Visitor end chat error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}