import Pusher from "pusher";

const pusherConfig = {
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
};

const hasPusherConfig = Object.values(pusherConfig).every(Boolean);
const pusherWarnings = globalThis.__novaPusherWarnings || new Set();

globalThis.__novaPusherWarnings = pusherWarnings;

const rawPusherServer = hasPusherConfig ? new Pusher(pusherConfig) : null;

export const pusherServer = {
  enabled: hasPusherConfig,
  async trigger(channel, event, payload) {
    if (!rawPusherServer) {
      return false;
    }

    try {
      await rawPusherServer.trigger(channel, event, payload);
      return true;
    } catch (error) {
      const message = error?.message || "Unknown Pusher error";
      const warningKey = `${channel}:${event}:${message}`;

      if (!pusherWarnings.has(warningKey)) {
        pusherWarnings.add(warningKey);
        console.warn(`Pusher skipped: ${channel} / ${event}`, message);
      }

      return false;
    }
  },
};

export const CHANNELS = {
  dashboard: "nova-agent-dashboard",
  session: (sessionId) => `nova-chat-${sessionId}`,
};
