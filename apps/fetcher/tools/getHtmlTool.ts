import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export interface GetHtmlArgs {
  url: string;
}

export const getHtmlTool: Tool = {
  name: "fetcher_get_html",
  description:
    "Get raw HTML content from a URL",
  inputSchema: {
    type: "object",
    properties: {
      url: {
        type: "string",
        description: "url you want to fetch",
      },
    },
  },
};
