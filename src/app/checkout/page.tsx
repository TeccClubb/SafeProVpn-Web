"use client";

import React, { FC, Suspense } from "react";
import CheckoutForm from "@/components/dashboard/payments/CheckoutForm";
import { notFound, useSearchParams } from "next/navigation";
import Section from "@/components/sections/Section";
import OrderSummary from "@/components/dashboard/payments/orderSummary";
import PaymentStep from "@/components/dashboard/payments/PaymentStep";

const CheckoutPage: FC = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");
  const priceId = searchParams.get("priceId");

  if (!planId || !priceId) {
    notFound();
  }

  return (
    <Section heading="Complete Your Purchase">
      <div className="w-full flex lg:flex-row flex-col-reverse lg:items-start items-center lg:justify-between gap-x-4 gap-y-6">
        <div className="w-full max-w-3xl space-y-6">
          <PaymentStep />

          <CheckoutForm priceId={priceId} />
        </div>
        <OrderSummary planId={+planId} />
      </div>
    </Section>
  );
};

const Page: FC = () => (
  <Suspense>
    <CheckoutPage />
  </Suspense>
);

export default Page;
