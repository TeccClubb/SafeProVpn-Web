import React from "react";
import Section from "../sections/Section";
import { ShieldCheck, Globe2, Ban } from "lucide-react";
import FeatureCard from "../cardUI/FeatureCard";

// Card data
const keyFeatures = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Military-Grade Encryption",
    description: "Secure your data with AES-256 encryption, the same standard used by security experts worldwide.",
  },
  {
    icon: <Globe2 className="w-10 h-10" />,
    title: "Global Server Network",
    description: "Access 1,000+ servers in 90+ countries for unrestricted browsing and streaming.",
  },
  {
    icon: <Ban className="w-10 h-10" />,
    title: "No-Logs Policy",
    description: "We never track, collect, or share your browsing data. Your privacy is our priority.",
  },
];

const KeyFeature = () => {
  return (
    <Section
      className="bg-white"
      heading="Key Features"
      description="SafePro VPN combines cutting-edge technology with user-friendly design to deliver a seamless, secure browsing experience."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
        {keyFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            className="border-t-4 border-cyan-500 bg-white"
            align="start"
          />
        ))}
      </div>
    </Section>
  );
};

export default KeyFeature;

