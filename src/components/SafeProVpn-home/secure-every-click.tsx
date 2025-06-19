import React from "react";
import { ShieldCheck, Globe2, Ban } from "lucide-react";
import FeatureCard from "../cardUI/FeatureCard";
import Button from "../Button/button";
import Section from "../sections/Section";

// Step 1: Create card data
const featureCards = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Military-Grade Encryption",
    description:
      "Secure your data with AES-256 encryption, the same standard used by security experts worldwide.",
  },
  {
    icon: <Globe2 className="w-10 h-10" />,
    title: "Global Server Network",
    description:
      "Access 1,000+ servers in 90+ countries for unrestricted browsing and streaming.",
  },
  {
    icon: <Ban className="w-10 h-10" />,
    title: "No-Logs Policy",
    description:
      "We never track, collect, or share your browsing data. Your privacy is our priority.",
  },
];

export default function SecureEveryClickSection() {
  return (
    <Section
      heading="Secure Every Click"
      description="Use apps, websites, and watch videos without worry—your connection stays protected every day."
      classNames={{ section: "bg-gray-100" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {featureCards.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            className="border-t-4 border-cyan-500 bg-white"
            align="start"
          />
        ))}
      </div>

      <Button variant="outline" className="mt-10">
        See all Features
      </Button>
    </Section>
  );
}
