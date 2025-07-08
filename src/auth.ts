import NextAuth, { JWT, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {
  LOGIN_WITH_APPLE_ROUTE,
  LOGIN_WITH_GOOGLE_ROUTE,
} from "./lib/constants";
import { deviceInfo, getIPAddress } from "./lib/utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      authorize: (credentials) => {
        return {
          id: credentials.id,
          name: credentials.name,
          avatar: credentials.avatar,
          email: credentials.email,
          access_token: credentials.access_token,
        } as User;
      },
    }),
  ],

  callbacks: {
    signIn: async ({ user, account, credentials }) => {
      if (credentials) return true;

      if (account) {
        if (account.provider === "google" || account.provider === "apple") {
          try {
            const res = await fetch(
              account.provider === "google"
                ? LOGIN_WITH_GOOGLE_ROUTE
                : LOGIN_WITH_APPLE_ROUTE,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body:
                  account.provider === "google"
                    ? JSON.stringify({
                        token: account.access_token,
                        ip_address: await getIPAddress(),
                        ...deviceInfo,
                      })
                    : JSON.stringify({
                        id_token: account.id_token,
                        ip_address: await getIPAddress(),
                        ...deviceInfo,
                      }),
              }
            ).then((res) => res.json());

            if (res.status) {
              user.id = res.user.id;
              user.email = res.user.email;
              user.name = res.user.name;
              user.avatar = res.user.avatar;
              user.access_token = res.access_token;
              return true;
            } else return `/auth/error?error=${res.message}`;
          } catch (error) {
            return `/auth/error?error=${
              error instanceof Error ? error.message : "Failed to login"
            }`;
          }
        }
      }

      return false;
    },

    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.avatar = user.avatar;
        token.access_token = user.access_token;
      }

      return token;
    },

    session: ({ session, token }) => {
      if (token) {
        const jwt = token as unknown as JWT;
        session.user.id = jwt.id as string;
        session.user.email = jwt.email;
        session.user.name = jwt.name;
        session.user.avatar = jwt.avatar;
        session.user.access_token = jwt.access_token;
      }

      return session;
    },
  },
});
