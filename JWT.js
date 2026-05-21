export class JwtStrategy {
  constructor(token) {
    this.token = token;
  }

  async apply(headers = {}) {
    return {
      ...headers,
      Authorization: `Bearer ${this.token}`,
    };
  }
}
