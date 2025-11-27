import React, { FC } from "react";
import Section, { SectionProps } from "../sections/Section";
import { Alert } from "@heroui/alert";
import axios, { AxiosError } from "axios";
import { GET_PLANS_ROUTE } from "@/lib/constants";
import PlanCards from "./PlanCards";

const CommonSection: FC<SectionProps> = ({ children, ...props }) => (
  <Section
    heading="Simple Pricing, Powerful Protection"
    description="Choose a plan that fits your needs. Whether you're browsing at home or on the go, Safe Pro keeps your data private and your connection secure—always."
    classNames={{ section: "bg-slate-50" }}
    {...props}
  >
    {children}
  </Section>
);

const PricingSection: FC<SectionProps> = async ({ ...props }) => {
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
      <CommonSection {...props}>
        <Alert color="danger">{message}</Alert>
      </CommonSection>
    );
  }

  if (!plans) {
    return (
      <CommonSection {...props}>
        <Alert color="danger">Failed to plans load</Alert>
      </CommonSection>
    );
  }

  return (
    <CommonSection {...props}>
      <PlanCards plans={plans} />
    </CommonSection>
  );
};

export default PricingSection;
