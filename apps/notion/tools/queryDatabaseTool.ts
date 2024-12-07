import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface QueryDatabaseArgs {
  database_id: string;
  filter?: any;
  sorts?: any;
  start_cursor?: string;
  page_size?: number;
}

export const queryDatabaseTool: Tool = {
  name: "notion_query_database",
  description: "Query a database in Notion",
  inputSchema: {
    type: "object",
    properties: {
      database_id: {
        type: "string",
        description: "The ID of the database to query. It should be a 32-character string (excluding hyphens) formatted as 8-4-4-4-12 with hyphens (-).",
      },
      filter: {
        type: "object",
        description: "Filter conditions",
      },
      sorts: {
        type: "array",
        description: "Sort conditions",
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
    required: ["database_id"],
  },
};
