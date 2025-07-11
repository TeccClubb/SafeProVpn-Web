import Section from "@/components/sections/Section";
import IPAddressCard from "@/components/whatisMyIp/IPAddressCard";
import { Button } from "@heroui/react";
import Link from "next/link";




export default function ShowApiSection() {

    // Example static data; replace with real data fetching as needed
    const ipAddress = "192.100.101.1";
    const location = "New York, United States";
    const isp = "Comcast Cable";

    return <Section heading="What is My IP Address?"
        description="Check your public IP address and location information"
    >
        <IPAddressCard ipAddress={ipAddress} location={location} isp={isp} />

        <div className="mb-4 flex flex-col items-center justify-center space-y-4 bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md  max-w-[800px] w-full mx-auto ">
            <p className="text-gray-600 text-sm text-center">
                Your IP address can reveal your location and identity to websites, hackers, and other third parties.
            </p>

            <Button
                as={Link}
                href="/vpnDownloadHref"
                color="primary"
                variant="shadow"
                className="transition-all duration-300 transform hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-xl animate-bounce-once"
            >
                Protect My IP with SafePro VPN
            </Button>
        </div>




    </Section>

}