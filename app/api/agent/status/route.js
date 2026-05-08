import dbConnect from "@/lib/dbConnect";
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
    const isOnline = Boolean(body.isOnline);

    const agent = await Agent.findByIdAndUpdate(
      authAgent.agentId,
      {
        isOnline,
        lastSeenAt: new Date(),
      },
      {
        new: true,
      }
    ).lean();

    if (!agent) {
      return Response.json(
        {
          success: false,
          message: "Agent not found.",
        },
        { status: 404 }
      );
    }

    const responseAgent = {
      id: String(agent._id),
      name: agent.name,
      email: agent.email,
      isOnline: agent.isOnline,
      lastSeenAt: agent.lastSeenAt,
    };

    await safeTrigger(CHANNELS.dashboard, "agent-status-updated", {
      agent: responseAgent,
    });

    await safeTrigger(CHANNELS.dashboard, "stats-updated", {});

    return Response.json({
      success: true,
      agent: responseAgent,
    });
  } catch (error) {
    console.error("Agent status error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Could not update agent status.",
      },
      { status: 500 }
    );
  }
}