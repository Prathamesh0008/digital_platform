import mongoose from "mongoose";

const AgentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Nova Agent",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    role: {
      type: String,
      default: "agent",
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    lastSeenAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Agent || mongoose.model("Agent", AgentSchema);