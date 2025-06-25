import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

const EXPIRATION_SECONDS = 3600; // 1 hour

export function generateAppleClientSecret() {
  const AUTH_APPLE_ID = process.env.AUTH_APPLE_ID;
  const AUTH_APPLE_KEY_ID = process.env.AUTH_APPLE_KEY_ID;
  const AUTH_APPLE_TEAM_ID = process.env.AUTH_APPLE_TEAM_ID;

  if (!AUTH_APPLE_ID || !AUTH_APPLE_KEY_ID || !AUTH_APPLE_TEAM_ID) {
    throw new Error("Missing one or more required Apple auth environment variables.");
  }

  const privateKeyPath = path.join(
    process.cwd(),
    "keys",
    `AuthKey_${AUTH_APPLE_KEY_ID}.p8`
  );

  const privateKey = fs.readFileSync(privateKeyPath, "utf8");
  const now = Math.floor(Date.now() / 1000);

  const token = jwt.sign(
    {
      iss: AUTH_APPLE_TEAM_ID,
      iat: now,
      exp: now + EXPIRATION_SECONDS,
      aud: "https://appleid.apple.com",
      sub: AUTH_APPLE_ID,
    },
    privateKey,
    {
      algorithm: "ES256",
      keyid: AUTH_APPLE_KEY_ID,
    }
  );

  return token;
}
