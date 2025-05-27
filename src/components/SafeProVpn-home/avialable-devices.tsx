import React from 'react';
import Image from 'next/image';
import Section from '../sections/Section';
import { SectionHeading } from '../sections/Section';
import { SectionDescription } from '../sections/Section';

const platforms = [
  {
    name: 'Windows',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 93.7v157.5h204.3V76.2L0 93.7zm0 325.6l204.3 17.5V260.8H0v158.5zM227.7 435.4L448 448V260.8H227.7v174.6zM227.7 76.2v174.9H448V64L227.7 76.2z" />
      </svg>
    ),
    bg: 'bg-cyan-500',
    text: 'text-white'
  },
  {
    name: 'macOS',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M318.7 268c-.2-36.1 16-63.4 50.4-83.4-18.9-27.3-47.5-42.3-84.8-45-35.6-2.6-74 21-87.4 21-13.7 0-48.1-20.3-74.5-20.3C66.4 140.5 0 197.1 0 301.7c0 34.4 6.3 69.2 18.7 104.3 16.7 48 77 165.7 139.4 164.1 27.4-.6 47.3-19.1 83.8-19.1 36.1 0 54.8 19.1 84.7 19.1 62.9-1.1 117.8-104.1 134.2-152.1-86.2-41-82.6-120.9-82.4-149z" />
      </svg>
    ),
    bg: 'bg-white',
    text: 'text-gray-800'
  },
  {
    name: 'Android',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M89.6 277.3c0 11.8-9.5 21.3-21.3 21.3S47 289 47 277.3s9.5-21.3 21.3-21.3 21.3 9.6 21.3 21.3zm333.3-21.3c-11.8 0-21.3 9.5-21.3 21.3s9.5 21.3 21.3 21.3 21.3-9.5 21.3-21.3-9.5-21.3-21.3-21.3zM384 336c0-12.1 9.9-22 22-22h2c12.1 0 22 9.9 22 22v112c0 12.1-9.9 22-22 22h-2c-12.1 0-22-9.9-22-22V336zm-94 0c0-12.1 9.9-22 22-22h2c12.1 0 22 9.9 22 22v112c0 12.1-9.9 22-22 22h-2c-12.1 0-22-9.9-22-22V336zM127.1 336c0-12.1 9.9-22 22-22h2c12.1 0 22 9.9 22 22v112c0 12.1-9.9 22-22 22h-2c-12.1 0-22-9.9-22-22V336zM255.6 0C112.2 0 0 112.3 0 255.6s112.3 255.6 255.6 255.6 255.6-112.3 255.6-255.6S399 0 255.6 0z" />
      </svg>
    ),
    bg: 'bg-white',
    text: 'text-gray-800'
  },
  {
    name: 'iOS',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M320 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm-4 448H68c-11 0-20-9-20-20V84c0-11 9-20 20-20h248c11 0 20 9 20 20v344c0 11-9 20-20 20z" />
      </svg>
    ),
    bg: 'bg-white',
    text: 'text-gray-800'
  }
];

const AvailableDevices = () => {
  return (
    <Section className="bg-[#f6fbfe]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Section */}
        <div className="space-y-4 ">
          <SectionHeading className="text-2xl md:text-3xl lg:text-4xl font-semibold text-left">Available On All Your Devices</SectionHeading>
          <SectionDescription className="p-0 lg:w-full text-sm md:text-base text-left">SafePro VPN works seamlessly across all major platforms. Protect your digital life everywhere with just one subscription.</SectionDescription>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className={`flex items-center px-4 py-3 rounded-lg shadow-sm ${platform.bg} ${platform.text} font-medium text-sm space-x-2`}
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
