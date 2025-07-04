"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import AppleIcon from "@/icons/AppleIcon";

export default function AppleSignInButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAppleSignIn = async () => {
    setLoading(true); // ✅ Start loading
    signIn("apple"); // 🔄 Will redirect; no need to unset loading
  };

  return (
    <Button
      variant="bordered"
      className="w-40"
      onClick={handleAppleSignIn}
      disabled={loading}
    >
      <AppleIcon />
      {loading ? "Signing in..." : "Apple"}
    </Button>
  );
}
