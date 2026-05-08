import dbConnect from "@/lib/dbConnect";
import Agent from "@/models/Agent";
import { clearAgentCookie, getAgentFromCookie } from "@/lib/agentAuth";

export async function POST() {
  try {
    await dbConnect();

    const authAgent = await getAgentFromCookie();

    if (authAgent?.agentId) {
      await Agent.findByIdAndUpdate(authAgent.agentId, {
        isOnline: false,
        lastSeenAt: new Date(),
      });
    }

    await clearAgentCookie();

    return Response.json({ success: true });
  } catch (error) {
    console.error("Agent logout error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}