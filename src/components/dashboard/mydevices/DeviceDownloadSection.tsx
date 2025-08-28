import {
  DOWNLOAD_FOR_ANDROID_PAGE_PATH,
  DOWNLOAD_FOR_MACOS_PAGE_PATH,
  DOWNLOAD_FOR_WINDOWS_PAGE_PATH,
  DOWNLOAD_FOR_IOS_PAGE_PATH,
} from "@/lib/pathnames";
import { Button } from "@heroui/button";
import Link from "next/link";
import {
  FaWindows,
  FaApple,
  FaAndroid,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";

const devices = [
  {
    href: DOWNLOAD_FOR_WINDOWS_PAGE_PATH,
    title: "Windows",
    subtitle: "Windows 8, 10, 11 and Server",
    icon: <FaWindows size={24} />,
    version: "Version 3.4.2 (64-bit)",
  },
  {
    href: DOWNLOAD_FOR_MACOS_PAGE_PATH,
    title: "macOS",
    subtitle: "macOS 10.15 and newer",
    icon: <FaApple size={24} />,
    version: "Version 3.4.0 (Intel/Apple Silicon)",
  },
  {
    href: DOWNLOAD_FOR_ANDROID_PAGE_PATH,
    title: "Android",
    subtitle: "Android 6.0 and newer",
    icon: <FaAndroid size={24} />,
    version: (
      <>
        <FaGooglePlay size={14} /> Google Play
      </>
    ),
  },
  {
    href: DOWNLOAD_FOR_IOS_PAGE_PATH,
    title: "iOS",
    subtitle: "iOS 13.0 and newer",
    icon: <FaAppStoreIos size={24} />,
    version: (
      <>
        <FaAppStoreIos size={14} /> App Store
      </>
    ),
  },
];

export default function DeviceDownloadSection() {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
        Available on All Your Devices
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {devices.map(({ href, title, subtitle, icon, version }) => (
          <div
            key={href}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-sky-100 rounded-full text-sky-600">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{subtitle}</p>
            <Button as={Link} href={href} color="primary">
              Download Now
            </Button>
            <p className="flex items-center gap-1 text-xs text-default-500">
              {version}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
