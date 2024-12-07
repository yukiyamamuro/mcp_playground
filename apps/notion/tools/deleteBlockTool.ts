import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface DeleteBlockArgs {
  block_id: string;
}

export const deleteBlockTool: Tool = {
  name: "notion_delete_block",
  description: "Delete a block in Notion",
  inputSchema: {
    type: "object",
    properties: {
      block_id: {
        type: "string",
        description: "The ID of the block to delete. It should be a 32-character string (excluding hyphens) formatted as 8-4-4-4-12 with hyphens (-).",
      },
    },
    required: ["block_id"],
  },
};
