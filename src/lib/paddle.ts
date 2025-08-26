import { Environment, LogLevel, Paddle } from "@paddle/paddle-node-sdk";
import { PADDLE_API_KEY, PADDLE_ENVIRONMENT } from "./constants";

export const paddle = new Paddle(PADDLE_API_KEY, {
  environment: PADDLE_ENVIRONMENT as Environment,
  logLevel: LogLevel.verbose,
});
