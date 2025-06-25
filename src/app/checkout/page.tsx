"use client";
import CheckoutForm from "@/components/dashboard/payments/CheckoutForm";
import { useSearchParams } from "next/navigation";
import { usePlans } from "@/hooks/usePlans"; // update path based on your structure
import { Suspense, useMemo } from "react";
import Section from "@/components/sections/Section";
import OrderSummary from "@/components/dashboard/payments/orderSummary";
import { useBillingAddress } from "@/hooks/useBillingAddress";
import { useSession } from "next-auth/react";


function ProductConfigurationCheckOut() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");

  const { billingAddress, loading, error } = useBillingAddress();

  const { isPlansLoading, plans } = usePlans();

  // Find the selected plan
  const selectedPlan = useMemo(() => {
    return plans.find((plan) => String(plan.id) === String(planId));
  }, [plans, planId]);

  if (isPlansLoading) return <p className="text-center">Loading plans...</p>;

  if (!selectedPlan) {
    return (
      <div className="text-center text-red-500 font-semibold">
        No plan found for ID: {planId}
      </div>
    );
  }

  return (
    <Section heading="Complete Your Purchase">
      <div className=" w-full grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">

          <CheckoutForm
            plan={selectedPlan}
            billingAddress={billingAddress ?? undefined}
            // Stripe expects cents
            className="w-full"
          />
        </div>
        <OrderSummary plan={selectedPlan}></OrderSummary>
      </div>

    </Section>
  );
}


export default function CheckOutFormPage() {

  return <Suspense>
    <ProductConfigurationCheckOut></ProductConfigurationCheckOut>
  </Suspense>
}
