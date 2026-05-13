import OpenAI from "openai";
import { buildKnowledgePrompt } from "@/data/chatbotKnowledge";
import dbConnect from "@/lib/dbConnect";
import ChatbotFaq from "@/models/ChatbotFaq";
import { detectUnsafeMessage, SAFE_FALLBACK_MESSAGE } from "@/lib/chatSafety";

export const dynamic = "force-dynamic";

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

const DEFAULT_FALLBACK_REPLIES = [
  "Website Development",
  "SEO Services",
  "Request a Quote",
  "Talk to Live Agent",
];

export async function POST(request) {
  try {
    const body = await request.json();
    const userMessage = body?.message;

    if (!userMessage || typeof userMessage !== "string") {
      return Response.json(
        {
          answer:
            "Please share your requirement, and I will guide you with the right digital marketing solution.",
          fallback: { quickReplies: DEFAULT_FALLBACK_REPLIES },
        },
        { status: 400 }
      );
    }

    const unsafeCheck = detectUnsafeMessage(userMessage);
    if (unsafeCheck.blocked) {
      return Response.json({
        answer:
          "Please keep your message respectful and specific. Share your requirement and I will help right away.",
        fallback: { quickReplies: DEFAULT_FALLBACK_REPLIES },
      });
    }

    await dbConnect();
    const customFaqs = await ChatbotFaq.find({ isActive: true })
      .sort({ updatedAt: -1 })
      .limit(120)
      .lean();

    const dynamicFaqPrompt =
      customFaqs.length > 0
        ? `\nLatest trained FAQs:\n${customFaqs
            .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
            .join("\n\n")}\n`
        : "";

    if (!client) {
      return Response.json({
        answer: SAFE_FALLBACK_MESSAGE,
        fallback: { quickReplies: DEFAULT_FALLBACK_REPLIES },
      });
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `
${buildKnowledgePrompt()}
${dynamicFaqPrompt}

Visitor question:
${userMessage}

Reply as NovaTech Assistant. Keep the answer short, helpful, and professional.
`,
    });

    return Response.json({
      answer: response.output_text || SAFE_FALLBACK_MESSAGE,
      fallback: { quickReplies: DEFAULT_FALLBACK_REPLIES },
    });
  } catch (error) {
    console.error("Chatbot API Error:", error);

    return Response.json(
      {
        answer:
          "I could not process that right now. You can continue with a quick option below or connect to a live agent.",
        fallback: { quickReplies: DEFAULT_FALLBACK_REPLIES },
      },
      { status: 500 }
    );
  }
}
