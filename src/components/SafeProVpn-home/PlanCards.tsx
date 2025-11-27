"use client";

import React, { FC, Key, useMemo, useState } from "react";
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
} from "@heroui/react";
import TickIcon from "@/icons/TickIcon";
import { cn } from "@/lib/utils";
import { CHECKOUT_PAGE_PATH } from "@/lib/pathnames";
import Link from "next/link";

const PlanCards: FC<{ plans: Plan[] }> = ({ plans }) => {
  const [filterKey, setFilterKey] = useState<Key>("all");

  const filterPlans = useMemo(() => {
    if (filterKey === "all") return plans;
    return plans.filter((plan) => plan.invoice_interval === filterKey);
  }, [filterKey, plans]);
  return (
    <Tabs
      aria-label="Pricing Plans"
      color="primary"
      size="lg"
      radius="full"
      onSelectionChange={setFilterKey}
      classNames={{ base: "", tabList: "shadow-md", tab: "capitalize" }}
    >
      {["week", "month", "year"].map((key) => (
        <Tab key={key} title={key + "ly"} className="w-full">
          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-4">
            {!filterPlans.length && (
              <div className="col-span-full text-center text-lg text-default-500 py-8">
                {key + "ly"} plans not found
              </div>
            )}

            {filterPlans.map((plan) => (
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
                      /{plan.invoice_period > 1 ? plan.invoice_period : ""}{" "}
                      {plan.invoice_interval}
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
                    as={Link}
                    href={`${CHECKOUT_PAGE_PATH}?planId=${plan.id}`}
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
        </Tab>
      ))}
    </Tabs>
  );
};

export default PlanCards;
