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
  CardHeader,
  Link as HeroLink,
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
import ExclamationMarkIcon from "@/icons/ExclamationMarkIcon";
import FileEditIcon from "@/icons/FileEditIcon";
import BookIcon from "@/icons/BookIcon";
import NotesIcon from "@/icons/NotesIcon";
import LockIcon from "@/icons/LockIcon";
import WireGardeIcon from "@/icons/WireGardeIcon";
import TickIcon from "@/icons/TickIcon";
import AvailableDevicesSection from "@/components/sections/AvailableDevicesSection";
import KeyIcon from "@/icons/KeyIcon";

const DownloadForMACOS: FC = () => (
  <>
    <Section
      className="lg:flex-row flex-col-reverse gap-y-4"
      classNames={{ section: "bg-gradient-to-r from-cyan-500/10 to-slate-50" }}
    >
      <div className="w-full lg:w-2/3 flex flex-col md:items-start gap-6">
        <SectionHeading className="md:text-start mb-0">
          Download SafePro VPN for macOS
        </SectionHeading>
        <SectionDescription className="lg:w-3/4 md:text-start p-0 mb-0">
          Secure your internet connection and protect your privacy with our
          easy-to-use macOS application. Fast, reliable, and built with your
          security in mind.
        </SectionDescription>
        <div className="flex items-center gap-4">
          <Button
            color="primary"
            variant="shadow"
            size="lg"
            startContent={<DownloadIcon />}
            className="self-center md:self-start"
          >
            Download for macOS
          </Button>

          <Button
            color="primary"
            variant="bordered"
            size="lg"
            startContent={<KeyIcon />}
            className="self-center md:self-start"
          >
            Enter Activation Code
          </Button>
        </div>

        <p className="text-default-500 text-sm">
          Version 2.4.3 | Compatible with macOS 10.13 and above
        </p>
      </div>
      <div className="w-full lg:w-1/3 flex items-start justify-center">
        <Image
          src="/laptop.png"
          alt="mockup"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/laptop.png"
          className="w-full max-w-96"
        />
      </div>
    </Section>

    <Section>
      <Card className="max-w-7xl w-full">
        <CardBody className="gap-6 p-6">
          <h1 className="text-2xl font-bold">Have an Activation Code?</h1>

          <div className="flex flex-col gap-2 ml-3">
            {[
              "Download and install SafePro VPN for macOS",
              'Launch the app and click "Activate with Code"',
              "Enter your activation code when prompted",
            ].map((str, index) => (
              <p key={index} className="text-default-500 text-base">
                {str}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-2 p-4 bg-default-100 border-2 border-default-600 rounded-2xl">
            <p>
              If you've purchased a subscription but haven't received your
              activation code, please check your email or contact our support
              team.
            </p>
            <HeroLink
              as={Link}
              href="/contact-us"
              className="text-base font-medium"
            >
              Contact Us
            </HeroLink>
          </div>
        </CardBody>
      </Card>
    </Section>

    <Section
      heading={
        <>
          Why Choose <span className="text-primary">SafePro VPN</span> for
          macOS?
        </>
      }
      description="Our macOS application is designed with security, speed, and ease of use in mind."
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

    <Section>
      <Card className="max-w-7xl w-full">
        <CardBody className="gap-6 p-6">
          <h1 className="text-2xl font-bold">System Requirements</h1>

          <div className="w-full grid md:grid-cols-2 gap-y-4">
            {[
              {
                heading: "Operating System",
                requirements: [
                  "macOS 10.13 (High Sierra) or later",
                  "Compatible with Apple Silicon (M1/M2) and Intel processors",
                ],
              },
              {
                heading: "Hardware",
                requirements: [
                  "1GB RAM minimum (2GB recommended)",
                  "100MB free disk space",
                  "Internet connection required",
                ],
              },
            ].map(({ heading, requirements }, index) => (
              <div key={index} className="flex flex-col items-start gap-4 px-4">
                <h3 className="text-lg font-semibold">{heading}</h3>
                {requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="text-default-500 flex items-center gap-2 text-sm"
                  >
                    <TickIcon className="w-4 h-4" />
                    <p>{requirement}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Section>

    <Section
      heading={
        <>
          How to Install <span className="text-primary">SafePro VPN</span> on
          macOS
        </>
      }
    >
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            heading: "Download the App",
            description:
              "Click the download button above to get the latest version of SafePro VPN for macOS.",
            Icon: MacOSIcon,
          },
          {
            heading: "Install & Open",
            description:
              "Open the downloaded .dmg file and drag SafePro VPN to your Applications folder.",
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
      heading="Frequently Asked Questions"
      classNames={{ section: "bg-cyan-50" }}
    >
      <Accordion variant="splitted" className="w-full max-w-xl mb-4">
        {[
          {
            question: "Is SafePro VPN compatible with all macOS devices?",
            answer:
              "SafePro VPN is compatible with MacBooks and iMacs running macOS 10.13 (High Sierra) or later. For the best experience, use the latest version of macOS",
          },
          {
            question: "Does SafePro VPN slow down internet speed on Mac?",
            answer:
              "SafePro VPN uses high-speed servers to ensure minimal speed loss. Most users enjoy smooth streaming, browsing, and downloading without noticeable slowdowns.",
          },
          {
            question: "Will SafePro VPN affect my Mac’s battery life?",
            answer:
              "SafePro VPN is designed to be lightweight and power-efficient. While VPNs use some resources, SafePro VPN keeps battery usage minimal while maintaining strong security and performance.",
          },
          {
            question: "Is my data safe if the VPN connection drops?",
            answer:
              "Yes, SafePro VPN includes a Kill Switch feature (if enabled) that instantly blocks internet traffic if the VPN disconnects, preventing data leaks.",
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

export default DownloadForMACOS;
