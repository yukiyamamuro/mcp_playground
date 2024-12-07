import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface AppendBlockChildrenArgs {
  block_id: string;
  children: any[];
}

export const appendBlockChildrenTool: Tool = {
  name: "notion_append_block_children",
  description: "Append blocks to a parent block in Notion",
  inputSchema: {
    type: "object",
    properties: {
      block_id: {
        type: "string",
        description: "The ID of the parent block. It should be a 32-character string (excluding hyphens) formatted as 8-4-4-4-12 with hyphens (-).",
      },
      children: {
        type: "array",
        description: "Array of block objects to append",
      },
    },
    required: ["block_id", "children"],
  },
};
