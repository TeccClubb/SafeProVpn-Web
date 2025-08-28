"use client";

import React, { FC } from "react";
import { useDevices } from "@/hooks/useDevices";
import { Button } from "@heroui/button";
import { Skeleton } from "@heroui/skeleton";

const DeviceTable: FC = () => {
  const { devices, isDevicesLoading, handleRevokeDevice } = useDevices();

  return (
    <div className="w-full">
      <div className="flex p-2 justify-between items-center ">
        <h2 className="text-xl font-semibold">Connected Devices</h2>
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
              {isDevicesLoading &&
                Array.from({ length: 3 }).map((_, idx) => (
                  <tr
                    key={`skeleton-${idx}`}
                    className="border-t border-divider animate-pulse"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Skeleton className="w-7 h-7 rounded-full bg-gray-200" />
                        <div>
                          <Skeleton className="h-3 w-24 bg-gray-200 rounded mb-1" />
                          <Skeleton className="h-2 w-16 bg-gray-100 rounded" />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-4 w-12 bg-gray-200 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-4 w-16 bg-gray-200 rounded mb-1" />
                      <Skeleton className="w-full h-2 bg-gray-200 rounded-full" />
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-4 w-20 bg-gray-200 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-7 w-20 rounded" />
                    </td>
                  </tr>
                ))}

              {!isDevicesLoading && devices.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-6 text-center text-gray-400"
                  >
                    No devices found.
                  </td>
                </tr>
              )}

              {devices.map((device, index) => (
                <tr key={index} className="border-t border-divider">
                  <td className="px-4 py-3 flex items-center gap-2">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
                      {/* {device.icon} */}
                    </div>
                    <div>
                      <div>{device.device_name}</div>
                      <div className="text-gray-400 text-xs">
                        {device.ip_address}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {device.is_current ? (
                      <span className="ml-2 text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-4 py-3">
                    10 GB
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{device.last_active_at}</td>
                  <td className="px-4 py-3">
                    {!device.is_current && (
                      <Button
                        onPress={() => handleRevokeDevice(device.id)}
                        color="danger"
                        variant="flat"
                        size="sm"
                      >
                        Disconnect
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeviceTable;
