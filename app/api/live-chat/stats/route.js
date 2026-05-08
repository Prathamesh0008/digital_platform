import dbConnect from "@/lib/dbConnect";
import ChatSession from "@/models/ChatSession";
import Visitor from "@/models/Visitor";
import VisitorLead from "@/models/VisitorLead";
import { getAgentFromCookie } from "@/lib/agentAuth";

export async function GET() {
  try {
    await dbConnect();

    const authAgent = await getAgentFromCookie();

    if (!authAgent?.agentId) {
      return Response.json({ success: false }, { status: 401 });
    }

    const staleLimit = new Date(Date.now() - 2 * 60 * 1000);

    await Visitor.updateMany(
      {
        isOnline: true,
        lastSeenAt: { $lt: staleLimit },
      },
      {
        $set: {
          isOnline: false,
        },
      }
    );

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [
      totalSessions,
      pendingChats,
      activeChats,
      onlineVisitors,
      offlineVisitors,
      resolvedToday,
      totalLeads,
      onlineVisitorsList,
    ] = await Promise.all([
      ChatSession.countDocuments(),
      ChatSession.countDocuments({ status: "pending" }),
      ChatSession.countDocuments({ status: "active" }),
      Visitor.countDocuments({ isOnline: true }),
      Visitor.countDocuments({ isOnline: false }),
      ChatSession.countDocuments({
        status: "resolved",
        resolvedAt: { $gte: today },
      }),
      VisitorLead.countDocuments(),
      Visitor.find({ isOnline: true })
        .sort({ lastSeenAt: -1 })
        .limit(10)
        .lean(),
    ]);

    return Response.json({
      success: true,
      stats: {
        totalSessions,
        pendingChats,
        activeChats,
        onlineVisitors,
        offlineVisitors,
        resolvedToday,
        totalLeads,
        averageResponseTime: "—",
      },
      onlineVisitorsList,
    });
  } catch (error) {
    console.error("Stats error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Could not load stats.",
      },
      { status: 500 }
    );
  }
}