"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "@heroui/react";
import AppleIcon from "@/icons/AppleIcon";
import { getOrCreateDeviceId } from "@/components/deviceId";
import getDeviceName from "@/components/getDeviceName";

export default function AppleSignInButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAppleSignIn = async () => {
    const deviceId = getOrCreateDeviceId();
   const deviceName = getDeviceName();

    // Store device info in cookies
    document.cookie = `device_id=${deviceId}; path=/`;
    document.cookie = `device_name=${deviceName}; path=/`;

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
