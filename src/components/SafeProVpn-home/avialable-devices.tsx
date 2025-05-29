import React from 'react';
import Image from 'next/image';
import Section from '../sections/Section';
import { SectionHeading } from '../sections/Section';
import { SectionDescription } from '../sections/Section';

const platforms = [
  {
    name: 'Windows',
    icon: (
      <button className="w-5 h-5">
        <img src="/btnImg/windows.svg" alt="Windows" className="w-full h-full" />
      </button>
    ),
    bg: 'bg-cyan-500',
    text: 'text-white'
  },
  {
    name: 'macOS',
    icon: (
      <button className="w-5 h-5">
        <img src="/btnImg/macos.svg" alt="macOS" className="w-full h-full" />
      </button>
    ),
    bg: 'bg-white',
    text: 'text-gray-800'
  },
  {
    name: 'Android',
    icon: (
      <button className="w-5 h-5">
        <img src="/btnImg/android.svg" alt="Android" className="w-full h-full" />
      </button>
    ),
    bg: 'bg-white',
    text: 'text-gray-800'
  },
  {
    name: 'iOS',
    icon: (
      <button className="w-5 h-5">
        <img src="/btnImg/ios.svg" alt="iOS" className="w-full h-full" />
      </button>
    ),
    bg: 'bg-white',
    text: 'text-gray-800'
  }
];


const AvailableDevices = () => {
  return (
    <Section classNames={{ section: "bg-[#f6fbfe]" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Section */}
        <div className="space-y-4 ">
          <SectionHeading className="text-2xl md:text-3xl lg:text-4xl font-semibold text-left">Available On All Your Devices</SectionHeading>
          <SectionDescription className="p-0 lg:w-full text-sm md:text-base text-left">SafePro VPN works seamlessly across all major platforms. Protect your digital life everywhere with just one subscription.</SectionDescription>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className={`flex items-center px-4 py-3 rounded-lg shadow-sm transition-all duration-300 cursor-pointer ${platform.bg} ${platform.text} font-medium text-sm space-x-2 hover:bg-cyan-500 hover:text-white`}
              >
                <span className="text-lg">{platform.icon}</span>
                <span>{platform.name}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <Image
            src="/available-devices.png"
            alt="Devices Image"
            width={400}
            height={250}
          />
        </div>
      </div>
    </Section>
  );
};

export default AvailableDevices;
