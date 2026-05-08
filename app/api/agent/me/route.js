import dbConnect from "@/lib/dbConnect";
import Agent from "@/models/Agent";
import { getAgentFromCookie } from "@/lib/agentAuth";

export async function GET() {
  try {
    await dbConnect();

    const authAgent = await getAgentFromCookie();

    if (!authAgent?.agentId) {
      return Response.json({ success: false, agent: null }, { status: 401 });
    }

    const agent = await Agent.findById(authAgent.agentId).lean();

    if (!agent) {
      return Response.json({ success: false, agent: null }, { status: 401 });
    }

    return Response.json({
      success: true,
      agent: {
        id: String(agent._id),
        name: agent.name,
        email: agent.email,
        isOnline: agent.isOnline,
      },
    });
  } catch (error) {
    console.error("Agent me error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}