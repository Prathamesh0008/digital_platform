const TOXIC_PATTERNS = [
  /\b(fuck|f\*ck|mf|motherfucker)\b/i,
  /\b(bitch|bastard|slut|whore)\b/i,
  /\b(chutiya|mc|bc|bhenchod|madarchod|gandu)\b/i,
  /\b(kill you|die you|rape)\b/i,
];

const SPAM_PATTERNS = [
  /(https?:\/\/|www\.)/i,
  /\b(bit\.ly|tinyurl|t\.co)\b/i,
  /\b(buy now|limited offer|free money|casino|crypto signal)\b/i,
];

const REPEATED_CHAR_PATTERN = /(.)\1{7,}/i;

function normalize(text) {
  return String(text || "").trim();
}

export function detectUnsafeMessage(text) {
  const value = normalize(text);
  if (!value) return { blocked: false, reason: "" };

  if (value.length > 900) {
    return { blocked: true, reason: "Message is too long." };
  }

  if (REPEATED_CHAR_PATTERN.test(value)) {
    return { blocked: true, reason: "Message appears to be spam." };
  }

  if (TOXIC_PATTERNS.some((pattern) => pattern.test(value))) {
    return { blocked: true, reason: "Message contains toxic language." };
  }

  const hasManyLinks = (value.match(/https?:\/\//gi) || []).length >= 2;
  if (hasManyLinks || SPAM_PATTERNS.some((pattern) => pattern.test(value))) {
    return { blocked: true, reason: "Message appears to be promotional spam." };
  }

  return { blocked: false, reason: "" };
}

export const SAFE_FALLBACK_MESSAGE =
  "I can help with website, SEO, social media, paid ads, branding, and lead generation. Please share your requirement in one clear sentence.";
