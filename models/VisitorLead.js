import mongoose from "mongoose";

const VisitorLeadSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      default: "",
      index: true,
    },

    visitorId: {
      type: String,
      default: "",
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

    service: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    requirement: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },

    budget: {
      type: String,
      default: "",
    },

    startTime: {
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

    source: {
      type: String,
      default: "website-chatbot",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.VisitorLead ||
  mongoose.model("VisitorLead", VisitorLeadSchema);