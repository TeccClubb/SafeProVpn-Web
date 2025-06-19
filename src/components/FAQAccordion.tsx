"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is SeelVpn and how does it work?",
    answer:
      "SeelVpn is a secure VPN service that encrypts your internet connection, allowing you to browse privately and access restricted content by routing your traffic through remote servers.",
  },
  {
    question: "Is my online privacy worth the cost?",
    answer:
      "Absolutely. Investing in SeelVpn ensures your personal data, browsing history, and online identity remain protected from hackers, ISPs, and other third parties.",
  },
  {
    question: "How can I confirm SeelVpn is keeping me secure?",
    answer:
      "You can check your IP address before and after connecting to SeelVpn. You’ll notice a change, which confirms your location is hidden. Additionally, SeelVpn uses military-grade encryption and a no-logs policy.",
  },
  {
    question: "Will SeelVpn slow or change my browsing experience?",
    answer:
      "While any VPN can slightly affect speed due to encryption overhead, SeelVpn is optimized for speed and performance to ensure smooth browsing, streaming, and downloads.",
  },
  {
    question: "How many devices can I use on one SeelVpn account?",
    answer:
      "You can use SeelVpn on up to 5 devices simultaneously, including phones, tablets, and computers, all under a single subscription.",
  },
  {
    question: "Why should I use SeelVpn over other VPNs?",
    answer:
      "SeelVpn offers high-speed servers, strong encryption, no data logging, and user-friendly apps, making it a reliable and affordable choice among competitors.",
  },
];

const FAQAccordion: React.FC = () => {
  return (
    <Accordion variant="splitted" className="w-full max-w-3xl">
      {faqData.map((item, index) => (
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
  );
};

export default FAQAccordion;
