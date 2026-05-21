import { BaseHttpClient } from "./baseHttpClient.js";

const client = new BaseHttpClient();

const response = await client.request({
  method: "GET",
  url: "https://api.github.com/users/wameny",
});

console.log(response);
