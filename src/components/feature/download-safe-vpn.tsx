import React from "react";
import Image from "next/image";
import Section from "../sections/Section";
import { SectionHeading } from "../sections/Section";
import { SectionDescription } from "../sections/Section";
import Button from "../Button/button";
import ISOIcon from "@/icons/ISOIcon";
import AndroidIcon from "@/icons/AndroidIcon";
import WindowIcon from "@/icons/WindowIcon";
import MacosIcon from "@/icons/MacosIcon";

const DownloadSafeVpn = () => {
    return (
        <Section classNames={{ section: "bg-cyan-500" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left Section */}
                <div className="space-y-4">
                    <SectionHeading className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-left">
                        Download SafePro VPN Now
                    </SectionHeading>
                    <SectionDescription className="p-0 text-white lg:w-full text-sm md:text-base text-left">
                        Stay secure and private, wherever you go. Get SafePro VPN for your device and join millions of satisfied users.
                    </SectionDescription>
                    <div className="grid text-black grid-cols-2 gap-4 pt-2">
                        {[
                            { name: "Windows", Icon: WindowIcon },
                            { name: "MacOS", Icon: MacosIcon },
                            { name: "Android", Icon: AndroidIcon },
                            { name: "iOS", Icon: ISOIcon },
                        ].map(({ name, Icon }) => (
                            <Button key={name} className="bg-white duration-300 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-lg flex items-center justify-start gap-2 w-full">
                                 <Icon />
                                {name}
                            </Button>
                        ))}

                       
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="flex justify-center">
                    <Image src="/download-vpnlogo.png" alt="Devices Image" width={400} height={250} />
                </div>
            </div>
        </Section>
    );
};

export default DownloadSafeVpn;
