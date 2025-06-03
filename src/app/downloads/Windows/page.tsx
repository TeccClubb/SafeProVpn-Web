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

const DownloadForWindows: FC = () => (
  <>
    <Section
      className="lg:flex-row flex-col-reverse gap-y-4"
      classNames={{ section: "bg-gradient-to-r from-cyan-500/10 to-slate-50" }}
    >
      <div className="w-full lg:w-2/3 flex flex-col md:items-start gap-6">
        <SectionHeading className="md:text-start mb-0">
          Download SafePro VPN for Windows
        </SectionHeading>
        <SectionDescription className="lg:w-3/4 md:text-start p-0 mb-0">
          Secure your online presence with our high-speed, reliable VPN solution
          for Windows. Protect your privacy with just a few clicks.
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

    <Section
      heading={
        <>
          Download <span className="text-primary">SafePro VPN</span> for Windows
        </>
      }
      description="Get our latest version for Windows and enjoy enhanced security features, faster connection speeds, and a more intuitive interface."
    >
      <Card className="max-w-4xl w-full">
        <CardBody className="items-center justify-center gap-6 p-6">
          <span className="p-6 text-primary bg-cyan-50 rounded-full">
            <WindowIcon className="w-16 h-16" />
          </span>
          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="text-2xl font-bold">SafePro VPN for Windows</h1>
            <p className="text-default-500 text-base font-normal">
              Version 4.2.1 | Released: May 20, 2023
            </p>
            <p className="text-default-500 text-base font-normal">
              Compatible with Windows 8, 10, and 11 (64-bit and 32-bit)
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              color="primary"
              variant="shadow"
              startContent={<DownloadIcon />}
              className="w-56 h-20 text-base font-semibold"
            >
              <div className="flex flex-col">
                <span>64-bit</span>
                <span>(Recommended)</span>
              </div>
            </Button>

            <Button
              size="lg"
              color="primary"
              variant="bordered"
              startContent={<DownloadIcon />}
              className="w-56 h-20 text-base font-semibold"
            >
              32-bit
            </Button>
          </div>

          <p className="text-default-500 text-base flex items-center gap-2">
            <ExclamationMarkIcon className="text-primary" /> Verified & Secure
            Download
          </p>

          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "SHA256 Checksum",
                details: "Verify file integrity",
                Icon: FileEditIcon,
              },
              {
                title: "Installation Guide",
                details: "Step-by-step tutorial",
                Icon: BookIcon,
              },
              {
                title: "Release Notes",
                details: "What's new in 4.2.1",
                Icon: NotesIcon,
              },
            ].map(({ title, details, Icon }, index) => (
              <Card key={index}>
                <CardBody className="items-center gap-1.5 p-4">
                  <Icon className="text-primary w-7 h-7" />
                  <h4 className="text-base font-semibold">{title}</h4>
                  <p className="text-default-500 text-xs font-normal">
                    {details}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>
    </Section>

    <Section
      heading="System Requirements"
      classNames={{ section: "bg-gray-50" }}
    >
      <Card className="max-w-4xl w-full mb-8">
        <CardHeader className="text-white bg-primary text-base font-semibold">
          Additional Information
        </CardHeader>
        <CardBody className="gap-6 p-6">
          {[
            { title: "Operating System", description: "Windows 8, Windows 10, or Windows 11" },
            { title: "Processor", description: "1 GHz or faster processor" },
            { title: "RAM", description: "2 GB RAM (4 GB recommended)" },
            { title: "Disk Space", description: "50 MB of available disk space" },
            { title: "Internet Connection", description: "Broadband internet connection" },
            { title: "Administrator Rights", description: "Required for installation" },
          ].map(({ title, description }, index) => (
            <div key={index} className="flex items-start gap-4">
              <TickIcon />
              <div className=" flex flex-col gap-2 text-sm">
                <p>{title}</p>
                <p className="text-default-500">{description}</p>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>

      <Card className="max-w-4xl w-full">
        <CardHeader className="text-white bg-primary text-base font-semibold">
          Additional Information
        </CardHeader>
        <CardBody className="gap-6 p-6">
          <p className="text-default-500 text-base">
            SafePro VPN for Windows supports the following VPN protocols:
          </p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              {
                title: "OpenVPN",
                Icon: ShieldIcon,
              },
              {
                title: "IKEv2",
                Icon: LockIcon,
              },
              {
                title: "WireGuard",
                Icon: WireGardeIcon,
              },
            ].map(({ title, Icon }, index) => (
              <Card key={index}>
                <CardBody className="items-center gap-2 p-4">
                  <Icon className="text-primary w-7 h-7" />
                  <h4 className="text-sm font-medium">{title}</h4>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>
    </Section>

    <Section
      heading={
        <>
          Why Choose <span className="text-primary">SafePro VPN</span> for
          Windows?
        </>
      }
      description="Our Windows application is designed with security, speed, and ease of use in mind."
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
          Windows
        </>
      }
    >
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            heading: "Download the App",
            description:
              "Download the installer from our official website and save it to your computer.",
            Icon: WindowIcon,
          },
          {
            heading: "Install & Open",
            description:
              "Run the installer and follow the on-screen instructions to complete the installation.",
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
            question: "Is SafePro VPN compatible with all Windows devices?",
            answer:
              "Yes, SafePro VPN works smoothly on PCs and laptops running Windows 10 or 11. For the best experience, make sure your system is updated to the latest version.",
          },
          {
            question: "Can I choose different server locations on Windows?",
            answer:
              "Absolutely! SafePro VPN gives you access to multiple server locations worldwide. You can manually select the country or let the app choose the fastest one for you.",
          },
          {
            question: "Will SafePro VPN drain my laptop's battery?",
            answer:
              "SafePro VPN is optimized for efficiency. While it does use some battery like any background service, we’ve fine-tuned it to have a minimal impact without compromising on speed or security.",
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

export default DownloadForWindows;
