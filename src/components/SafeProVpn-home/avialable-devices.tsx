import React from "react";
import Image from "next/image";
import Section from "../sections/Section";
import { SectionHeading } from "../sections/Section";
import { SectionDescription } from "../sections/Section";
import WindowIcon from "@/icons/WindowIcon";
import MacOSIcon from "@/icons/MacOSIcon";
import AndroidIcon from "@/icons/AndroidIcon";
import IOSIcon from "@/icons/IOSIcon";
import Button from "../Button/button";





const AvailableDevices = () => {
  return (
    <Section classNames={{ section: "bg-[#f6fbfe]" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Section */}
        <div className="space-y-4">
          <SectionHeading className="text-2xl md:text-3xl lg:text-4xl font-semibold text-left">
            Available On All Your Devices
          </SectionHeading>
          <SectionDescription className="p-0 lg:w-full text-sm md:text-base text-left">
            SafePro VPN works seamlessly across all major platforms. Protect your digital life everywhere with just one subscription.
          </SectionDescription>
          <div className="grid text-black grid-cols-2 gap-4 pt-2">
            {[
              { name: "Windows", Icon: WindowIcon },
              { name: "MacOS", Icon: MacOSIcon },
              { name: "Android", Icon: AndroidIcon },
              { name: "iOS", Icon: IOSIcon },
            ].map(({ name, Icon }) => (
              <Button key={name} className="bg-white duration-300 text-gray-800 hover:bg-cyan-500 hover:text-white rounded-lg flex items-center justify-start gap-2 w-full">
                <Icon />
                {name}
              </Button>
            ))}


          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <Image src="/available-devices.png" alt="Devices Image" width={400} height={250} />
        </div>
      </div>
    </Section>
  );
};

export default AvailableDevices;
