"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@heroui/react";
import GoogleIcon from "@/icons/GoogleIcon";

export default function GoogleSignInButton() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setLoading(true); // ✅ Start loading
    signIn("google"); // 🔄 Will redirect; no need to unset loading
  };

  return (
    <Button
      variant="bordered"
      className="w-40"
      onClick={handleGoogleSignIn}
      disabled={loading}
    >
      <GoogleIcon />
      {loading ? "Signing in..." : "Google"}
    </Button>
  );
}
