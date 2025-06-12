
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Button from "../Button/button";

export default function VPNPromo() {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-white to-blue-50 px-6 lg:px-20 py-12">
            {/* Left Content */}
            <div className="max-w-xl space-y-6 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
                    Secure Your Online Privacy with <br />
                    <span className="text-cyan-500">SafePro VPN</span>
                </h1>
                <p className="text-gray-800 text-sm">
                    Browse anonymously, secure your connections, and access geo-restricted
                    content with our lightning-fast VPN service. Your digital safety is our
                    priority.
                </p>
                <div className="flex flex-col  sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button className="text-lg text-white font-semibold" variant="solid">
                        Start Free Trial
                    </Button>

                    <Button className="text-lg x font-semibold" variant="outline" >Learn More</Button>
                </div>
                <div className="flex items-center gap-3 pt-4 justify-center lg:justify-start">
                    <div className="flex -space-x-2">
                        <Image src="/homeImg/firstP.png" alt="User 1" width={32} height={32} className="rounded-full border-2 border-white" />
                        <Image src="/homeImg/secondP.png" alt="User 2" width={32} height={32} className="rounded-full border-2 border-white" />
                        <Image src="/homeImg/thirdP.png" alt="User 3" width={32} height={32} className="rounded-full border-2 border-white" />
                    </div>
                    <div className="flex flex-col items-start text-sm text-gray-700">
                        <div className="flex items-center mb-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="text-yellow-400 w-4 h-4 mr-1" fill="currentColor" />
                            ))}
                            <span className="ml-2 font-semibold text-gray-800">4.8/5</span>
                        </div>
                        <span className="text-gray-600 ml-[2px]">Trusted by 2M+ users worldwide</span>
                    </div>

                </div>
            </div>

            {/* Right Image */}
            <div className="mb-10 lg:mb-0">
                <Image
                    src="/homeImg/laptop.png"
                    alt="VPN Dashboard"
                    width={500}
                    height={350}
                    className="drop-shadow-xl"
                />
            </div>
        </div>
    );
}
