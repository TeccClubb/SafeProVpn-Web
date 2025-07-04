import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { isMobile, isTablet, osName, browserName } from "react-device-detect";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const deviceInfo = {
  device_name: browserName,
  device_type: isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop",
  platform: osName,
};
