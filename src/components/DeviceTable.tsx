"use client";
import { useDevices } from "@/hooks/useDevices";
import { useSession } from "next-auth/react";
import { FaLaptop, FaMobileAlt, FaTabletAlt, FaTv } from "react-icons/fa";
const devices = [
  { name: "MacBook Pro", ip: "192.168.1.101", status: "Online", dataUsed: 84.2, lastActive: "Now", icon: <FaLaptop /> },
  { name: "iPhone 13", ip: "192.168.1.102", status: "Online", dataUsed: 56.8, lastActive: "Now", icon: <FaMobileAlt /> },
  { name: "iPad Pro", ip: "192.168.1.103", status: "Offline", dataUsed: 32.5, lastActive: "2 hours ago", icon: <FaTabletAlt /> },
  { name: "Smart TV", ip: "192.168.1.104", status: "Online", dataUsed: 82.5, lastActive: "Now", icon: <FaTv /> },
];

export default function DeviceTable() {
  const{data:session}=useSession();
      const token = (session?.user as any)?.access_token;

//  const { devices, loading, error } = useDevices(token);
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
                      {device.icon}
                    </div>
                    <div>
                      <div>{device.name}</div>
                      <div className="text-gray-400 text-xs">{device.ip}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        device.status === 'Online'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {device.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {device.dataUsed} GB
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${device.dataUsed}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{device.lastActive}</td>
                  <td className="px-4 py-3">
                    <span className="text-blue-500 cursor-pointer mr-4">Details</span>
                    <span className="text-red-500 cursor-pointer">Disconnect</span>
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
