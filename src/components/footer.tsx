import React, { FC } from "react";
import {
  ABOUT_US_PAGE_PATH,
  CONTACT_US_PAGE_PATH,
  DOWNLOAD_FOR_ANDROID_PAGE_PATH,
  DOWNLOAD_FOR_IOS_PAGE_PATH,
  DOWNLOAD_FOR_MACOS_PAGE_PATH,
  DOWNLOAD_FOR_WINDOWS_PAGE_PATH,
  PRIVACY_POLICY_PAGE_PATH,
  REFUND_POLICY_PAGE_PATH,
  TERMS_OF_SERVICES_PAGE_PATH,
} from "@/lib/pathnames";
import Link from "next/link";
import {
  FaFacebookF,
  FaHeadphones,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import AppLogo from "./AppLogo";

const FooterSlice: FC<{
  heading: string;
  links: { href: string; title: string }[];
}> = ({ heading, links }) => (
  <section className="flex flex-col gap-y-3">
    <h3 className="text-white font-semibold">{heading}</h3>
    <ul className="flex flex-col gap-y-2">
      {links.map(({ href, title }) => (
        <li key={href}>
          <Link href={href} className="hover:text-white">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

const Footer: FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 text-md">
      <div className="w-full max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:flex-row sm:justify-between sm:items-start text-center sm:text-left space-y-10 sm:space-y-0">
        <div className="flex flex-col gap-y-3">
          <AppLogo className="text-white" />
          <p>Secure. Private. Unrestricted.</p>
          <ul className="flex gap-4">
            {[
              { href: "/facebook.com", Icon: FaFacebookF },
              { href: "/x.com", Icon: FaTwitter },
              { href: "/instagram.com", Icon: FaInstagram },
              { href: "/linkedin.com", Icon: FaLinkedinIn },
            ].map(({ href, Icon }) => (
              <li key={href}>
                <a href={href} target="_blank">
                  <Icon className="size-5 hover:text-white" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterSlice
          heading="Products"
          links={[
            { href: DOWNLOAD_FOR_WINDOWS_PAGE_PATH, title: "VPN for Windows" },
            { href: DOWNLOAD_FOR_MACOS_PAGE_PATH, title: "VPN for Mac" },
            { href: DOWNLOAD_FOR_IOS_PAGE_PATH, title: "VPN for iOS" },
            { href: DOWNLOAD_FOR_ANDROID_PAGE_PATH, title: "VPN for Android" },
          ]}
        />

        <FooterSlice
          heading="Resources"
          links={[
            { href: DOWNLOAD_FOR_WINDOWS_PAGE_PATH, title: "What is a VPN?" },
            { href: DOWNLOAD_FOR_MACOS_PAGE_PATH, title: "Privacy Guide" },
            { href: DOWNLOAD_FOR_IOS_PAGE_PATH, title: "Server Status" },
            { href: DOWNLOAD_FOR_ANDROID_PAGE_PATH, title: "VPN Reviews" },
          ]}
        />

        <FooterSlice
          heading="Support"
          links={[
            { href: ABOUT_US_PAGE_PATH, title: "About Us" },
            { href: CONTACT_US_PAGE_PATH, title: "Contact Us" },
            { href: REFUND_POLICY_PAGE_PATH, title: "Refund Policy" },
            { href: PRIVACY_POLICY_PAGE_PATH, title: "Privacy Policy" },
            { href: TERMS_OF_SERVICES_PAGE_PATH, title: "Terms of Service" },
          ]}
        />
      </div>

      <div className="w-full max-w-7xl border-t border-gray-700 py-4 mx-auto flex justify-between items-center text-xs text-gray-500">
        <p>© 2023 SafePro VPN. All rights reserved.</p>
        <p>
          Powered By{" "}
          <a
            href="https://tecclubx.com/"
            target="_blank"
            className="text-cyan-500 hover:underline"
          >
            TecClub
          </a>
        </p>
      </div>

      <div className="fixed bottom-5 right-5 bg-cyan-500 text-white rounded-full p-3 shadow-md cursor-pointer">
        <FaHeadphones className="size-5" />
      </div>
    </footer>
  );
};

export default Footer;
