import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { REST_API_BASE_URL } from "@/lib/constants";
// import { Device, DeviceResponse } from "@/types/device";
import { Device } from "@/components/DeviceTable";
import { useSession } from "next-auth/react";
// interface Device {
//   id: number;
//   device_name: string;
//   last_active_at: string | null;
// }

export const useDevices = () => {
  const { data: session, status: authStatus } = useSession();
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevices = async () => {
      if(authStatus !== "authenticated") return
      try {
        const res = await axios.get(`${REST_API_BASE_URL}/devices`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.user.access_token}`,
          },
        });
        console.log(res.data)

        setDevices(res.data.devices || []);
      } catch (error) {
        setError(error instanceof AxiosError ? error.message : "Failed to fetch devices");
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();    
  }, [authStatus, session]);

  return { devices, loading, error };
};
