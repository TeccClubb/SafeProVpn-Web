import { AUTH_SECRET } from "@/lib/constants";
import { REST_API_BASE_URL } from "@/lib/constants";
import NextAuth, { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import { generateAppleClientSecret } from "@/lib/generateAppleClientSecret";
import { getOrCreateDeviceId } from "@/components/deviceId";
import getDeviceName from "@/components/getDeviceName";
import { cookies } from "next/headers";

const authOptions = {
  providers: [
    // ✅ Laravel login with credentials
    CredentialsProvider({
      name: "Laravel Login",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        device_id: { label: "device_id", type: "text", optional: true },
        device_name: { label: "device_name", type: "text", optional: true },
      },
      async authorize(credentials) {
        const res = await fetch(`${REST_API_BASE_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
            device_id: credentials?.device_id || "",
            device_name: credentials?.device_name,
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

    // ✅ Google login
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    AppleProvider({
      clientId: process.env.AUTH_APPLE_ID!,
      clientSecret: generateAppleClientSecret(),
    }),


  ],

  // ✅ Callbacks for both providers
  callbacks: {
  //  import { cookies } from "next/headers"; // If using cookies fallback


async jwt({ token, user, account, trigger }: any) {
  // ✅ Google login
  if (account?.provider === "google" && trigger === "signIn") {
    try {
      const cookieStore = await cookies();
      const device_id = cookieStore.get("device_id")?.value || "";
      const device_name = cookieStore.get("device_name")?.value || "";

      const backendRes = await fetch(`${REST_API_BASE_URL}/login/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          token: account.access_token,
          device_id,
          device_name,
        }),
      });

      const backendData = await backendRes.json();
      if (!backendRes.ok || !backendData.access_token) {
        console.error("Backend Google login failed:", backendData);
        throw new Error(
          backendData.message?.[0] ||
            backendData.message ||
            "Google backend login failed"
        );
      }

      token.access_token = backendData.access_token;
      token.id = backendData.user.id;
      token.name = backendData.user.name;
      token.email = backendData.user.email;
    } catch (err) {
      console.error("Error in Google login jwt callback:", err);
    }
  }

  // ✅ Credentials login
  if (account?.provider === "credentials" && user) {
    token.access_token = user.access_token;
    token.id = user.id;
    token.name = user.name;
    token.email = user.email;
  }

  return token;
}

,



   async session({ session, token }: { session: any; token: any }) {
  session.user = {
    id: token.id,
    name: token.name,
    email: token.email,
    access_token: token.access_token,
  };
  return session;
}

  },

  // ✅ JWT-based session
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 60 * 60 * 24, // 24 hours
  },

  // ✅ Set secret and login page
  secret: AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
