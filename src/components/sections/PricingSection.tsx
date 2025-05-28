"use client";

import React, { FC } from "react";
import Section from "./Section";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { usePlans } from "@/hooks/usePlans";

const PricingSection: FC = () => {
  const { isPlansLoading, plans } = usePlans();
  return (
    <Section
      heading="Simple Pricing, Powerful Protection"
      description="Choose a plan that fits your needs. Whether you're browsing at home or on the go, Safe Pro keeps your data private and your connection secure—always."
      classNames={{ section: "bg-[#F5F9FC]" }}
    >
      {!isPlansLoading &&
        plans.map((plan) => (
          <div key={plan.id} className="w-full grid grid-cols-3 gap-6">
            <Card className="w-full p-6">
              <CardHeader className="flex-col items-start">
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <p className="text-lg text-default-500 mb-4">$5/month</p>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter></CardFooter>
            </Card>
          </div>
        ))}
    </Section>
  );
};

export default PricingSection;
