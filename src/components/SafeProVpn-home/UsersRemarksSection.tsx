import React, { FC } from "react";
import Section from "../sections/Section";
import { User } from "@heroui/react";

const UsersRemarksSection: FC = () => (
  <Section
  className="bg-white"
    heading="What Our Users Say"
    description="Join thousands of satisfied customers who trust SafePro VPN"
  >
    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          name: "John Smith",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026701d",
          description: "Software Engineer",
          remarks:
            "SafePro VPN has been a game-changer for me. The speeds are incredible, and I can finally access all my favorite streaming content while traveling abroad.",
        },
        {
          name: "Sarah Johnson",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          description: "IT Security Specialist",
          remarks:
            "As a cybersecurity professional, I'm very particular about my VPN provider. SafePro VPN exceeds all my expectations with their no-logs policy and military-grade encryption.",
        },
        {
          name: "David Chen",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026703d",
          description: "Family User",
          remarks:
            "I use SafePro VPN on all my family devices. Setup was incredibly easy, and their customer support is always helpful whenever I have questions.",
        }
      ].map(({ name, avatar, description, remarks }, index) => (
        <div
          key={avatar + index}
          className="w-full bg-[#F5F9FC] flex flex-col items-start gap-2 p-6 rounded-2xl"
        >
          <div className="text-[#FFD700] text-2xl">★★★★★</div>
          <p className="text-default-500 text-justify mb-5">"{remarks}"</p>
          <User
            avatarProps={{
              src: avatar,
            }}
            description={description}
            name={name}
            className="mt-auto"
          />
        </div>
      ))}
    </div>
  </Section>
);

export default UsersRemarksSection;
