"use client";
import React from 'react';
import Section from '../sections/Section';
import { Tabs, Tab } from "@heroui/react";

const TransparentPricing = () => {
  return (
    <Section
   classNames={{section: "bg-slate-50"}}
      heading={<>Simple, Transparent <span className="text-primary">Pricing</span></>}
      description="Choose the plan that works best for you. All plans include full access to our premium features, no-logs policy, and military-grade encryption."
    >
     <div className="flex justify-center px-4">
  <div className="w-full border border-white shadow-[0px_4px_6px_rgba(0,0,0,0.1)] bg-white rounded-full overflow-hidden max-w-xs sm:max-w-md md:max-w-xl py-1.5">
    <Tabs
      aria-label="Pricing Plans"
      color="primary"
      radius="full"
      variant="light"
      className="w-full"
    >
      <Tab key="week" title="Weekly" />
      <Tab key="month" title="Monthly" />
      <Tab key="year" title="Yearly" />
    </Tabs>
  </div>
</div>

    </Section>
  );
};

export default TransparentPricing;
