import mongoose from "mongoose";

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
      enum: ["visitor", "agent", "ai", "system"],
      required: true,
    },

    senderName: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      required: true,
    },

    readStatus: {
      type: String,
      enum: ["sent", "delivered", "read"],
      default: "sent",
    },
  },
  { timestamps: true }
);

export default mongoose.models.ChatMessage ||
  mongoose.model("ChatMessage", ChatMessageSchema);