import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { isMobile,
isTablet,
osName,
browserName,} from "react-device-detect"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const deviceInfo = 
{
  device_name: browserName,
  device_type: isMobile ? "Mobile" : isTablet ? "Tablet": "Desktop",
  platform: osName,
}

export const getDeviceInfo1 = () => {
  const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
  const isTablet = /iPad/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  let deviceType = "Desktop";

  if (isMobile) {
    deviceType = "Mobile";
  } else if (isTablet) {
    deviceType = "Tablet";
  }

  const platform = /Android/i.test(userAgent)
    ? "Android"
    : /iPhone|iPad|iPod/i.test(userAgent)
    ? "iOS"
    : "Unknown";

  return {
    deviceType,  // "Mobile", "Tablet", "Desktop"
    platform,    // "Android", "iOS", "Windows", "macOS"
    userAgent,
  };
};
