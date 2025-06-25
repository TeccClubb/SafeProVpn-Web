import {} from "next-auth";

declare module "next-auth" {
  interface User {
    name: string;
    email: string;
    access_token: string;
  }

  interface JWT {
    name: string;
    email: string;
    access_token: string;
  }

  interface Session {
    user: User;
  }
}
