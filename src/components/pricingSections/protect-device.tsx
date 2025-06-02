import React from "react";
import Section from "../sections/Section";
import Button from "../Button/button";

// Icons
import { FaWindows, FaApple, FaAndroid, FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import FeatureCard from "../cardUI/FeatureCard";

const devices = [
  {
    icon: <FaWindows size={28} />,
    title: "Windows",
    description:
      "Protect your Windows PC with our easy-to-use app. Compatible with Windows 8, 10, and 11.",
  },
  {
    icon: <FaApple size={28} />,
    title: "macOS",
    description:
      "Secure your Mac with our native app. Secure your Mac with our native app, newer versions.",
  },
  {
    icon: <FaAndroid size={28} />,
    title: "Android",
    description:
      "Protect your Android phone or tablet. Works on Android 6.0 and newer versions.",
  },
  {
    icon: <MdPhoneIphone size={28} />,
    title: "iOS",
    description:
      "Secure your iPhone and iPad. Compatible with iOS 13.0 and newer versions.",
  },
  {
    icon: <FaLinux size={28} />,
    title: "Linux",
    description:
      "Protect your Linux system. Supports Ubuntu, Debian, Fedora, and other distributions.",
  },
  
];

const ProtectDevice = () => {
  return (
    <Section
      classNames={{ section: "bg-white" }}
      heading="Protect All Your Devices"
      description="One subscription covers all your devices with our easy-to-use apps"
    >
      <div className="mt-10 space-y-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {devices.slice(0, 3).map((device, i) => (
      <div key={i} className="flex justify-center w-full">
        <FeatureCard
          icon={
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              {device.icon}
            </div>
          }
          title={device.title}
          description={device.description}
          className="w-full max-w-sm bg-gray-50"
        >
          <Button size="md" variant="outline" className="mt-4">
            Download
          </Button>
        </FeatureCard>
      </div>
    ))}
  </div>

  {/* Centered row for the remaining cards */}
  <div className="flex flex-wrap justify-center gap-6">
    {devices.slice(3).map((device, i) => (
      <FeatureCard
        key={i + 3}
        icon={
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            {device.icon}
          </div>
        }
        title={device.title}
        description={device.description}
        className="w-full max-w-sm bg-slate-50"
      >
        <Button size="md" variant="outline" className="mt-4">
          Download
        </Button>
      </FeatureCard>
    ))}
  </div>
</div>

    </Section>
  );
};

export default ProtectDevice;
