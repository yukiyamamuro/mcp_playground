import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface ReplyToThreadArgs {
  channel_id: string;
  thread_ts: string;
  text: string;
}

export const replyToThreadTool: Tool = {
  name: "slack_reply_to_thread",
  description: "Reply to a specific message thread in Slack",
  inputSchema: {
    type: "object",
    properties: {
      channel_id: {
        type: "string",
        description: "The ID of the channel containing the thread",
      },
      thread_ts: {
        type: "string",
        description: "The timestamp of the parent message",
      },
      text: {
        type: "string",
        description: "The reply text",
      },
    },
    required: ["channel_id", "thread_ts", "text"],
  },
};
