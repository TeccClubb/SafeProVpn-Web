"use client";

import React from 'react';
import Section, { SectionDescription, SectionHeading } from '../sections/Section';
import DownloadIcon from '@/icons/DownloadIcon';
import Link from 'next/link';
import { Button } from '@heroui/react';

const OnlinePrivacy = () => {
  return (
    <Section>
      <div className="w-full max-w-5xl bg-cyan-500/10 mx-auto p-8 rounded-lg shadow-lg text-center">
        <SectionHeading className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center'>
          Ready to Secure Your Online Privacy
        </SectionHeading>
        <SectionDescription className='p-0 lg:w-full text-sm md:text-base text-center'>
          Join millions of users worldwide who trust SafePro VPN for their online security and privacy needs.
        </SectionDescription>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

        
      </div>
    </Section>
  );
};

export default OnlinePrivacy;
