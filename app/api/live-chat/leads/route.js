    import dbConnect from "@/lib/dbConnect";
import VisitorLead from "@/models/VisitorLead";
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
        { service: { $regex: q, $options: "i" } },
      ];
    }

    const leads = await VisitorLead.find(filter)
      .sort({ createdAt: -1 })
      .limit(300)
      .lean();

    return Response.json({ success: true, leads });
  } catch (error) {
    console.error("Leads error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}