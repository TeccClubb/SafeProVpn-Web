
import React from "react";
import { Lock, Zap, Globe, Smartphone, MousePointerClick, Headset } from "lucide-react";
import FeatureCard from "@/components/cardUI/FeatureCard";

export default function WhyChooseSection() {
  return (
    <div className="text-center px-6 lg:px-20 py-12 bg-gradient-to-r from-white to-blue-50">
      <h2 className="text-3xl font-bold text-gray-800">
        Why Choose <span className="text-sky-500">SafePro VPN?</span>
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        Experience true internet freedom — with uncompromising security, lightning speed,
        and powerful privacy features. SafePro VPN gives you peace of mind, everywhere.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <FeatureCard
          icon={<Lock className="w-10 h-10" />}
          title="Top-Grade Security"
          description="AES-256 encryption, kill-switch, and no-logs policy keep your data totally safe."
        />
        <FeatureCard
          icon={<Zap className="w-10 h-10" />}
          title="Ultra Fast Speeds"
          description="Stream, game & browse with zero lag. Unlimited bandwidth on all servers."
        />
        <FeatureCard
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
          <MousePointerClick className="w-4 h-4 text-sky-500" /> 1-click Easy Connect
        </div>
        <div className="bg-white shadow-sm px-4 py-2 rounded-lg flex items-center gap-2">
          <Headset className="w-4 h-4 text-sky-500" /> 24/7 Support
        </div>
      </div>
    </div>
  );
}
