import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { osName, browserName } from "react-device-detect";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIPAddress = async () => {
  const res = await axios
    .get<{ ip: string }>("https://api.ipify.org?format=json", {
      headers: { Accept: "application/json" },
    })
    .then((res) => res.data);
  return res.ip;
};

export const deviceInfo = {
  device_name: browserName,
  device_type: "web",
  platform: osName,
};
