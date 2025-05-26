import React from "react";
import { ShieldCheck, Globe2, Ban } from "lucide-react";

import FeatureCard from "../cardUI/FeatureCard";
import Button from "../Button/button";

export default function SecureEveryClickSection() {
  return (
    <div className="text-center px-6 lg:px-20 py-12 bg-blue-50">
      <h2 className="text-3xl font-bold text-gray-800">Secure Every Click</h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        Use apps, websites, and watch videos without worry—your connection stays protected every day.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
        <FeatureCard
          icon={<ShieldCheck className="w-10 h-10" />}
          title="Military-Grade Encryption"
          description="Secure your data with AES-256 encryption, the same standard used by security experts worldwide."
          className="border-t-4 border-cyan-500 bg-white "
          align="start"
        />

        <FeatureCard
          icon={<Globe2 className="w-10 h-10" />}
          title="Global Server Network"
          description="Access 1,000+ servers in 90+ countries for unrestricted browsing and streaming."
          className="border-t-4 border-cyan-500 bg-white "
          align="start"
        />

        <FeatureCard
          icon={<Ban className="w-10 h-10" />}
          title="No-Logs Policy"
          description="We never track, collect, or share your browsing data. Your privacy is our priority."
          className="border-t-4 border-cyan-500 bg-white "
          align="start"
        />
      </div>

      <div className="mt-10">
        <Button variant="outline">See all Features</Button>
      </div>
    </div>
  );
}
