import OpenAI from "openai";
import { buildKnowledgePrompt } from "@/data/chatbotKnowledge";

export const dynamic = "force-dynamic";

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

export async function POST(request) {
  try {
    const body = await request.json();
    const userMessage = body?.message;

    if (!userMessage || typeof userMessage !== "string") {
      return Response.json(
        {
          answer:
            "Please share your requirement, and I’ll guide you with the right digital marketing solution.",
        },
        { status: 400 }
      );
    }

    if (!client) {
      return Response.json({
        answer:
          "I’ll need a few more details to guide you properly. Please share your requirement, and our team will assist you.",
      });
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `
${buildKnowledgePrompt()}

Visitor question:
${userMessage}

Reply as NovaTech Assistant. Keep the answer short, helpful, and professional.
`,
    });

    return Response.json({
      answer:
        response.output_text ||
        "I’ll need a few more details to guide you properly. Please share your requirement, and our team will assist you.",
    });
  } catch (error) {
    console.error("Chatbot API Error:", error);

    return Response.json(
      {
        answer:
          "Sorry, I’m unable to generate an answer right now. Please share your requirement, and our team will assist you.",
      },
      { status: 500 }
    );
  }
}