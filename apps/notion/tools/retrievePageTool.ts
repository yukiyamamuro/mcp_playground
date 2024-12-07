import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface RetrievePageArgs {
  page_id: string;
}

export const retrievePageTool: Tool = {
  name: "notion_retrieve_page",
  description: "Retrieve a page from Notion",
  inputSchema: {
    type: "object",
    properties: {
      page_id: {
        type: "string",
        description: "The ID of the page to retrieve. It should be a 32-character string (excluding hyphens) formatted as 8-4-4-4-12 with hyphens (-).",
      },
    },
    required: ["page_id"],
  },
};
