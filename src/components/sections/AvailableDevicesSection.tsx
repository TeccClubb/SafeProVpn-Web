import React, { FC } from "react";
import Section from "./Section";
import { Card, CardBody } from "@heroui/react";
import WindowIcon from "@/icons/WindowIcon";
import MacOSIcon from "@/icons/MacOSIcon";
import AndroidIcon from "@/icons/AndroidIcon";
import IOSIcon from "@/icons/IOSIcon";
import Link from "next/link";

const AvailableDevicesSection: FC = () => (
  <Section heading="Available on All Your Devices">
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        { osName: "Windows", href: "/downloads/Windows", Icon: WindowIcon },
        { osName: "macOS", href: "/downloads/MacOS", Icon: MacOSIcon },
        { osName: "Android", href: "/downloads/Android", Icon: AndroidIcon },
        { osName: "iOS", href: "/downloads/iOS", Icon: IOSIcon },
      ].map(({ osName, href, Icon }, index) => (
        <Card
          key={index}
          as={Link}
          href={href}
          className="h-32 border-2 border-transparent hover:bg-cyan-500/10 hover:border-cyan-500"
        >
          <CardBody className="items-center justify-center gap-4">
            <Icon className="w-9 h-9 text-primary" />
            <span className="text-base font-semibold">{osName}</span>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default AvailableDevicesSection;
