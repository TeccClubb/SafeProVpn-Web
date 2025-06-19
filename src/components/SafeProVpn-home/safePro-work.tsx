import React, { FC } from "react";
import Image from "next/image";
import Section from "../sections/Section";

const steps = [
  {
    number: 1,
    title: "Download & Install",
    description: "Install SafePro VPN on your preferred device in seconds.",
  },
  {
    number: 2,
    title: "Connect",
    description:
      "Choose a server location and tap Connect. You’re secured instantly.",
  },
  {
    number: 3,
    title: "Enjoy the Internet",
    description:
      "Browse, stream, and download safely and anonymously worldwide.",
  },
];

const SafeProWork: FC = () => (
  <Section
    classNames={{ section: "bg-white" }}
    heading={
      <>
        How Does <span className="text-primary">SafePro VPN</span> Work?
      </>
    }
  >
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 items-center">
      {/* Left Section - Text */}
      <div className="w-full space-y-8">
        <div className="w-full space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="w-full flex items-start space-x-4"
            >
              <div className="bg-cyan-100 text-cyan-600 rounded-md w-10 h-10 flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <div className="text-start">
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-700 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className=" w-full flex items-center justify-center">
        <Image
          src="/safe-work.png"
          alt="VPN Illustration"
          width={300}
          height={250}
        />
      </div>
    </div>
  </Section>
);

export default SafeProWork;
