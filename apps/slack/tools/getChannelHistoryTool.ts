import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface GetChannelHistoryArgs {
  channel_id: string;
  limit?: number;
}

export const getChannelHistoryTool: Tool = {
  name: "slack_get_channel_history",
  description: "Get recent messages from a channel",
  inputSchema: {
    type: "object",
    properties: {
      channel_id: {
        type: "string",
        description: "The ID of the channel",
      },
      limit: {
        type: "number",
        description: "Number of messages to retrieve (default 10)",
        default: 10,
      },
    },
    required: ["channel_id"],
  },
};
