import dbConnect from "@/lib/dbConnect";
import ChatbotFaq from "@/models/ChatbotFaq";

export async function GET() {
  try {
    await dbConnect();

    const faqs = await ChatbotFaq.find({ isActive: true })
      .sort({ updatedAt: -1 })
      .limit(200)
      .lean();

    return Response.json({
      success: true,
      faqs,
    });
  } catch (error) {
    console.error("Get chatbot FAQs error:", error);
    return Response.json({ success: false, faqs: [] }, { status: 500 });
  }
}
