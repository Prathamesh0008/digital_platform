import mongoose from "mongoose";

const AttachmentSchema = new mongoose.Schema(
  {
    fileName: { type: String, default: "" },
    fileUrl: { type: String, default: "" },
    fileType: { type: String, default: "" },
    fileSize: { type: Number, default: 0 },
  },
  { _id: false }
);

const ChatMessageSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      index: true,
    },

    visitorId: {
      type: String,
      default: "",
      index: true,
    },

    senderType: {
      type: String,
      enum: ["visitor", "agent", "bot", "system"],
      required: true,
      index: true,
    },

    senderName: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      default: "",
    },

    messageType: {
      type: String,
      enum: ["text", "attachment"],
      default: "text",
    },

    attachment: {
      type: AttachmentSchema,
      default: null,
    },

    readByAgent: {
      type: Boolean,
      default: false,
    },

    readByVisitor: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

ChatMessageSchema.index({ sessionId: 1, createdAt: 1 });

export default mongoose.models.ChatMessage ||
  mongoose.model("ChatMessage", ChatMessageSchema);