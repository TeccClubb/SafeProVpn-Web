"use client";
import React from "react";
import Section from "../sections/Section";
import { Tabs, Tab, Card } from "@heroui/react";
import { usePlans } from "@/hooks/usePlans";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@heroui/react";

import TickIcon from "@/icons/TickIcon";
import { cn } from "@/lib/utils";

const TransparentPricing = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { isPlansLoading, plans } = usePlans();

  const handleClick = (planId: string) => {
    if (!session) {
      router.push("/login");
    } else {
      router.push(`/checkout?planId=${planId}`);
    }
  };

  return (
    <Section
      classNames={{ section: "bg-slate-50" }}
      heading={
        <>
          Simple, Transparent <span className="text-primary">Pricing</span>
        </>
      }
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

      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 items-start mt-12 gap-4">
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
                  <h2 className="text-4xl font-bold">${(parseFloat(plan.original_price ?? "0") - parseFloat(plan.discount_price ?? "0")).toFixed(2)}</h2>
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
                  onClick={() => handleClick(String(plan.id))}
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

export default TransparentPricing;
