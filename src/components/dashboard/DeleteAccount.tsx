"use client";

import { Button } from "@heroui/react";

export default function DeleteAccount() {
  return (
   <div className="w-full flex justify-start items-start  py-6">
      <div className="w-full max-w-3xl space-y-8">
      <h3 className="text-lg font-semibold">Delete Account</h3>
      <p className="text-sm text-gray-500">
        Once you delete your account, there is no going back. Please be certain.
      </p>
      <Button variant="bordered" className="text-red-700 border-red-500">Delete Account</Button>
    </div>
    </div>
  );
}
