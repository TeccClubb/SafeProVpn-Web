import Section from "@/components/sections/Section";
import DownloadIcon from "@/icons/DownloadIcon";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VpnInstallation = () => {
    return <Section heading="SafePro VPN Installation Guide"
        description="Follow our simple step-by-step instructions to install SafePro VPN on all your devices and start browsing securely."
        classNames={{
            section: "bg-gradient-to-r from-cyan-500/10 to-slate-50",
        }}
    >
       <Button
    as={Link}
    href="/vpnDownloadHref"
    color="primary"
    variant="shadow"
    className="transition-all duration-300 transform hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-xl animate-bounce-once"
    startContent={<DownloadIcon className="w-5 h-5" />}
>
    Download Now
</Button>


    </Section>
}

export default VpnInstallation;
