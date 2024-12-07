import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface RetrieveBlockChildrenArgs {
  block_id: string;
  start_cursor?: string;
  page_size?: number;
}

export const retrieveBlockChildrenTool: Tool = {
  name: "notion_retrieve_block_children",
  description: "Retrieve the children of a block",
  inputSchema: {
    type: "object",
    properties: {
      block_id: {
        type: "string",
        description: "The ID of the block. It should be a 32-character string (excluding hyphens) formatted as 8-4-4-4-12 with hyphens (-).",
      },
      start_cursor: {
        type: "string",
        description: "Pagination cursor for next page of results",
      },
      page_size: {
        type: "number",
        description: "Number of results per page (max 100)",
      },
    },
    required: ["block_id"],
  },
};
