import React, { FC } from "react";
import Section from "@/components/sections/Section";
import AndroidIcon from "@/icons/AndroidIcon";
import ChromeIcon from "@/icons/ChromeIcon";
import IOSIcon from "@/icons/IOSIcon";
import MacOSIcon from "@/icons/MacOSIcon";
import WindowIcon from "@/icons/WindowIcon";
import { Button } from "@heroui/react";
import MacInstallSection from "./MacInstallSection";

const ChooseDeviceSection: FC = () => {
  return (
    <Section
      classNames={{
        section: "bg-gray-50",
      }}
    >
      <div className="max-w-6xl mx-auto  grid md:grid-cols-2  rounded-lg shadow-md bg-white">
        {/* Device Selection Section */}
        <div className="bg-white p-5">
          <h2 className="text-xl text-left font-semibold mb-4">
            Choose Your Device
          </h2>
          <p className="text-gray-600 mb-4 text-left">
            SafePro VPN works on all your devices. Select your platform to get
            started.
          </p>
          <div className="grid text-black grid-cols-3 gap-4 pt-2">
            {[
              { name: "Windows", Icon: WindowIcon },
              { name: "MacOS", Icon: MacOSIcon },
              { name: "Android", Icon: AndroidIcon },
              { name: "iOS", Icon: IOSIcon },
              { name: "Chrome", Icon: ChromeIcon },
            ].map(({ name, Icon }) => (
              <Button
                key={name}
                size="lg"
                startContent={<Icon className="w-6 h-6" />}
                className="justify-start text-default-700 bg-default-50 hover:bg-primary/10 border border-default-700 hover:border-primary hover:text-primary"
                //  className="bg-white duration-300  border text-gray-800 hover:bg-cyan-300 hover:text-cyan-700 rounded-lg flex items-center justify-start gap-2 border-gray-300 "
              >
                {name}
              </Button>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="bg-gray-100 p-4 mt-10 text-left   rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-2">Additional Resources</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>🔧 Troubleshooting Guide</li>
              <li>🎥 Video Tutorials</li>
              <li>📞 Contact Support</li>
            </ul>
          </div>
        </div>

        {/* Download & Instructions Section */}
        <div>
          <MacInstallSection></MacInstallSection>
        </div>
      </div>
    </Section>
  );
};

export default ChooseDeviceSection;
