import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema(
  {
    value: { type: Number, min: 1, max: 5, default: null },
    visitorId: { type: String, default: "" },
    visitorName: { type: String, default: "" },
    createdAt: { type: Date, default: null },
  },
  { _id: false }
);

const ChatSessionSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    visitorId: {
      type: String,
      default: "",
      index: true,
    },

    visitorName: {
      type: String,
      default: "",
    },

    visitorContact: {
      type: String,
      default: "",
    },

    visitorBusiness: {
      type: String,
      default: "",
    },

    visitorLocation: {
      type: String,
      default: "",
    },

    visitorRequirement: {
      type: String,
      default: "",
    },

    selectedService: {
      type: String,
      default: "General enquiry",
    },

    pageUrl: {
      type: String,
      default: "",
    },

    userAgent: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["pending", "active", "resolved", "closed", "offline"],
      default: "pending",
      index: true,
    },

    assignedAgentId: {
      type: String,
      default: "",
    },

    assignedAgentName: {
      type: String,
      default: "",
    },

    assignedAgentEmail: {
      type: String,
      default: "",
    },

    lastMessage: {
      type: String,
      default: "",
    },

    lastMessageAt: {
      type: Date,
      default: Date.now,
      index: true,
    },

    unreadForAgent: {
      type: Number,
      default: 0,
    },

    unreadForVisitor: {
      type: Number,
      default: 0,
    },

    rating: {
      type: RatingSchema,
      default: null,
    },

    closedAt: {
      type: Date,
      default: null,
    },

    resolvedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

ChatSessionSchema.index({ updatedAt: -1 });
ChatSessionSchema.index({ status: 1, updatedAt: -1 });

export default mongoose.models.ChatSession ||
  mongoose.model("ChatSession", ChatSessionSchema);