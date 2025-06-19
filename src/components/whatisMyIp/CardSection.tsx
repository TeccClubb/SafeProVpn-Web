import React, { FC } from "react";
import Section from "../sections/Section";
import { Eye, Globe, ShieldAlert, Network } from "lucide-react"; // Or use your own icons

const cardData = [
  {
    icon: <Eye />,
    title: "Your IP Exposes You",
    description:
      "Your IP address can reveal your approximate location, internet service provider, and potentially your identity.",
  },
  {
    icon: <Globe />,
    title: "Content Restrictions",
    description:
      "Many websites and services restrict content based on your IP address and geographic location.",
  },
  {
    icon: <Network />,
    title: "Privacy Concerns",
    description:
      "Your browsing habits can be tracked and monitored through your IP address by advertisers and other entities.",
  },
  {
    icon: <ShieldAlert />,
    title: "Security Risks",
    description:
      "Hackers can use your IP address as a starting point for attacks on your network and devices.",
  },
];

const CardSection: FC = () => {
  return (
    <Section heading="Why Knowing Your IP Matters">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex just items-start   w-full max-w-sm"
          >
            <div className="text-cyan-500 text-2xl">{card.icon}</div>
            <div>
              <h3 className="font-semibold text-left ps-4 text-lg mb-1">
                {card.title}
              </h3>
              <p className="text-gray-600 text-left ps-4 text-sm">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CardSection;
