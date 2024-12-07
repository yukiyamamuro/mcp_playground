export class FetcherClient {
  async getHtml(url: string): Promise<string> {
    const response = await fetch(url);
    return response.text();
  }
}
