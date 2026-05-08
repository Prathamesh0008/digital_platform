import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema(
  {
    visitorId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    name: {
      type: String,
      default: "",
    },

    contact: {
      type: String,
      default: "",
    },

    business: {
      type: String,
      default: "",
    },

    selectedService: {
      type: String,
      default: "",
    },

    pageUrl: {
      type: String,
      default: "",
    },

    userAgent: {
      type: String,
      default: "",
    },

    isOnline: {
      type: Boolean,
      default: false,
      index: true,
    },

    lastSeenAt: {
      type: Date,
      default: Date.now,
    },

    totalSessions: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Visitor ||
  mongoose.model("Visitor", VisitorSchema);