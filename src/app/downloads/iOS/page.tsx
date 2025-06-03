"use client";

import React, { FC } from "react";
import Section, {
  SectionDescription,
  SectionHeading,
} from "@/components/sections/Section";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
} from "@heroui/react";
import DownloadIcon from "@/icons/DownloadIcon";
import Image from "next/image";
import ShieldIcon from "@/icons/ShieldIcon";
import FlashIcon from "@/icons/FlashIcon";
import LocationDotIcon from "@/icons/LocationDotIcon";
import StopIcon from "@/icons/StopIcon";
import WiFiIcon from "@/icons/WiFiIcon";
import BatteryFullIcon from "@/icons/BatteryFullIcon";
import AddUserIcon from "@/icons/AddUserIcon";
import WindowIcon from "@/icons/WindowIcon";
import MacOSIcon from "@/icons/MacOSIcon";
import AndroidIcon from "@/icons/AndroidIcon";
import IOSIcon from "@/icons/IOSIcon";
import Link from "next/link";
import AvailableDevicesSection from "@/components/sections/AvailableDevicesSection";

const DownloadForIOS: FC = () => (
  <>
    <Section
      className="lg:flex-row flex-col-reverse gap-y-4"
      classNames={{ section: "bg-gradient-to-r from-cyan-500/10 to-slate-50" }}
    >
      <div className="w-full lg:w-2/3 flex flex-col md:items-start gap-6">
        <SectionHeading className="md:text-start mb-0">
          Download SafePro VPN for iOS
        </SectionHeading>
        <SectionDescription className="lg:w-3/4 md:text-start p-0 mb-0">
          Secure your iPhone and iPad with military-grade encryption. Browse
          privately, access geo-restricted content, and protect your data on
          public Wi-Fi.
        </SectionDescription>
        <Button
          color="primary"
          variant="shadow"
          size="lg"
          startContent={<DownloadIcon />}
          className="self-center md:self-start"
        >
          Download Now
        </Button>
      </div>
      <div className="w-full lg:w-1/3 flex items-start justify-center">
        <Image
          src="/mockup.png"
          alt="mockup"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/mockup.png"
          className="w-full max-w-72"
        />
      </div>
    </Section>

    <Section
      heading={
        <>
          Why Choose <span className="text-primary">SafePro VPN</span> for iOS?
        </>
      }
    >
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Military-Grade Encryption",
            description:
              "Your data is protected with AES-256 encryption, the same standard used by security experts worldwide.",
            Icon: ShieldIcon,
          },
          {
            title: "Lightning-Fast Speeds",
            description:
              "Optimized servers ensure you get the fastest possible connection speeds while maintaining security.",
            Icon: FlashIcon,
          },
          {
            title: "Global Server Network",
            description:
              "Access content from anywhere with our network of servers across 90+ countries worldwide.",
            Icon: LocationDotIcon,
          },
          {
            title: "No-Logs Policy",
            description:
              "We never track, collect, or share your browsing history or online activities.",
            Icon: StopIcon,
          },
          {
            title: "Wi-Fi Protection",
            description:
              "Stay safe on public Wi-Fi networks with automatic protection against hackers and snoopers.",
            Icon: WiFiIcon,
          },
          {
            title: "Battery Efficient",
            description:
              "Optimized for iOS to provide maximum security with minimal battery consumption",
            Icon: BatteryFullIcon,
          },
        ].map(({ title, description, Icon }, index) => (
          <Card key={index} className="bg-slate-50 rounded-md">
            <CardBody className="gap-4 p-6">
              <span className="text-primary bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full">
                <Icon />
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-default-500 text-base">{description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>

    <Section
      heading={
        <>
          How to Install <span className="text-primary">SafePro VPN</span> on
          iOS
        </>
      }
    >
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            heading: "Download the App",
            description:
              'Visit the App Store and search for "SafePro VPN" or click the download button above.',
            Icon: IOSIcon,
          },
          {
            heading: "Install & Open",
            description:
              'Tap "Get" to install the app, then open it from your home screen.',
            Icon: DownloadIcon,
          },
          {
            heading: "Create Account or Login",
            description:
              "Sign in with your existing account or create a new one in just a few steps.",
            Icon: AddUserIcon,
          },
          {
            heading: "Connect & Secure",
            description:
              "Tap the connect button and you're instantly protected with SafePro VPN.",
            Icon: ShieldIcon,
          },
        ].map(({ heading, description, Icon }, index) => (
          <Card key={index}>
            <CardBody className="gap-4 p-6">
              <span className="w-12 h-12 text-white bg-primary text-base font-bold rounded-full flex items-center justify-center">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold">{heading}</h3>
              <p className="text-default-500 text-base">{description}</p>
              <div className="text-primary bg-gray-100 h-16 rounded-lg flex items-center p-4">
                <Icon className="w-7 h-7" />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>

    <Section
      heading={
        <>
          <span className="text-primary">SafePro VPN</span> iOS App
        </>
      }
    >
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "/app-img-1.png",
          "/app-img-2.png",
          "/app-img-3.png",
          "/app-img-4.png",
        ].map((src) => (
          <Image
            key={src}
            src={src}
            alt={src}
            width={0}
            height={0}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={src}
            className="w-full h-auto"
          />
        ))}
      </div>
    </Section>

    <Section
      heading="Frequently Asked Questions"
      classNames={{ section: "bg-cyan-50" }}
    >
      <Accordion variant="splitted" className="w-full max-w-xl mb-4">
        {[
          {
            question: "Is SafePro VPN compatible with all iOS devices?",
            answer:
              "SafePro VPN is compatible with iPhone, iPad, and iPod touch running iOS 13.0 or later. The app is optimized for the latest iOS version for the best performance and security.",
          },
          {
            question: "How much data does SafePro VPN use?",
            answer:
              "SafePro VPN uses approximately 10-15% more data than your normal usage due to encryption overhead. We offer data monitoring tools in the app to help you keep track of your usage.",
          },
          {
            question: "Will SafePro VPN drain my battery?",
            answer:
              "SafePro VPN is designed to be battery-efficient. While any VPN will use some additional battery, we've optimized our app to minimize battery consumption while maintaining security.",
          },
          {
            question: "Can I use SafePro VPN on multiple devices?",
            answer:
              "Yes! Your SafePro VPN subscription allows you to connect up to 5 devices simultaneously. You can use it on your iPhone, iPad, and other devices including Android, Windows, and macOS.",
          },
          {
            question: "Is there a free trial available?",
            answer:
              "Yes, we offer a 7-day free trial for new users. You can experience all premium features with no limitations during the trial period.",
          },
        ].map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={`faq-${index}`}
            title={item.question}
            className="text-start text-default-500"
          >
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </Section>

    <AvailableDevicesSection />
  </>
);

export default DownloadForIOS;
