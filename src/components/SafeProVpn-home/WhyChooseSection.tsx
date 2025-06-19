import React from "react";
import {
  Lock,
  Zap,
  Globe,
  Smartphone,
  MousePointerClick,
  Headset,
} from "lucide-react";
import FeatureCard from "@/components/cardUI/FeatureCard";
import Section from "../sections/Section";

export default function WhyChooseSection() {
  return (
    <Section
      heading={
        <>
          Why Choose <span className="text-sky-500">SafePro VPN?</span>
        </>
      }
      classNames={{ section: "bg-white" }}
      description="Experience true internet freedom — with uncompromising security, lightning speed, and powerful privacy features. SafePro VPN gives you peace of mind, everywhere."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          className="bg-sky-100"
          icon={<Lock className="w-10 h-10 " />}
          title="Top-Grade Security"
          description="AES-256 encryption, kill-switch, and no-logs policy keep your data totally safe."
        />
        <FeatureCard
          icon={<Zap className="w-10 h-10" />}
          title="Ultra Fast Speeds"
          description="Stream, game & browse with zero lag. Unlimited bandwidth on all servers."
        />
        <FeatureCard
          className="bg-sky-100"
          icon={<Globe className="w-10 h-10" />}
          title="Global Access"
          description="Connect to 100+ locations. Bypass geo-blocks and access any content, anywhere."
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10 text-sm text-gray-700">
        <div className="bg-white shadow-sm px-4 py-2 rounded-lg flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-sky-500" /> Works on all devices
        </div>
        <div className="bg-white shadow-sm px-4 py-2 rounded-lg flex items-center gap-2">
          <MousePointerClick className="w-4 h-4 text-sky-500" /> 1-click Easy
          Connect
        </div>
        <div className="bg-white shadow-sm px-4 py-2 rounded-lg flex items-center gap-2">
          <Headset className="w-4 h-4 text-sky-500" /> 24/7 Support
        </div>
      </div>
    </Section>
  );
}
