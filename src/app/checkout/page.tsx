import React, { FC, ReactNode } from "react";
import CheckoutForm from "@/components/dashboard/payments/CheckoutForm";
import { notFound } from "next/navigation";
import Section from "@/components/sections/Section";
import OrderSummary from "@/components/dashboard/payments/orderSummary";
import { auth } from "@/auth";
import { Alert } from "@heroui/alert";
import axios, { AxiosError } from "axios";
import { GET_BILLING_ADDRESS_ROUTE, GET_PLANS_ROUTE } from "@/lib/constants";
import StepIndicator from "@/components/dashboard/payments/StepIndicator";

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

  const { user } = await axios
    .get<{ status: boolean; user: { billing_address: BillingAddress } }>(
      GET_BILLING_ADDRESS_ROUTE,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${session.user.access_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => ({
      status: false,
      message:
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to Load Billing Address",
      user: undefined,
    }));

  return (
    <CheckoutPageSection>
      <div className="w-full flex lg:flex-row flex-col-reverse lg:items-start items-center lg:justify-between gap-x-4 gap-y-6">
        <div className="w-full max-w-3xl space-y-6">
          <StepIndicator
            steps={["Plan", "Payment", "Confirmation"]}
            currentStep={1}
          />
          <h2 className="text-lg text-left font-semibold mb-4">
            Payment Information
          </h2>

          <CheckoutForm
            plan={plan}
            email={session.user.email}
            billingAddress={user?.billing_address}
          />
        </div>
        <OrderSummary plan={plan} />
      </div>
    </CheckoutPageSection>
  );
};

export default CheckoutPage;
