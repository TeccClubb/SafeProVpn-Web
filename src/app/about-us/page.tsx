import { Metadata } from "next";
import React, { FC } from "react";
import LegalNotes from "@/components/LegalNotes";
import { fetchLegalNotes } from "@/lib/fetchLegalNotes";

export const metadata: Metadata = { title: "About Us" };

const AboutUsPage: FC = async () => {
  const { status, message, legalNotes } = await fetchLegalNotes();
  return (
    <LegalNotes
      heading="About Us"
      errorMessage={!status ? message : undefined}
      htmlContent={legalNotes?.about_us}
    />
  );
};

export default AboutUsPage;
