import { getAgentFromCookie } from "@/lib/agentAuth";
import { pusherServer } from "@/lib/pusherServer";

export async function POST(request) {
  try {
    const body = await request.json();

    const sessionId = String(body.sessionId || "");
    const senderType = String(body.senderType || "");
    const senderName = String(body.senderName || "Upasana");
    const isTyping = Boolean(body.isTyping);

    if (!sessionId || !senderType) {
      return Response.json(
        {
          success: false,
          message: "sessionId and senderType are required.",
        },
        { status: 400 }
      );
    }

    if (senderType === "agent") {
      const authAgent = await getAgentFromCookie();

      if (!authAgent?.agentId) {
        return Response.json(
          {
            success: false,
            message: "Agent not authenticated.",
          },
          { status: 401 }
        );
      }
    }

    const channelName = `nova-chat-${sessionId}`;

    await pusherServer.trigger(channelName, "typing", {
      sessionId,
      senderType,
      senderName,
      isTyping,
    });

    if (senderType === "agent") {
      await pusherServer.trigger(channelName, "agent-typing", {
        sessionId,
        senderType,
        senderName,
        isTyping,
      });
    }

    if (senderType === "visitor") {
      await pusherServer.trigger(channelName, "visitor-typing", {
        sessionId,
        senderType,
        senderName,
        isTyping,
      });
    }

    return Response.json({
      success: true,
      channelName,
      event: "typing",
    });
  } catch (error) {
    console.error("Typing route error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Typing update failed.",
      },
      { status: 500 }
    );
  }
}