import dbConnect from "@/lib/dbConnect";
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
    const q = searchParams.get("q") || "";

    const filter = {};

    if (q) {
      filter.$or = [
        { name: { $regex: q, $options: "i" } },
        { contact: { $regex: q, $options: "i" } },
        { business: { $regex: q, $options: "i" } },
        { selectedService: { $regex: q, $options: "i" } },
      ];
    }

    const visitors = await Visitor.find(filter)
      .sort({ lastSeenAt: -1 })
      .limit(300)
      .lean();

    return Response.json({ success: true, visitors });
  } catch (error) {
    console.error("Visitors error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}