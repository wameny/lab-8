import { HttpClient } from "./httpClient.js";

export class AuthProxy extends HttpClient {
  constructor(client, strategy) {
    super();

    this.client = client;
    this.strategy = strategy;
  }

  async request(config) {
    const headers = await this.strategy.apply(config.headers || {});

    return this.client.request({
      ...config,
      headers,
    });
  }
}
