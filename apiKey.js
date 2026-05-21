export class ApiKeyStrategy {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async apply(headers = {}) {
    return {
      ...headers,
      "x-api-key": this.apiKey,
    };
  }
}
