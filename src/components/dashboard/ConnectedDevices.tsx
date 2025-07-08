"use client";

import { image } from "@heroui/react";
import { Trash2 } from "lucide-react";
import Image from "next/image";

const devices = [
  { name: "MacBook Pro", lastActive: "Today at 10:23 AM", current: true, image: "/dashboard/laptop.png" },
  { name: "iPhone 13", lastActive: "Yesterday at 8:45 PM", current: false, image: "/dashboard/iphone.png" },
  { name: "Windows PC", lastActive: "May 20, 2023", current: false, image: "/dashboard/computer.png" },
];

export default function ConnectedDevices() {
  return (
    <div className="w-full flex justify-start items-start  py-6">
      <div className="w-full max-w-3xl space-y-8">


        <h3 className="text-lg font-semibold">Connected Devices</h3>
        <div className="space-y-3">
          {devices.map((device, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50 transition"
            >
              {/* <div className="flex items-center gap-3">
              <img src={device.image} alt={device.name} className="w-10 h-10 rounded-md" />
              </div> */}
              <div className="div flex items-center gap-3">
                <Image width={25} height={25} src={device.image} alt={device.name} className="  rounded-md" />
                <div>
                  <p className="font-medium">{device.name}</p>
                  <p className="text-sm text-default-500">Last active: {device.lastActive}</p>

                </div>
              </div>
              <div className="flex items-center gap-3">
                {device.current && (
                  <span className="text-xs px-2 py-1 rounded-full bg-cyan-100 text-cyan-500">Current</span>
                )}
                <Trash2 className="w-4 h-4 text-default-500 hover:text-red-500 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
