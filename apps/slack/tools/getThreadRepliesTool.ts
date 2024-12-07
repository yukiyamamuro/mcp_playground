import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface GetThreadRepliesArgs {
  channel_id: string;
  thread_ts: string;
}

export const getThreadRepliesTool: Tool = {
  name: "slack_get_thread_replies",
  description: "Get all replies in a message thread",
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
    },
    required: ["channel_id", "thread_ts"],
  },
};
