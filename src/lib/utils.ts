import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { osName, browserName } from "react-device-detect";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIPAddress = async () => {
  const res = await fetch("https://api.ipify.org?format=json", {
    headers: { Accept: "application/json" },
  });
  const data = await res.json();
  return await data.ip;
};

export const deviceInfo = {
  device_name: browserName,
  device_type: "web",
  platform: osName,
};
