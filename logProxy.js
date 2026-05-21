import { HttpClient } from "./httpClient.js";

export class LoggingProxy extends HttpClient {
  constructor(client) {
    super();

    this.client = client;
  }

  async request(config) {
    console.log(`[LOG] ${config.method} ${config.url}`);

    const start = Date.now();

    const response = await this.client.request(config);

    console.log(`[LOG] Completed in ${Date.now() - start}ms`);

    return response;
  }
}
