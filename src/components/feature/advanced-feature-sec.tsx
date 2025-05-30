"use client";
import React from 'react';
import { Wifi, Split, Shield, EyeOff } from 'lucide-react';
import Section from '../sections/Section';
import { Card } from '@heroui/react';

const features = [
    {
        title: 'Kill Switch',
        description:
            'Automatically disconnects your internet if the VPN connection drops, ensuring your data is never exposed.',
        icon: <Wifi className="w-6 h-6 text-cyan-500" />,
    },
    {
        title: 'Split Tunneling',
        description:
            'Choose which apps use the VPN and which connect directly to the internet for maximum flexibility.',
        icon: <Split className="w-6 h-6 text-cyan-500" />,
    },
    {
        title: 'Double VPN',
        description:
            'Route your traffic through two different servers for an extra layer of encryption and privacy.',
        icon: <Shield className="w-6 h-6 text-cyan-500" />,
    },
    {
        title: 'Obfuscated Servers',
        description:
            'Disguise your VPN traffic to bypass network restrictions and VPN blocks in restrictive regions.',
        icon: <EyeOff className="w-6 h-6 text-cyan-500" />,
    },
];

const AdvancedFeatureSecurity = () => {
    return (
        <Section
            classNames={{ section: 'bg-gray-50' }}
            heading="Advanced Security Features"
            description="Stay protected with our comprehensive suite of advanced security features designed to keep you safe online."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
  {features.map((feature, index) => (
    <Card
      key={index}
      className="rounded-xl shadow-sm bg-white p-6 flex items-start gap-2"
    >

      <div className="flex items-start gap-3">
        <div className="bg-cyan-100 p-2 rounded-full flex-shrink-0">
          {feature.icon}
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-800">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {feature.description}
          </p>
        </div>
      </div>
    </Card>
  ))}
</div>

        </Section>
    );
};

export default AdvancedFeatureSecurity;
