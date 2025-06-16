"use client";

import { Button } from "@heroui/react";
import Image from "next/image";

export default function TwoFactorAuth() {
  return (
    <div className="w-full flex justify-start items-start  py-6">
      <div className="w-full max-w-3xl space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-cyan-100 text-cyan-500">Enabled</span>
        </div>
        <p className="text-sm text-gray-500">
          Two-factor authentication adds an extra layer of security to your account. In addition to your password, you’ll need to enter a code from your authentication app.
        </p>
        <div className="flex gap-3">
          <Button variant="bordered" startContent={<Image src="/dashboard/setuptwofa.svg" alt="set2FA" width={16} height={16} />}
          >Setup New Device</Button>
          <Button
            className="text-red-500 border-red-400"
            variant="bordered"
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-500 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
          >
            Remove
          </Button>

        </div>
      </div>
    </div>
  );
}
