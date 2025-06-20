
import {
  FaWindows,
  FaApple,
  FaAndroid,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";
import DeviceCard from "@/components/cardUI/DeviceCard";

const devices = [
  {
    icon: <FaWindows size={24} />,
    title: "Windows",
    subtitle: "Windows 8, 10, 11 and Server",
    version: "Version 3.4.2 (64-bit)",
    path:"/downloads/Android",

    buttonText: "Download Now",
  },
  {
    icon: <FaApple size={24} />,
    title: "macOS",
    subtitle: "macOS 10.15 and newer",
    path:"/downloads/MacOS",
    version: "Version 3.4.0 (Intel/Apple Silicon)",
    buttonText: "Download Now",
  },
  {
    icon: <FaAndroid size={24} />,
    title: "Android",
    subtitle: "Android 6.0 and newer",
    version: "",
    path:"/downloads/Android",
    buttonText: "Download Now",
    storeIcon: (
      <div className="flex items-center gap-1 text-xs text-gray-600">
        <FaGooglePlay size={14} /> Google Play
      </div>
    ),
  },
  {
    icon: <FaAppStoreIos size={24} />,
    title: "iOS",
    subtitle: "iOS 13.0 and newer",
    version: "",
    buttonText: "Download Now",
    path:"/downloads/iOS",

    storeIcon: (
      <div className="flex items-center gap-1 text-xs text-gray-600">
        <FaAppStoreIos size={14} /> App Store
      </div>
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
        {devices.map((device, i) => (
          <DeviceCard key={i} {...device} />
        ))}
      </div>
    </div>
  );
}
