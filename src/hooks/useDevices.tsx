import { useEffect, useState } from "react";
import axios from "axios";
import { REST_API_BASE_URL } from "@/lib/constants";
// import { Device, DeviceResponse } from "@/types/device";
import { Device,DeviceResponse } from "@/components/DeviceTable";
// interface Device {
//   id: number;
//   device_name: string;
//   last_active_at: string | null;
// }

export const useDevices = (token: string) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const res = await axios.get(`${REST_API_BASE_URL}/devices`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data)

        setDevices(res.data.devices || []);
      } catch (err: any) {
        setError(err.message || "Failed to fetch devices");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchDevices();
    }
  }, [token]);

  return { devices, loading, error };
};
