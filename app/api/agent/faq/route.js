import dbConnect from "@/lib/dbConnect";
import { getAgentFromCookie } from "@/lib/agentAuth";
import ChatbotFaq from "@/models/ChatbotFaq";

function normalizeKeywords(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw
      .map((item) => String(item || "").trim().toLowerCase())
      .filter(Boolean);
  }

  return String(raw)
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

async function ensureAgent() {
  const authAgent = await getAgentFromCookie();
  if (!authAgent?.agentId) return null;
  return authAgent;
}

export async function GET() {
  try {
    await dbConnect();
    const authAgent = await ensureAgent();
    if (!authAgent) return Response.json({ success: false }, { status: 401 });

    const faqs = await ChatbotFaq.find({})
      .sort({ updatedAt: -1 })
      .limit(300)
      .lean();

    return Response.json({ success: true, faqs });
  } catch (error) {
    console.error("Agent FAQ list error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const authAgent = await ensureAgent();
    if (!authAgent) return Response.json({ success: false }, { status: 401 });

    const body = await request.json();
    const question = String(body.question || "").trim();
    const answer = String(body.answer || "").trim();
    const keywords = normalizeKeywords(body.keywords);

    if (!question || !answer) {
      return Response.json(
        { success: false, message: "Question and answer are required." },
        { status: 400 }
      );
    }

    const faq = await ChatbotFaq.create({
      question,
      answer,
      keywords,
      isActive: true,
      createdByAgentId: String(authAgent.agentId),
      createdByAgentName: String(authAgent.name || ""),
    });

    return Response.json({ success: true, faq });
  } catch (error) {
    console.error("Agent FAQ create error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    await dbConnect();
    const authAgent = await ensureAgent();
    if (!authAgent) return Response.json({ success: false }, { status: 401 });

    const body = await request.json();
    const id = String(body.id || "");

    if (!id) {
      return Response.json(
        { success: false, message: "FAQ id is required." },
        { status: 400 }
      );
    }

    const update = {};
    if ("question" in body) update.question = String(body.question || "").trim();
    if ("answer" in body) update.answer = String(body.answer || "").trim();
    if ("keywords" in body) update.keywords = normalizeKeywords(body.keywords);
    if ("isActive" in body) update.isActive = Boolean(body.isActive);

    const faq = await ChatbotFaq.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!faq) {
      return Response.json(
        { success: false, message: "FAQ not found." },
        { status: 404 }
      );
    }

    return Response.json({ success: true, faq });
  } catch (error) {
    console.error("Agent FAQ update error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await dbConnect();
    const authAgent = await ensureAgent();
    if (!authAgent) return Response.json({ success: false }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") || "";

    if (!id) {
      return Response.json(
        { success: false, message: "FAQ id is required." },
        { status: 400 }
      );
    }

    await ChatbotFaq.findByIdAndDelete(id);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Agent FAQ delete error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
