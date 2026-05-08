import dbConnect from "@/lib/dbConnect";
import ChatSession from "@/models/ChatSession";
import ChatMessage from "@/models/ChatMessage";
import Visitor from "@/models/Visitor";
import { getAgentFromCookie } from "@/lib/agentAuth";

export async function GET(request) {
  try {
    await dbConnect();

    const authAgent = await getAgentFromCookie();

    if (!authAgent?.agentId) {
      return Response.json({ success: false }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const visitorId = searchParams.get("visitorId");

    if (!visitorId) {
      return Response.json(
        { success: false, message: "visitorId is required." },
        { status: 400 }
      );
    }

    const visitor = await Visitor.findOne({ visitorId }).lean();

    const sessions = await ChatSession.find({ visitorId })
      .sort({ createdAt: -1 })
      .lean();

    const sessionIds = sessions.map((session) => session.sessionId);

    const messages = await ChatMessage.find({
      sessionId: { $in: sessionIds },
    })
      .sort({ createdAt: 1 })
      .lean();

    return Response.json({
      success: true,
      visitor,
      sessions,
      messages,
    });
  } catch (error) {
    console.error("Visitor history error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}