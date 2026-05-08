import dbConnect from "@/lib/dbConnect";
import ChatSession from "@/models/ChatSession";
import { pusherServer } from "@/lib/pusherServer";

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();

    const sessionId = String(body.sessionId || "");
    const visitorId = String(body.visitorId || "");
    const visitorName = String(body.visitorName || "");
    const rating = Number(body.rating || 0);

    if (!sessionId) {
      return Response.json(
        { success: false, message: "sessionId is required." },
        { status: 400 }
      );
    }

    if (!rating || rating < 1 || rating > 5) {
      return Response.json(
        { success: false, message: "Rating must be between 1 and 5." },
        { status: 400 }
      );
    }

    const session = await ChatSession.findOneAndUpdate(
      { sessionId },
      {
        rating: {
          value: rating,
          visitorId,
          visitorName,
          createdAt: new Date(),
        },
      },
      { new: true }
    ).lean();

    if (!session) {
      return Response.json(
        { success: false, message: "Chat session not found." },
        { status: 404 }
      );
    }

    await pusherServer.trigger("nova-agent-dashboard", "session-updated", {
      session,
    });

    await pusherServer.trigger("nova-agent-dashboard", "stats-updated", {});

    await pusherServer.trigger(`nova-chat-${sessionId}`, "rating-updated", {
      sessionId,
      rating: session.rating,
    });

    return Response.json({
      success: true,
      session,
      rating: session.rating,
    });
  } catch (error) {
    console.error("Rating error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Could not submit rating.",
      },
      { status: 500 }
    );
  }
}