import { HttpClient } from "./httpClient.js";

export class BaseHttpClient extends HttpClient {
  async request(config) {
    const response = await fetch(config.url, {
      method: config.method || "GET",
      headers: config.headers || {},
      body: config.body ? JSON.stringify(config.body) : undefined,
    });

    const data = await response.json();

    return {
      status: response.status,
      data,
    };
  }
}
