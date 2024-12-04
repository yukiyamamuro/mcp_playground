import { type Tool } from "@modelcontextprotocol/sdk/types.js";

export interface ListChannelsArgs {
  limit?: number;
  cursor?: string;
}

export const listChannelsTool: Tool = {
  name: "slack_list_channels",
  description: "List public channels in the workspace with pagination",
  inputSchema: {
    type: "object",
    properties: {
      limit: {
        type: "number",
        description:
          "Maximum number of channels to return (default 100, max 200)",
        default: 100,
      },
      cursor: {
        type: "string",
        description: "Pagination cursor for next page of results",
      },
    },
  },
};
