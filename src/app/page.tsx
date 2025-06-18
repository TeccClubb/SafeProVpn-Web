"use client";

import HomePage from "@/components/Home/home";
import { useSession } from "next-auth/react";
 

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
