function isValidContact(contact) {
  const value = String(contact || "").trim();
  if (!value) return false;

  const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const digits = value.replace(/\D/g, "");
  const phoneLike = digits.length >= 10;
  return emailLike || phoneLike;
}

export function computeLeadScore(input = {}) {
  const reasons = [];
  let score = 0;

  const requirement = String(input.requirement || "");
  const service = String(input.service || "");
  const budget = String(input.budget || "").toLowerCase();
  const startTime = String(input.startTime || "").toLowerCase();
  const contact = String(input.contact || "");

  if (isValidContact(contact)) {
    score += 25;
    reasons.push("Valid contact details");
  }

  if (service && service !== "General enquiry") {
    score += 20;
    reasons.push("Specific service selected");
  }

  if (requirement.length >= 35) {
    score += 20;
    reasons.push("Detailed requirement shared");
  }

  if (
    budget.includes("50") ||
    budget.includes("1 lakh") ||
    budget.includes("100000") ||
    budget.includes("high")
  ) {
    score += 20;
    reasons.push("Strong budget signal");
  } else if (budget) {
    score += 10;
    reasons.push("Budget intent available");
  }

  if (
    startTime.includes("asap") ||
    startTime.includes("immediate") ||
    startTime.includes("this week")
  ) {
    score += 15;
    reasons.push("Urgent timeline");
  } else if (startTime) {
    score += 8;
    reasons.push("Timeline available");
  }

  const finalScore = Math.max(0, Math.min(100, score));

  let temperature = "cold";
  if (finalScore >= 75) temperature = "hot";
  else if (finalScore >= 45) temperature = "warm";

  return {
    score: finalScore,
    temperature,
    reasons,
  };
}
