import dbConnect from "@/lib/dbConnect";
import ChatMessage from "@/models/ChatMessage";
import ChatSession from "@/models/ChatSession";
import { pusherServer } from "@/lib/pusherServer";

async function triggerDashboard() {
  try {
    await pusherServer.trigger("nova-agent-dashboard", "message-updated", {});
    await pusherServer.trigger("nova-agent-dashboard", "stats-updated", {});
  } catch (error) {
    console.error("Dashboard pusher error:", error);
  }
}

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId");

    if (!sessionId) {
      return Response.json(
        { success: false, message: "sessionId is required." },
        { status: 400 }
      );
    }

    const messages = await ChatMessage.find({ sessionId })
      .sort({ createdAt: 1 })
      .lean();

    return Response.json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error("Get live messages error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Could not load messages.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();

    const sessionId = String(body.sessionId || "");
    const visitorId = String(body.visitorId || "");
    const senderType = String(body.senderType || "");
    const senderName = String(body.senderName || "");
    const message = String(body.message || "");
    const messageType = body.messageType || "text";
    const attachment = body.attachment || null;

    if (!sessionId || !senderType) {
      return Response.json(
        {
          success: false,
          message: "sessionId and senderType are required.",
        },
        { status: 400 }
      );
    }

    if (messageType === "text" && !message.trim()) {
      return Response.json(
        {
          success: false,
          message: "message is required.",
        },
        { status: 400 }
      );
    }

    if (messageType === "attachment" && !attachment?.fileUrl) {
      return Response.json(
        {
          success: false,
          message: "attachment.fileUrl is required.",
        },
        { status: 400 }
      );
    }

    const session = await ChatSession.findOne({ sessionId });

    if (!session) {
      return Response.json(
        {
          success: false,
          message: "Chat session not found.",
        },
        { status: 404 }
      );
    }

    const newMessage = await ChatMessage.create({
      sessionId,
      visitorId: visitorId || session.visitorId || "",
      senderType,
      senderName,
      message:
        messageType === "attachment"
          ? message || attachment?.fileName || "Attachment"
          : message,
      messageType,
      attachment,
      readByAgent: senderType === "agent",
      readByVisitor: senderType === "visitor",
    });

    const lastMessage =
      messageType === "attachment"
        ? `Attachment: ${attachment?.fileName || "file"}`
        : message;

    const update = {
      lastMessage,
      lastMessageAt: new Date(),
    };

    if (senderType === "visitor") {
      update.$inc = { unreadForAgent: 1 };
    }

    if (senderType === "agent") {
      update.$inc = { unreadForVisitor: 1 };
    }

    await ChatSession.findOneAndUpdate({ sessionId }, update, { new: true });

    const leanMessage = await ChatMessage.findById(newMessage._id).lean();

    await pusherServer.trigger(`nova-chat-${sessionId}`, "new-message", {
      message: leanMessage,
    });

    await triggerDashboard();

    return Response.json({
      success: true,
      message: leanMessage,
    });
  } catch (error) {
    console.error("Create live message error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Could not send message.",
      },
      { status: 500 }
    );
  }
}