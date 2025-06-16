"use client";

import { Button } from "@heroui/react"; // ✅ Hero UI Button
import Image from "next/image";
import { useState } from "react";

export default function ProfileUploader() {
  const [profileImage, setProfileImage] = useState("/userimg.jpg"); // Default image path

  return (
    <div className="flex items-center gap-4">
      <Image
        src={profileImage}
        width={60}
        height={60}
        className="rounded-full"
        alt="Profile"
      />
      <div>
        <div className="text-gray-600 text-base font-normal mb-2">
          <span>Upload a new profile picture</span>
        </div>
        <div className="flex gap-2">

          <Button
            className="bg-cyan-400 text-white hover:bg-cyan-600"
            size="sm"
            startContent={<Image src="/uploadicon.svg" alt="Upload" width={16} height={16} />}
          >
            Upload
          </Button>

          <Button
            size="sm"
            // variant="ghost"
            onClick={() => setProfileImage("/avatar.jpg")}
             className="hover:bg-cyan-400   hover:text-white"
            startContent={<Image src="/deleteicon.svg" alt="Remove" width={16} height={16} />}
          >
            Remove
          </Button>
        </div>
      </div>
      <img>
      </img>


    </div>
  );
}
