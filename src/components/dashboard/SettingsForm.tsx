"use client";

import { Input, Button } from "@heroui/react"; // ✅ Hero UI components
import ProfileUploader from "./ProfileUploader";
import { Underline } from "lucide-react";

export default function SettingsForm() {
  return (
    <div className="w-full flex justify-start items-start  py-6">
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Profile Information</h2>

          <ProfileUploader />

          <div className="grid grid-cols-1 md:grid-cols-2 pb-5 gap-4">

            <Input label="First Name" placeholder="John" labelPlacement="outside" type="text" variant="bordered" />

            <Input label="Last Name" type="text" placeholder="Smit" labelPlacement="outside" variant="bordered" />
          </div>

          <Input label="Email" placeholder="john.smith@example.com" labelPlacement="outside" type="email" variant="bordered" />

          <Button className="mt-2 bg-cyan-400 hover:bg-cyan-500 text-white" variant="solid">Save Changes</Button>
        </div>
      </div>
    </div>

  );
}
