import { Metadata } from "next";
import React, { FC } from "react";
import LegalNotes from "@/components/LegalNotes";
import { fetchLegalNotes } from "@/lib/fetchLegalNotes";

export const metadata: Metadata = { title: "Term of Services" };

const TermsOfServicesPage: FC = async () => {
  const { status, message, legalNotes } = await fetchLegalNotes();
  return (
    <LegalNotes
      heading="Term of Services"
      errorMessage={!status ? message : undefined}
      htmlContent={legalNotes?.tos}
    />
  );
};

export default TermsOfServicesPage;
