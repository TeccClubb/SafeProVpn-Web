"use client";

import { Button } from "@heroui/react";
import { Database, MonitorSmartphone, CreditCard, Headphones, Zap } from "lucide-react";
import React from "react";


const cards = [
  {
    label: "Data Usage",
    value: "256 GB",
    icon: <Database className="text-blue-500 w-6 h-6" />, 
    subtitle: "65% of 500 GB monthly limit",
    progressColor: "bg-blue-500",
    progress: 65,
  },
  {
    label: "Active Devices",
    value: "4",
    icon: <MonitorSmartphone className="text-green-500 w-6 h-6" />,
    subtitle: "40% of 10 devices allowed",
    progressColor: "bg-green-500",
    progress: 40,
  },
  {
    label: "Next Bill",
    value: "$29.99",
    icon: <CreditCard className="text-purple-500 w-6 h-6" />,
    subtitle: "Due on May 25, 2023",
    link: "View billing history",
  },
  {
    label: "Support Tickets",
    value: "1",
    icon: <Headphones className="text-yellow-500 w-6 h-6" />,
    subtitle: "1 open ticket",
    link: "View all tickets",
  },
];

const OverviewCards = () => {
  return (
    <div className="space-y-6">
      <div className="bg-cyan-50 border border-cyan-200 text-cyan-800 px-4 py-4 rounded-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-cyan-500" />
          <p className="text-sm">
            Your Premium trial ends in 14 days. <br className="md:hidden" /> Upgrade now to keep all premium features.
          </p>
        </div>
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md">
          Upgrade Now
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-700 text-sm">{card.label}</h4>
              <div className="p-2 bg-gray-100 rounded-full">
                {card.icon}
              </div>
            </div>
            <h2 className="text-2xl font-semibold mt-2">{card.value}</h2>
            <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>

            {card.progress !== undefined && (
              <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                <div
                  className={`h-full rounded-full ${card.progressColor}`}
                  style={{ width: `${card.progress}%` }}
                />
              </div>
            )}

            {card.link && (
              <a
                href="#"
                className="text-sm text-cyan-600 mt-2 inline-block hover:underline"
              >
                {card.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCards;