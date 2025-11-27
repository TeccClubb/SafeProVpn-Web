import React, { FC, ReactNode } from "react";
import CheckoutForm from "@/components/dashboard/payments/CheckoutForm";
import { notFound } from "next/navigation";
import Section from "@/components/sections/Section";
import OrderSummary from "@/components/dashboard/payments/orderSummary";
import PaymentStep from "@/components/dashboard/payments/PaymentStep";
import { auth } from "@/auth";
import { Alert } from "@heroui/alert";
import axios, { AxiosError } from "axios";
import { GET_PLANS_ROUTE } from "@/lib/constants";

const CheckoutPageSection: FC<{ children: ReactNode }> = ({ children }) => (
  <Section heading="Complete Your Purchase">{children}</Section>
);

const CheckoutPage: FC<{
  searchParams: Promise<{ planId?: string }>;
}> = async ({ searchParams }) => {
  const { planId } = await searchParams;

  if (!planId) {
    notFound();
  }

  const session = await auth();

  if (!session) {
    return (
      <CheckoutPageSection>
        <Alert color="danger">You are not logged in</Alert>
      </CheckoutPageSection>
    );
  }

  const { status, message, plans } = await axios
    .get<{ status: boolean; message?: string; plans?: Plan[] }>(GET_PLANS_ROUTE)
    .then((res) => res.data)
    .catch((error) => ({
      status: false,
      message:
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to Plans Load",
      plans: undefined,
    }));

  if (!status) {
    return (
      <CheckoutPageSection>
        <Alert color="danger">{message}</Alert>
      </CheckoutPageSection>
    );
  }

  if (!plans) {
    return (
      <CheckoutPageSection>
        <Alert color="danger">Plans are not founded</Alert>
      </CheckoutPageSection>
    );
  }

  const plan = plans.find((p) => p.id === +planId);

  if (!plan) {
    return (
      <CheckoutPageSection>
        <Alert color="danger">Plan is not founded</Alert>
      </CheckoutPageSection>
    );
  }

  return (
    <CheckoutPageSection>
      <div className="w-full flex lg:flex-row flex-col-reverse lg:items-start items-center lg:justify-between gap-x-4 gap-y-6">
        <div className="w-full max-w-3xl space-y-6">
          <PaymentStep />

          <CheckoutForm
            priceId={plan.paddle_price_id}
            email={session.user.email}
          />
        </div>
        <OrderSummary plan={plan} />
      </div>
    </CheckoutPageSection>
  );
};

export default CheckoutPage;
