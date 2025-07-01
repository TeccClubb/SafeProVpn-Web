"use client";
import CheckoutForm from "@/components/dashboard/payments/CheckoutForm";
import { notFound, useSearchParams } from "next/navigation";
import { usePlans } from "@/hooks/usePlans"; // update path based on your structure
import { Suspense, useMemo } from "react";
import Section from "@/components/sections/Section";
import OrderSummary from "@/components/dashboard/payments/orderSummary";
import { useBillingAddress } from "@/hooks/useBillingAddress";
import PaymentStep from "@/components/dashboard/payments/PaymentStep";
import { Alert, Skeleton } from "@heroui/react";

function ProductConfigurationCheckOut() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");

  if (!planId) {
    notFound();
  }

  const { isPlansLoading, plans } = usePlans();
  const { billingAddress, isBillingAddressLoading } = useBillingAddress();

  const selectedPlan = useMemo(() => {
    return plans.find((plan) => String(plan.id) === String(planId));
  }, [plans, planId]);

  return (
    <Section heading="Complete Your Purchase">
      {/* <div className="w-full grid md:grid-cols-3 gap-6"> */}
      <div className="w-full flex lg:flex-row flex-col-reverse lg:items-start items-center lg:justify-between gap-x-4 gap-y-6">
        <div className="w-full max-w-3xl space-y-6">
          <PaymentStep />
          {isBillingAddressLoading && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-20 rounded" />
                  <Skeleton className="h-10 rounded" />
                </div>
              ))}
            </div>
          )}

          {!isPlansLoading && !selectedPlan && (
            <Alert color="danger" title={`No plan found for ID: ${planId}`} />
          )}

          {!isPlansLoading && !isBillingAddressLoading && selectedPlan && (
            <CheckoutForm
              planId={selectedPlan.id}
              amount={
                (parseFloat(selectedPlan.original_price) -
                  parseFloat(selectedPlan.discount_price)) *
                100
              }
              billingAddress={billingAddress}
            />
          )}
        </div>
        <OrderSummary plan={selectedPlan} isPlansLoading={isPlansLoading} />
      </div>
    </Section>
  );
}

export default function CheckOutFormPage() {
  return (
    <Suspense>
      <ProductConfigurationCheckOut></ProductConfigurationCheckOut>
    </Suspense>
  );
}
