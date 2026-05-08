import dbConnect from "@/lib/dbConnect";
import Agent from "@/models/Agent";
import { setAgentCookie } from "@/lib/agentAuth";

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!email || !password) {
      return Response.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    if (
      email !== String(process.env.AGENT_EMAIL || "").toLowerCase() ||
      password !== String(process.env.AGENT_PASSWORD || "")
    ) {
      return Response.json(
        { success: false, message: "Invalid login details." },
        { status: 401 }
      );
    }

    const agent = await Agent.findOneAndUpdate(
      { email },
      {
        email,
        name: "Nova Agent",
        isOnline: true,
        lastSeenAt: new Date(),
      },
      { upsert: true, new: true }
    );

    await setAgentCookie(agent);

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
    console.error("Agent login error:", error);
    return Response.json(
      { success: false, message: "Login failed." },
      { status: 500 }
    );
  }
}