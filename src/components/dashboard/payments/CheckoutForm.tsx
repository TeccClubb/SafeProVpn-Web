"use client";

import React, { FC, useState } from "react";
import { Key } from "@react-types/shared";
import { Alert, Tab, Tabs } from "@heroui/react";
import PayWithOxapay from "@/components/PayWithOxapay";

const CheckoutForm: FC<{
  billingAddress?: BillingAddress;
  plan: Plan;
  email: string;
}> = ({ billingAddress, plan, email }) => {
  const [selectedKey, onSelectionChange] = useState<Key>("crypto");

  return (
    <div className="flex flex-col gap-4">
      <Tabs
        aria-label="Payment Methods"
        color="primary"
        variant="solid"
        size="lg"
        radius="full"
        selectedKey={selectedKey}
        onSelectionChange={onSelectionChange}
        classNames={{ tabContent: "text-wrap whitespace-normal" }}
        fullWidth
      >
        <Tab key="card" title="Credit / Debit Card" className="w-full">
          <Alert className="items-stretch">
            This service is not available right now, coming soon as possible
          </Alert>
        </Tab>

        <Tab key="crypto" title="Cryptocurrency" className="w-full">
          <PayWithOxapay
            plan={plan}
            billingAddress={billingAddress}
            email={email}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default CheckoutForm;
