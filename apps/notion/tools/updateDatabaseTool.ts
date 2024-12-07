import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface UpdateDatabaseArgs {
  database_id: string;
  title?: any[];
  description?: any[];
  properties?: any;
}

export const updateDatabaseTool: Tool = {
  name: "notion_update_database",
  description: "Update a database in Notion",
  inputSchema: {
    type: "object",
    properties: {
      database_id: {
        type: "string",
        description: "The ID of the database to update. It should be a 32-character string (excluding hyphens) formatted as 8-4-4-4-12 with hyphens (-).",
      },
      title: {
        type: "array",
        description: "An array of rich text objects that represents the title of the database that is displayed in the Notion UI.",
      },
      description: {
        type: "array",
        description: "An array of rich text objects that represents the description of the database that is displayed in the Notion UI.",
      },
      properties: {
        type: "object",
        description: "The properties of a database to be changed in the request, in the form of a JSON object.",
      },
    },
    required: ["database_id"],
  },
};
