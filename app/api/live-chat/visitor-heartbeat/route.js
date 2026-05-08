import dbConnect from "@/lib/dbConnect";
import Visitor from "@/models/Visitor";
import { pusherServer, CHANNELS } from "@/lib/pusherServer";

async function safeTrigger(channel, event, payload) {
  try {
    if (!pusherServer) return;
    await pusherServer.trigger(channel, event, payload);
  } catch (error) {
    console.error(`Pusher skipped: ${channel} / ${event}`, error?.message);
  }
}

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const visitorId = String(body.visitorId || "");

    if (!visitorId) {
      return Response.json(
        { success: false, message: "visitorId is required." },
        { status: 400 }
      );
    }

    const visitor = await Visitor.findOneAndUpdate(
      { visitorId },
      {
        visitorId,
        name: body.name || "",
        contact: body.contact || "",
        business: body.business || "",
        selectedService: body.selectedService || "",
        location: body.location || "",
        requirement: body.requirement || "",
        pageUrl: body.pageUrl || "",
        userAgent: body.userAgent || "",
        isOnline: Boolean(body.isOnline ?? true),
        lastSeenAt: new Date(),
      },
      {
        upsert: true,
        returnDocument: "after",
      }
    ).lean();

    await safeTrigger(CHANNELS.dashboard, "visitor-updated", {
      visitor,
    });

    await safeTrigger(CHANNELS.dashboard, "stats-updated", {});

    return Response.json({
      success: true,
      visitor,
    });
  } catch (error) {
    console.error("Visitor heartbeat error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Visitor heartbeat failed.",
      },
      { status: 500 }
    );
  }
}