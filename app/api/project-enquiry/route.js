import dbConnect from "@/lib/dbConnect";
import VisitorLead from "@/models/VisitorLead";
import { computeLeadScore } from "@/lib/leadScoring";
import { detectUnsafeMessage } from "@/lib/chatSafety";

function normalize(value) {
  return String(value || "").trim();
}

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();

    const name = normalize(body.name);
    const email = normalize(body.email);
    const phone = normalize(body.phone);
    const service = normalize(body.service);
    const requirement = normalize(body.message);
    const pageUrl = normalize(body.pageUrl);
    const userAgent = normalize(body.userAgent);

    if (!name) {
      return Response.json(
        { success: false, message: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!email) {
      return Response.json(
        { success: false, message: "Please enter your email." },
        { status: 400 }
      );
    }

    if (!phone) {
      return Response.json(
        { success: false, message: "Please enter your phone number." },
        { status: 400 }
      );
    }

    if (!requirement) {
      return Response.json(
        { success: false, message: "Please enter your message." },
        { status: 400 }
      );
    }

    const unsafeCheck = detectUnsafeMessage(requirement);
    if (unsafeCheck.blocked) {
      return Response.json(
        {
          success: false,
          message:
            "Please share your requirement in a clear and respectful way.",
        },
        { status: 400 }
      );
    }

    const leadScoreData = computeLeadScore({
      contact: email || phone,
      service,
      requirement,
    });

    const lead = await VisitorLead.create({
      name,
      contact: email,
      service,
      requirement,
      website: "",
      business: "",
      location: "",
      budget: "",
      startTime: "",
      pageUrl,
      userAgent,
      source: "website-project-form",
      leadScore: leadScoreData.score,
      leadTemperature: leadScoreData.temperature,
      leadScoreReasons: [
        ...leadScoreData.reasons,
        ...(phone ? ["Phone number shared"] : []),
      ],
      riskFlags: [],
    });

    return Response.json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      leadId: String(lead._id),
    });
  } catch (error) {
    console.error("Project enquiry error:", error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong while submitting the form.",
      },
      { status: 500 }
    );
  }
}
