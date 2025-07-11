"use client";
import { useDevices } from "@/hooks/useDevices";
import { REST_API_BASE_URL } from "@/lib/constants";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
// const devices = [
//   { name: "MacBook Pro", ip: "192.168.1.101", status: "Online", dataUsed: 84.2, lastActive: "Now", icon: <FaLaptop /> },
//   { name: "iPhone 13", ip: "192.168.1.102", status: "Online", dataUsed: 56.8, lastActive: "Now", icon: <FaMobileAlt /> },
//   { name: "iPad Pro", ip: "192.168.1.103", status: "Offline", dataUsed: 32.5, lastActive: "2 hours ago", icon: <FaTabletAlt /> },
//   { name: "Smart TV", ip: "192.168.1.104", status: "Online", dataUsed: 82.5, lastActive: "Now", icon: <FaTv /> },
// ];
// src/types/device.ts
export interface Device {
  id: number;
  device_name: string;
  device_type: string;
  platform: string;
  ip_address: string;
  is_current: boolean;
  last_active_at: string;
  created_at: string;
  updated_at: string;
}

export interface DeviceResponse {
  status: boolean;
  devices: Device[];
}


export default function DeviceTable() {
  const { data: session } = useSession();


  // const {devices,loading,error}=useDevices(token);

const { devices: fetchedDevices } = useDevices();
const [devices, setDevices] = useState<Device[]>([]); // <- local state
useEffect(() => {
  if (fetchedDevices) {
    setDevices(fetchedDevices);
  }

  console.log(fetchedDevices);
}, [fetchedDevices]);

  const handleRemoveDevice = (deviceId: string) => {
    console.log("Removing device with ID:", deviceId);

    axios.delete(`${REST_API_BASE_URL}/devices/${deviceId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.user.access_token}`,
      },
    }).then((response) => {
      console.log("Device removed successfully:", response.data);
      setDevices((prevData) => prevData.filter(device => String(device.id) !== deviceId));
    }).catch((error) => {
      console.error("Error removing device:", error);
    });
  }
  return (
    <div className="w-full">

      <div className="flex p-2 justify-between items-center ">
        <h2 className="text-xl font-semibold">Connected Devices</h2>
        <button className="text-blue-500 hover:underline text-sm font-medium">+ Add Device</button>
      </div>
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg text-sm">
            <thead className="bg-gray-50">
              <tr className="text-xs font-medium text-gray-500">
                <th className="px-4 py-2 text-left">Device</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Data Used</th>
                <th className="px-4 py-2 text-left">Last Active</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3 flex items-center gap-2">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
                      {/* {device.icon} */}
                    </div>
                    <div>
                      <div>{device.device_name}</div>
                      <div className="text-gray-400 text-xs">{device.ip_address}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {/* <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${device.status === 'Online'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-200 text-gray-500'
                        }`}
                    >
                      {device.status}
                    </span> */}
                    {device.is_current ? <span className="ml-2 text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full">Active</span> : "-"}
                  </td>
                  <td className="px-4 py-3">
                    {/* {device.dataUsed} */}
                    10 GB
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        // style={{ width: `${device.dataUsed}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{device.last_active_at
                  }</td>
                  <td className="px-4 py-3">
                    <span className="text-blue-500 cursor-pointer mr-4">Details</span>
                    
                    <span onClick={() => handleRemoveDevice(String(device.id))} className="text-red-500 cursor-pointer">Disconnect</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>



  );
}
