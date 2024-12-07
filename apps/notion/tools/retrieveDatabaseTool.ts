import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface RetrieveDatabaseArgs {
  database_id: string;
}

export const retrieveDatabaseTool: Tool = {
  name: "notion_retrieve_database",
  description: "Retrieve a database in Notion",
  inputSchema: {
    type: "object",
    properties: {
      database_id: {
        type: "string",
        description: "The ID of the database to retrieve. It should be a 32-character string (excluding hyphens) formatted as 8-4-4-4-12 with hyphens (-).",
      },
    },
    required: ["database_id"],
  },
};
