import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface UpdatePagePropertiesArgs {
  page_id: string;
  properties: any;
}

export const updatePagePropertiesTool: Tool = {
  name: "notion_update_page_properties",
  description: "Update properties of a page or an item in a Notion database",
  inputSchema: {
    type: "object",
    properties: {
      page_id: {
        type: "string",
        description: "The ID of the page or database item to update. It should be a 32-character string (excluding hyphens) formatted as 8-4-4-4-12 with hyphens (-).",
      },
      properties: {
        type: "object",
        description: "Properties to update. These correspond to the columns or fields in the database.",
      },
    },
    required: ["page_id", "properties"],
  },
};
