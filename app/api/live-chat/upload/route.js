import { writeFile, mkdir } from "fs/promises";
import path from "path";
import dbConnect from "@/lib/dbConnect";
import ChatMessage from "@/models/ChatMessage";
import ChatSession from "@/models/ChatSession";
import { pusherServer } from "@/lib/pusherServer";

function safeFileName(fileName) {
  const ext = path.extname(fileName || "");
  const base = path
    .basename(fileName || "file", ext)
    .replace(/[^a-zA-Z0-9-_]/g, "-")
    .slice(0, 60);

  const unique =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  return `${base}-${unique}${ext}`;
}

async function triggerDashboard() {
  try {
    await pusherServer.trigger("nova-agent-dashboard", "message-updated", {});
    await pusherServer.trigger("nova-agent-dashboard", "stats-updated", {});
  } catch (error) {
    console.error("Dashboard pusher error:", error);
  }
}

export async function POST(request) {
  try {
    await dbConnect();

    const formData = await request.formData();

    const file = formData.get("file");
    const sessionId = String(formData.get("sessionId") || "");
    const visitorId = String(formData.get("visitorId") || "");
    const senderType = String(formData.get("senderType") || "visitor");
    const senderName = String(formData.get("senderName") || "Website Visitor");

    if (!file || typeof file === "string") {
      return Response.json(
        { success: false, message: "File is required." },
        { status: 400 }
      );
    }

    if (!sessionId) {
      return Response.json(
        { success: false, message: "sessionId is required." },
        { status: 400 }
      );
    }

    const session = await ChatSession.findOne({ sessionId });

    if (!session) {
      return Response.json(
        { success: false, message: "Chat session not found." },
        { status: 404 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      "live-chat"
    );

    await mkdir(uploadDir, { recursive: true });

    const storedFileName = safeFileName(file.name);
    const filePath = path.join(uploadDir, storedFileName);

    await writeFile(filePath, buffer);

    const fileUrl = `/uploads/live-chat/${storedFileName}`;

    const attachment = {
      fileName: file.name,
      fileUrl,
      fileType: file.type || "application/octet-stream",
      fileSize: file.size || buffer.length,
    };

    const newMessage = await ChatMessage.create({
      sessionId,
      visitorId: visitorId || session.visitorId || "",
      senderType,
      senderName,
      message: `Attachment: ${file.name}`,
      messageType: "attachment",
      attachment,
      readByAgent: senderType === "agent",
      readByVisitor: senderType === "visitor",
    });

    await ChatSession.findOneAndUpdate(
      { sessionId },
      {
        lastMessage: `Attachment: ${file.name}`,
        lastMessageAt: new Date(),
        ...(senderType === "visitor"
          ? { $inc: { unreadForAgent: 1 } }
          : { $inc: { unreadForVisitor: 1 } }),
      },
      { new: true }
    );

    const leanMessage = await ChatMessage.findById(newMessage._id).lean();

    await pusherServer.trigger(`nova-chat-${sessionId}`, "new-message", {
      message: leanMessage,
    });

    await triggerDashboard();

    return Response.json({
      success: true,
      message: leanMessage,
      attachment,
    });
  } catch (error) {
    console.error("Live chat upload error:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "File upload failed.",
      },
      { status: 500 }
    );
  }
}