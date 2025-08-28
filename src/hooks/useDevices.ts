import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import {
  GET_CONNECTED_DEVICES_ROUTE,
  REVOKE_CONNECTED_DEVICE_ROUTE,
} from "@/lib/constants";
import { useSession } from "next-auth/react";
import { Device } from "@/types/device";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  DashboardState,
  removeDevice,
  setDevices,
} from "@/store/dashboard.slice";
import { addToast } from "@heroui/react";

export const useDevices = () => {
  const dispatch = useDispatch();
  const { devices, isDevicesLoadedOnce } = useSelector<
    RootState,
    DashboardState
  >((state) => state.dashboard);

  const { data: session, status: authStatus } = useSession();
  const [isDevicesLoading, setLoading] = useState<boolean>(true);

  const handleRevokeDevice = async (deviceId: number) => {
    try {
      const res = await axios
        .delete<{ status: boolean; message: string }>(
          REVOKE_CONNECTED_DEVICE_ROUTE(deviceId),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.user.access_token}`,
            },
          }
        )
        .then((res) => res.data);

      if (res.status) {
        addToast({ color: "success", description: res.message });
        dispatch(removeDevice(deviceId));
      } else {
        addToast({ color: "danger", description: res.message });
      }
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : error instanceof Error
          ? error.message
          : "Failed to revoke a device";

      addToast({ color: "danger", description: message });
    }
  };

  useEffect(() => {
    const fetchDevices = async () => {
      if (authStatus !== "authenticated") return;
      try {
        if (isDevicesLoadedOnce) return;
        const res = await axios
          .get<{ status: boolean; devices: Device[] }>(
            GET_CONNECTED_DEVICES_ROUTE,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session.user.access_token}`,
              },
            }
          )
          .then((res) => res.data);

        if (res.status) {
          dispatch(setDevices(res.devices));
        }
      } catch (error) {
        const message =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : error instanceof Error
            ? error.message
            : "Failed to fetch connected devices";
        addToast({ color: "danger", description: message });
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return { devices, isDevicesLoading, handleRevokeDevice };
};
