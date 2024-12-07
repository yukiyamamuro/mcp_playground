
export class NotionClient {
  private notionToken: string;
  private baseUrl: string = "https://api.notion.com/v1";
  private headers: { [key: string]: string };

  constructor(token: string) {
    this.notionToken = token;
    this.headers = {
      "Authorization": `Bearer ${this.notionToken}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    };
  }

  async appendBlockChildren(block_id: string, children: any[]): Promise<any> {
    const body = { children };

    const response = await fetch(`${this.baseUrl}/blocks/${block_id}/children`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(body),
    });

    return response.json();
  }

  async retrieveBlock(block_id: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/blocks/${block_id}`, {
      method: "GET",
      headers: this.headers,
    });

    return response.json();
  }

  async retrieveBlockChildren(
    block_id: string,
    start_cursor?: string,
    page_size?: number,
  ): Promise<any> {
    const params = new URLSearchParams();
    if (start_cursor) params.append("start_cursor", start_cursor);
    if (page_size) params.append("page_size", page_size.toString());

    const response = await fetch(`${this.baseUrl}/blocks/${block_id}/children?${params}`, {
      method: "GET",
      headers: this.headers,
    });

    return response.json();
  }

  async deleteBlock(block_id: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/blocks/${block_id}`, {
      method: "DELETE",
      headers: this.headers,
    });

    return response.json();
  }

  async retrievePage(page_id: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/pages/${page_id}`, {
      method: "GET",
      headers: this.headers,
    });

    return response.json();
  }

  async updatePageProperties(page_id: string, properties: any): Promise<any> {
    const body = { properties };

    const response = await fetch(`${this.baseUrl}/pages/${page_id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(body),
    });

    return response.json();
  }

  async createDatabase(parent: any, title: any[], properties: any): Promise<any> {
    const body = { parent, title, properties };

    const response = await fetch(`${this.baseUrl}/databases`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body),
    });

    return response.json();
  }

  async queryDatabase(
    database_id: string,
    filter?: any,
    sorts?: any,
    start_cursor?: string,
    page_size?: number,
  ): Promise<any> {
    const body: any = {};
    if (filter) body.filter = filter;
    if (sorts) body.sorts = sorts;
    if (start_cursor) body.start_cursor = start_cursor;
    if (page_size) body.page_size = page_size;

    const response = await fetch(`${this.baseUrl}/databases/${database_id}/query`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body),
    });

    return response.json();
  }

  async retrieveDatabase(database_id: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/databases/${database_id}`, {
      method: "GET",
      headers: this.headers,
    });

    return response.json();
  }

  async updateDatabase(database_id: string, title?: any[], description?: any[], properties?: any): Promise<any> {
    const body: any = {};
    if (title) body.title = title;
    if (description) body.description = description;
    if (properties) body.properties = properties;

    const response = await fetch(`${this.baseUrl}/databases/${database_id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(body),
    });

    return response.json();
  }

  async createDatabaseItem(database_id: string, properties: any): Promise<any> {
    const body = {
      parent: { database_id },
      properties,
    };

    const response = await fetch(`${this.baseUrl}/pages`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body),
    });

    return response.json();
  }
}
