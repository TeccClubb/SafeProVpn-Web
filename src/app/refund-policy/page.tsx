import { Metadata } from "next";
import React, { FC } from "react";
import LegalNotes from "@/components/LegalNotes";
import { fetchLegalNotes } from "@/lib/fetchLegalNotes";

export const metadata: Metadata = { title: "Refund Policy" };

const RefundPolicyPage: FC = async () => {
  const { status, message, legalNotes } = await fetchLegalNotes();
  return (
    <LegalNotes
      heading="Refund Policy"
      errorMessage={!status ? message : undefined}
      htmlContent={legalNotes?.refund_policy}
    />
  );
};

export default RefundPolicyPage;
