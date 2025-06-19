import React from "react";
import Section from "../sections/Section";
import FAQAccordion from "../FAQAccordion";

const FrequentlyQuestion: React.FC = () => {
  return (
    <Section
      heading="Frequently Asked Questions"
      description="We’ve got answers. If you need more help, reach out to our support team 24/7."
    >
      <FAQAccordion />
    </Section>
  );
};

export default FrequentlyQuestion;
