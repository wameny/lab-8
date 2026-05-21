import { BaseHttpClient } from "./baseHttpClient.js";
import { GitHubService } from "./gitHubService.js";

const client = new BaseHttpClient();
const gitService = new GitHubService(client);
const response = await gitService.getUser("wameny");

console.log(response);
