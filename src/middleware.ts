import { NextConfig } from "next";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  CHECKOUT_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  HOME_PAGE_PATH,
  SIGNIN_PAGE_PATH,
  SIGNUP_PAGE_PATH,
} from "./lib/pathnames";

export async function middleware(req: NextRequest) {
  const session = await auth();

  if (req.nextUrl.pathname.startsWith(DASHBOARD_PAGE_PATH)) {
    if (!session) {
      return NextResponse.redirect(new URL(SIGNIN_PAGE_PATH, req.url));
    }
  } else if (
    req.nextUrl.pathname === SIGNIN_PAGE_PATH ||
    req.nextUrl.pathname === SIGNUP_PAGE_PATH
  ) {
    if (session) {
      return NextResponse.redirect(new URL(HOME_PAGE_PATH, req.url));
    }
  } else if (req.nextUrl.pathname.startsWith(CHECKOUT_PAGE_PATH)) {
    if (!session) {
      return NextResponse.redirect(
        new URL(
          `${SIGNIN_PAGE_PATH}?redirect=${req.nextUrl.pathname}${req.nextUrl.search}`,
          req.url
        )
      );
    }
  }

  return NextResponse.next();
}

export const config: NextConfig = {
  matcher: ["/Dashboard/:path*", "/login", "/signup", "/checkout"],
};
