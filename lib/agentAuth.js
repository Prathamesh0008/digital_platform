import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "nova_agent_token";

function getSecret() {
  return process.env.AGENT_AUTH_SECRET || "nova-agent-secret";
}

export function signAgentToken(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");

  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(body)
    .digest("base64url");

  return `${body}.${signature}`;
}

export function verifyAgentToken(token) {
  if (!token || !token.includes(".")) return null;

  const [body, signature] = token.split(".");

  const expectedSignature = crypto
    .createHmac("sha256", getSecret())
    .update(body)
    .digest("base64url");

  if (signature !== expectedSignature) return null;

  try {
    return JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  } catch {
    return null;
  }
}

export async function getAgentFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return verifyAgentToken(token);
}

export async function setAgentCookie(agent) {
  const cookieStore = await cookies();

  const token = signAgentToken({
    agentId: String(agent._id),
    name: agent.name,
    email: agent.email,
  });

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
}

export async function clearAgentCookie() {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}