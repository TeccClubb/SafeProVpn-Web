"use client";

import React from "react";
import {
  Lock,
  Zap,
  ShieldOff,
  Globe,
  MonitorSmartphone,
  MousePointerClick,
  Headphones,
} from "lucide-react";
import Section from "../sections/Section";
import FeatureCard from "../cardUI/FeatureCard";

const ChooseSafeProVpn = () => {
  const topFeatures = [
    {
      icon: <Lock size={32} />,
      title: "Military-Grade Encryption",
      description:
        "Your data is protected with top-tier encryption — no one can snoop on your activity, ever.",
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast Speeds",
      description:
        "Enjoy streaming, gaming, and browsing with zero lag, thanks to our optimized global servers.",
    },
    {
      icon: <ShieldOff size={32} />,
      title: "Absolute Privacy",
      description:
        "No logs, no trackers. We never store your data — your privacy is our priority.",
    },
  ];

  const bottomFeatures = [
    {
      icon: <Globe size={32} />,
      title: "Unblock Content",
      description:
        "Access your favorite sites and apps from anywhere in the world.",
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "Multi-Device Support",
      description: "Connect on Windows, macOS, iOS, Android, and more.",
    },
    {
      icon: <MousePointerClick size={32} />,
      title: "1-Click Connect",
      description: "Get protected in seconds with a single tap or click.",
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Support",
      description:
        "Live chat and email support whenever you need help.",
    },
  ];

  return (
    <Section classNames={{ section: "bg-slate-50" }}
      heading={
        <>
          Why Choose <span className="text-primary">SafePro VPN?</span>
        </>
      }
      description="Unlock total freedom, top-tier security, and blazing speeds. SafePro VPN is designed for privacy-first users who expect the best."
    >
      {/* Top 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {topFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            align="center"
          />
        ))}
      </div>

      {/* Bottom 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {bottomFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            align="center"
          />
        ))}
      </div>
    </Section>
  );
};

export default ChooseSafeProVpn;
