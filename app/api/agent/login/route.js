import dbConnect from "@/lib/dbConnect";
import Agent from "@/models/Agent";
import { setAgentCookie } from "@/lib/agentAuth";

export async function POST(request) {
  try {
    if (!process.env.AGENT_EMAIL || !process.env.AGENT_PASSWORD) {
      return Response.json(
        {
          success: false,
          message: "AGENT_EMAIL or AGENT_PASSWORD is missing in .env.local",
        },
        { status: 500 }
      );
    }

    await dbConnect();

    const body = await request.json();

    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "").trim();

    const envEmail = String(process.env.AGENT_EMAIL || "")
      .trim()
      .toLowerCase();

    const envPassword = String(process.env.AGENT_PASSWORD || "").trim();

    if (!email || !password) {
      return Response.json(
        {
          success: false,
          message: "Email and password are required.",
        },
        { status: 400 }
      );
    }

    if (email !== envEmail || password !== envPassword) {
      return Response.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        { status: 401 }
      );
    }

    const agent = await Agent.findOneAndUpdate(
      { email },
      {
        name: "Nova Agent",
        email,
        isOnline: true,
        lastSeenAt: new Date(),
      },
      {
        upsert: true,
        new: true,
      }
    );

    await setAgentCookie(agent);

    return Response.json({
      success: true,
      message: "Login successful.",
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
      {
        success: false,
        message:
          error?.message ||
          "Login failed. Please check MongoDB connection and .env.local.",
      },
      { status: 500 }
    );
  }
}