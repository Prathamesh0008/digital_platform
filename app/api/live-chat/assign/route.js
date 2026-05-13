import dbConnect from "@/lib/dbConnect";
import ChatSession from "@/models/ChatSession";
import ChatMessage from "@/models/ChatMessage";
import Agent from "@/models/Agent";
import { getAgentFromCookie } from "@/lib/agentAuth";
import { pusherServer, CHANNELS } from "@/lib/pusherServer";

async function safeTrigger(channel, event, payload) {
  try {
    if (!pusherServer) return;
    await pusherServer.trigger(channel, event, payload);
  } catch (error) {
    console.error(`Pusher trigger failed: ${channel} / ${event}`, error);
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

    if (!sessionId) {
      return Response.json(
        { success: false, message: "sessionId is required." },
        { status: 400 }
      );
    }

    const agent = await Agent.findById(authAgent.agentId).lean();

    if (!agent) {
      return Response.json(
        { success: false, message: "Agent not found." },
        { status: 404 }
      );
    }

    const oldSession = await ChatSession.findOne({ sessionId }).lean();

    if (!oldSession) {
      return Response.json(
        { success: false, message: "Session not found." },
        { status: 404 }
      );
    }
const agentName = agent.name || "Nova Agent";
const systemText = "This is Nova How may i help You";

const session = await ChatSession.findOneAndUpdate(
  { sessionId },
  {
    assignedAgentId: agent._id,
    assignedAgentName: agentName,
    status: "active",
    unreadForAgent: 0,
    lastMessage: systemText,
    lastMessageAt: new Date(),
  },
  { new: true }
).lean();

const systemMessage = await ChatMessage.create({
  sessionId,
  visitorId: oldSession.visitorId,
  senderType: "system",
  senderName: "Nova",
  message: systemText,
});

    const agentPayload = {
      id: String(agent._id),
      name: agentName,
      email: agent.email || "",
    };

    await safeTrigger(CHANNELS.session(sessionId), "agent-connected", {
      session,
      agent: agentPayload,
      message: systemMessage,
      visitorText: "This is Nova How may i help You",
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
      agent: agentPayload,
      message: systemMessage,
    });
  } catch (error) {
    console.error("Assign session error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Could not join chat.",
      },
      { status: 500 }
    );
  }
}
