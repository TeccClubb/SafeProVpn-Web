import { Metadata } from "next";
import React, { FC } from "react";
import LegalNotes from "@/components/LegalNotes";
import { fetchLegalNotes } from "@/lib/fetchLegalNotes";

export const metadata: Metadata = { title: "Privacy Policy" };

const PrivacyPolicyPage: FC = async () => {
  const { status, message, legalNotes } = await fetchLegalNotes();
  return (
    <LegalNotes
      heading="Privacy Policy"
      errorMessage={!status ? message : undefined}
      htmlContent={legalNotes?.privacy_policy}
    />
  );
};

export default PrivacyPolicyPage;
