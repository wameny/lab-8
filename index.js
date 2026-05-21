import { BaseHttpClient } from "./baseHttpClient.js";
import { GitHubService } from "./gitHubService.js";
import { JwtStrategy } from "./JWT.js";
import { AuthProxy } from "./authProxy.js";
import { LoggingProxy } from "./logProxy.js";

const client = new BaseHttpClient();

const method = new JwtStrategy("token");

const authClient = new AuthProxy(client, method);
const logClient = new LoggingProxy(authClient); //for 200 write client, without jwt

const gitService = new GitHubService(logClient);
const response = await gitService.getUser("wameny");

console.log(response);
