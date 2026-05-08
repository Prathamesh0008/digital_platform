import mongoose from "mongoose";

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
      required: true,
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

    selectedService: {
      type: String,
      default: "",
    },

    assignedAgentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
      default: null,
    },

  assignedAgentName: {
  type: String,
  default: "",
},

    status: {
      type: String,
      enum: ["pending", "active", "resolved", "closed", "offline"],
      default: "pending",
      index: true,
    },

    source: {
      type: String,
      default: "website-chatbot",
    },

    pageUrl: {
      type: String,
      default: "",
    },

    userAgent: {
      type: String,
      default: "",
    },

    startedAt: {
      type: Date,
      default: Date.now,
    },

    resolvedAt: {
      type: Date,
      default: null,
    },

    closedAt: {
      type: Date,
      default: null,
    },

    lastMessage: {
      type: String,
      default: "",
    },

    lastMessageAt: {
      type: Date,
      default: Date.now,
    },

    unreadForAgent: {
      type: Number,
      default: 0,
    },

    unreadForVisitor: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ChatSession ||
  mongoose.model("ChatSession", ChatSessionSchema);