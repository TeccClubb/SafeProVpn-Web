import {} from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    avatar?: string;
    email: string;
    access_token: string;
  };

  interface JWT {
    id: string;
    name: string;
    avatar?: string;
    email: string;
    access_token: string;
  };

  interface Session {
    user: User;
  };
}
