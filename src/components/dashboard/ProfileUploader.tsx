"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ProfileUploader() {
  const [profileImage, setProfileImage] = useState("/userimg.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Clickable Profile Image */}
      <div onClick={handleImageClick} className="cursor-pointer">
        <Image
          src={profileImage}
          width={60}
          height={60}
          className="rounded-full"
          alt="Profile"
        />
      </div>

      {/* Upload Buttons and Text */}
      <div>
        <div className="text-gray-600 text-base font-normal mb-2">
          <span>Upload a new profile picture</span>
        </div>
        <div className="flex gap-2">
          <Button
            // onClick={handleImageClick}
            className="bg-cyan-400 text-white hover:bg-cyan-600"
            size="sm"
            startContent={
              <Image src="/uploadicon.svg" alt="Upload" width={16} height={16} />
            }
          >
            Upload
          </Button>

          <Button
            size="sm"
            onClick={() => setProfileImage("/avatar.jpg")}
            className="hover:bg-cyan-400 hover:text-white"
            startContent={
              <Image src="/deleteicon.svg" alt="Remove" width={16} height={16} />
            }
          >
            Remove
          </Button>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
