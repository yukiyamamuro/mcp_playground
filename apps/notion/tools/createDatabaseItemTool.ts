import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface CreateDatabaseItemArgs {
  database_id: string;
  properties: any;
}

export const createDatabaseItemTool: Tool = {
  name: "notion_create_database_item",
  description: "Create a new item (page) in a Notion database",
  inputSchema: {
    type: "object",
    properties: {
      database_id: {
        type: "string",
        description: "The ID of the database to add the item to. It should be a 32-character string (excluding hyphens) formatted as 8-4-4-4-12 with hyphens (-).",
      },
      properties: {
        type: "object",
        description: "Properties of the new database item. These should match the database schema.",
      },
    },
    required: ["database_id", "properties"],
  },
};
