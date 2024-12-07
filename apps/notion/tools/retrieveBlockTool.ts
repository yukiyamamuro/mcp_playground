import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface RetrieveBlockArgs {
  block_id: string;
}

export const retrieveBlockTool: Tool = {
  name: "notion_retrieve_block",
  description: "Retrieve a block from Notion",
  inputSchema: {
    type: "object",
    properties: {
      block_id: {
        type: "string",
        description: "The ID of the block to retrieve. It should be a 32-character string (excluding hyphens) formatted as 8-4-4-4-12 with hyphens (-).",
      },
    },
    required: ["block_id"],
  },
}
