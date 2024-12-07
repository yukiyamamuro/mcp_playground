import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface CreateDatabaseArgs {
  parent: any;
  title: any[];
  properties: any;
}

export const createDatabaseTool: Tool = {
  name: "notion_create_database",
  description: "Create a database in Notion",
  inputSchema: {
    type: "object",
    properties: {
      parent: {
        type: "object",
        description: "Parent object of the database",
      },
      title: {
        type: "array",
        description: "Title of database as it appears in Notion. An array of rich text objects.",
      },
      properties: {
        type: "object",
        description: "Property schema of database. The keys are the names of properties as they appear in Notion and the values are property schema objects.",
      },
    },
    required: ["parent", "properties"],
  },
};
