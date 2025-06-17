"use client";

import HomePage from "@/components/Home/home";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("Session:", session);
  }, [session]);

  return (
    <div>
      <HomePage />
    </div>
  );
}
