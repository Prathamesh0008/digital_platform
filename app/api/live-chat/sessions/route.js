import dbConnect from "@/lib/dbConnect";
import ChatSession from "@/models/ChatSession";
import { getAgentFromCookie } from "@/lib/agentAuth";

export async function GET(request) {
  try {
    await dbConnect();

    const authAgent = await getAgentFromCookie();

    if (!authAgent?.agentId) {
      return Response.json({ success: false }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "all";
    const q = searchParams.get("q") || "";

    const filter = {};

    if (status !== "all") {
      filter.status = status;
    }

    if (q) {
      filter.$or = [
        { visitorName: { $regex: q, $options: "i" } },
        { visitorContact: { $regex: q, $options: "i" } },
        { visitorBusiness: { $regex: q, $options: "i" } },
        { selectedService: { $regex: q, $options: "i" } },
        { visitorLocation: { $regex: q, $options: "i" } },
        { visitorRequirement: { $regex: q, $options: "i" } },
      ];
    }

    const sessions = await ChatSession.find(filter)
      .sort({ lastMessageAt: -1, updatedAt: -1 })
      .limit(300)
      .lean();

    return Response.json({
      success: true,
      sessions,
    });
  } catch (error) {
    console.error("Get sessions error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}