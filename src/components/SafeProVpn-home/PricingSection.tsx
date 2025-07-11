"use client";

import React, { FC, useMemo } from "react";
import Section, { SectionProps } from "../sections/Section";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Tabs,
  Tab,
  Skeleton,
} from "@heroui/react";
import { usePlans } from "@/hooks/usePlans";
import TickIcon from "@/icons/TickIcon";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Plan } from "@/types";

type FilterKey = "all" | "week" | "month" | "year";

const Plans: FC<{
  filterKey: FilterKey;
  isPlansLoading: boolean;
  plans: Plan[];
}> = ({ filterKey, isPlansLoading, plans = [] }) => {
  const router = useRouter();
  const { status: authStatus } = useSession();

  const filterPlans = useMemo(() => {
    if (filterKey === "all") return plans;
    return plans.filter((plan) => plan.duration_unit === filterKey);
  }, [filterKey, plans]);

  const handleSelectPlan = (planId: number) =>
    router.push(
      authStatus === "authenticated"
        ? `/checkout?planId=${planId}`
        : `/login?redirect=/checkout?planId=${planId}`
    );
  return (
    <>
      {!isPlansLoading && filterPlans.length === 0 && (
        <div className="col-span-full text-center text-lg text-default-500 py-8">
          No plans found
        </div>
      )}

      {!isPlansLoading &&
        filterPlans.map((plan) => (
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
                <h2 className="text-4xl font-bold">
                  $
                  {(
                    parseFloat(plan.original_price ?? "0") -
                    parseFloat(plan.discount_price ?? "0")
                  ).toFixed(2)}
                </h2>
                <p className="text-base text-default-500">
                  /{plan.duration > 1 ? plan.duration : ""} {plan.duration_unit}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <ul className="flex flex-col gap-y-4">
                {plan.description.split(",").map((feature, index) => (
                  <li key={feature + index} className="flex items-center gap-2">
                    <TickIcon /> {feature.trim()}
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                onPress={() => handleSelectPlan(plan.id)}
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
    </>
  );
};

const PricingSection: FC<SectionProps> = ({ ...props }) => {
  const { isPlansLoading, plans } = usePlans();
  return (
    <Section
      heading="Simple Pricing, Powerful Protection"
      description="Choose a plan that fits your needs. Whether you're browsing at home or on the go, Safe Pro keeps your data private and your connection secure—always."
      classNames={{ section: "bg-slate-50" }}
      {...props}
    >
      <Tabs
        aria-label="Pricing Plans"
        color="primary"
        size="lg"
        radius="full"
        classNames={{ base: "", tabList: "shadow-md", tab: "capitalize" }}
      >
        {["week", "month", "year"].map((key) => (
          <Tab key={key} title={key + "ly"} className="w-full">
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-4">
              <Plans
                filterKey={key as FilterKey}
                isPlansLoading={isPlansLoading}
                plans={plans}
              />
            </div>
          </Tab>
        ))}
      </Tabs>
      
      {isPlansLoading && (
        <div className="w-full mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Card key={idx} className="w-full p-6">
              <CardHeader className="flex-col items-start gap-y-3">
                <div className="w-full flex items-center justify-between">
                  <Skeleton className="h-6 w-24 rounded" />
                  <Skeleton className="h-5 w-20 rounded" />
                </div>
                <div className="flex items-end gap-2">
                  <Skeleton className="h-8 w-16 rounded" />
                  <Skeleton className="h-4 w-20 rounded" />
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <ul className="flex flex-col gap-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4 rounded-full" />
                      <Skeleton className="h-4 w-32 rounded" />
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Skeleton className="h-10 w-full rounded" />
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
};

export default PricingSection;
