// app/api/auth/[...nextauth]/route.ts
// import { API_BASE_URL, AUTH_SECRET, LOGIN_ROUTE } from "@/lib/utils/apiRoutes";
import { AUTH_SECRET } from "@/lib/constants";
import { REST_API_BASE_URL } from "@/lib/constants";
import NextAuth, { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { API_BASE_URL } from '@/lib/constrants';
// import { LOGIN_ROUTE } from '@/lib/constrants';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Laravel Login",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        device_id: { label: "device_id", type: "text", optional: true }, // Optional device ID
        device_name: { label: "device_name", type: "text", optional: true }, // Optional device name  
      },
      async authorize(credentials) {
        const res = await fetch(`${REST_API_BASE_URL}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" ,"Accept":"application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
            device_id: credentials?.device_id || "", // Optional device ID
            device_name: credentials?.device_name
          }),
        });

        const data = await res.json();

        if (!res.ok || !data.access_token) {
          throw new Error(data.message || "Invalid credentials");
        }

        return {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          access_token: data.access_token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.access_token = user.access_token;
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        access_token: token.access_token,
      };
      return session;
    },
  },
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 60 * 60 * 24,
  },
  secret: AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
