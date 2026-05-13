import mongoose from "mongoose";

const ChatbotFaqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
    keywords: {
      type: [String],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    createdByAgentId: {
      type: String,
      default: "",
    },
    createdByAgentName: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

ChatbotFaqSchema.index({ isActive: 1, updatedAt: -1 });

export default mongoose.models.ChatbotFaq ||
  mongoose.model("ChatbotFaq", ChatbotFaqSchema);
