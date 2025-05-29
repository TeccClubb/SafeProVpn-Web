"use client";

import React, { FC } from "react";
import Section from "../sections/Section";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@heroui/react";
import { usePlans } from "@/hooks/usePlans";
import TickIcon from "@/icons/TickIcon";
import { cn } from "@/lib/utils";

const PricingSection: FC = () => {
  const { isPlansLoading, plans } = usePlans();
  return (
    <Section
      heading="Simple Pricing, Powerful Protection"
      description="Choose a plan that fits your needs. Whether you're browsing at home or on the go, Safe Pro keeps your data private and your connection secure—always."
      classNames={{ section: "bg-[#F5F9FC]" }}
    >
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-4">
        {!isPlansLoading &&
          plans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "w-full p-6 overflow-visible relative",
                plan.is_best_deal
                  ? "pb-14 border-3 border-primary"
                  : "mt-4 bg-transparent"
              )}
            >
              {plan.is_best_deal && (
                <Chip
                  color="primary"
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  MOST POPULAR
                </Chip>
              )}
              <CardHeader className="flex-col items-start gap-y-3">
                <div className="w-full flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  {plan.is_best_deal && (
                    <Chip
                      color="primary"
                      variant="flat"
                      size="sm"
                      classNames={{ content: "text-primary font-bold" }}
                    >
                      RECOMMENDED
                    </Chip>
                  )}
                </div>
                <div className="flex items-end">
                  <h2 className="text-4xl font-bold">${plan.price}</h2>
                  <p className="text-base text-default-500">
                    /{plan.duration > 1 ? plan.duration : ""}{" "}
                    {plan.duration_unit}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <ul className="flex flex-col gap-y-4">
                  {plan.description.split(",").map((feature, index) => (
                    <li
                      key={feature + index}
                      className="flex items-center gap-2"
                    >
                      <TickIcon /> {feature.trim()}
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  variant={plan.is_best_deal ? "solid" : "bordered"}
                  color="primary"
                  fullWidth
                  size="lg"
                >
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </Section>
  );
};

export default PricingSection;
