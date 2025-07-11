"use client";
import Section from "@/components/sections/Section";
import AndroidIcon from "@/icons/AndroidIcon";
import AppStoreIcon from "@/icons/AppStoreIcon";
import DownloadIcon from "@/icons/DownloadIcon";
import GooglePlayIcon from "@/icons/GooglePlayIcon";
import I_Icon from "@/icons/I_Icon";
import IOSIcon from "@/icons/IOSIcon";
import LocationDotIcon from "@/icons/LocationDotIcon";
import MacOSIcon from "@/icons/MacOSIcon";
import ShieldIcon from "@/icons/ShieldIcon";
import TimerIcon from "@/icons/TimerIcon";
import WindowIcon from "@/icons/WindowIcon";
import { downloadsImgBase64Src } from "@/lib/downloads-img-base64";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Link as HeroLink,
} from "@heroui/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DownloadPage = () => (
  <>
    <Section
      heading="Download SafePro VPN"
      description="Secure your connection on any device with our easy-to-use apps. Download SafePro VPN and enjoy unrestricted, private internet access anywhere."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          { title: "Military-grade encryption", Icon: ShieldIcon },
          { title: "Lightning-fast speeds", Icon: TimerIcon },
          { title: "Servers in 90+ countries", Icon: LocationDotIcon },
        ].map(({ title, Icon }, index) => (
          <Card key={index} className="w-80 px-4 rounded-full">
            <CardBody className="text-base font-normal flex-row gap-2">
              <Icon className="text-primary" />
              {title}
            </CardBody>
          </Card>
        ))}
      </div>

      <Image
        src="/downloads-img.png"
        alt="downloads-img"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={downloadsImgBase64Src}
        className="max-w-2xl w-full h-auto"
      />
    </Section>
    <Section heading="Choose Your Platform">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {[
          {
            osName: "Windows",
            osVersion: "Windows 8, 10, 11 and Server",
            vpnDownloadHref: "/downloads/Windows",
            vpnVersion: "Version 3.4.2 (64-bit)",
            Icon: WindowIcon,
          },
          {
            osName: "MAC OS",
            osVersion: "macOS 10.15 and newer",
            vpnDownloadHref: "/downloads/MacOS",
            vpnVersion: "Version 3.4.0 (Intel/Apple Silicon)",
            Icon: MacOSIcon,
          },
          {
            osName: "Android",
            osVersion: "Android 6.0 and newer",
            vpnDownloadHref: "/downloads/Android",
            vpnVersion: (
              <span className="text-base flex items-center gap-2">
                <GooglePlayIcon className="w-4 h-4" /> Google Play
              </span>
            ),
            Icon: AndroidIcon,
          },
          {
            osName: "iOS",
            osVersion: "iOS 13.0 and newer",
            vpnDownloadHref: "/downloads/iOS",
            vpnVersion: (
              <span className="text-base flex items-center gap-2">
                <AppStoreIcon className="w-4 h-4" /> App Store
              </span>
            ),
            Icon: IOSIcon,
          },
        ].map(
          ({ osName, osVersion, vpnDownloadHref, vpnVersion, Icon }, index) => (
            <Card key={index} className="w-72">
              <CardBody className="items-center gap-4 p-6">
                <span className="bg-blue-50 rounded-full p-6">
                  <Icon className="w-8 h-8 text-primary" />
                </span>
                <div className="flex flex-col gap-1.5 items-center">
                  <h2 className="text-xl font-medium">{osName}</h2>
                  <p className="text-default-500 text-base">{osVersion}</p>
                </div>
                <Button
                  as={Link}
                  href={vpnDownloadHref}
                  color="primary"
                  variant="shadow"
                  fullWidth
                >
                  Download Now
                </Button>
                <p className="text-default-500 text-sm">{vpnVersion}</p>
              </CardBody>
            </Card>
          )
        )}
      </div>

      <Card className="w-full max-w-4xl md:flex-row">
        <CardHeader className="text-white bg-primary w-full md:w-64 md:rounded-none flex flex-col justify-center gap-4">
          <I_Icon />
          <h3 className="text-xl font-bold">Easy Setup</h3>
          <span className="text-white/90 text-base">
            Just download, install and connect.
          </span>
        </CardHeader>
        <CardBody className="flex-1 gap-4 p-6">
          <h1 className="text-2xl font-semibold">How to Install SafePro VPN</h1>
          <ul className="text-default-500 flex flex-col gap-3">
            {[
              "Download the app for your platform",
              "Install and launch SafePro VPN",
              "Log in with your account credentials",
              "Connect to a server and enjoy secure browsing!",
            ].map((str, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-primary bg-blue-50 text-base font-semibold w-8 h-8 flex items-center justify-center rounded-full">
                  {index + 1}
                </span>
                {str}
              </li>
            ))}
          </ul>

          <HeroLink as={Link} href="/guide-setup" className="self-start">
            View detailed setup guides <ArrowRight className="w-5 h-5" />
          </HeroLink>
        </CardBody>
      </Card>
    </Section>

    <Section heading="Frequently Asked Questions">
      <Accordion variant="splitted" className="w-full max-w-xl mb-4">
        {[
          {
            question: "Can I use SafePro VPN on multiple devices?",
            answer:
              "Yes, a single SafePro VPN subscription allows you to protect up to 5 devices simultaneously. You can use our apps on any combination of platforms.",
          },
          {
            question: "How do I update SafePro VPN?",
            answer:
              "Our apps are designed to update automatically. However, you can always download the latest version from this page to ensure you have the most recent features and security updates.",
          },
          {
            question: "Is SafePro VPN compatible with my Smart TV?",
            answer:
              "SafePro VPN works with Android TV directly. For other smart TVs, you can set up our VPN on your router to protect all connected devices, including your smart TV.",
          },
          {
            question: "What if I need help installing SafePro VPN?",
            answer:
              "Our customer support team is available 24/7 to help you with any installation issues. You can contact us via live chat or email from our support page.",
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

    <Section
      heading="Ready to Secure Your Online Privacy"
      description="Join millions of users worldwide who trust SafePro VPN for their online security and privacy needs."
      classNames={{ section: "bg-cyan-500/10" }}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button
          as={Link}
          href="/downloads"
          size="lg"
          color="primary"
          variant="shadow"
          startContent={<DownloadIcon />}
        >
          Get SaferPro VPN
        </Button>

        <Button
          as={Link}
          href="/pricing"
          size="lg"
          color="primary"
          variant="bordered"
        >
          View Plan
        </Button>
      </div>
    </Section>
  </>
);

export default DownloadPage;
