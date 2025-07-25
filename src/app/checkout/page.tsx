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
import { useSession } from "next-auth/react";

function ProductConfigurationCheckOut() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");
  const { data: session } = useSession();

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
            <div className="w-full flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-12 rounded-2xl" />
                ))}
              </div>
              <Skeleton className="h-12 rounded-2xl" />
            </div>
          )}

          {!isPlansLoading && !selectedPlan && (
            <Alert color="danger" title={`No plan found for ID: ${planId}`} />
          )}

          {!isPlansLoading && !isBillingAddressLoading && selectedPlan && (
            <CheckoutForm
              email={session ? session.user.email : ""}
              billingAddress={billingAddress}
              priceId={
                selectedPlan?.price_id ?? "pri_01k0vedc7a3dqp6ecqvsdhs46c"
              }
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
