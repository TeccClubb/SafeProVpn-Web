
import React from 'react'
import Section, { SectionDescription, SectionHeading } from '../sections/Section';
import FAQAccordion from '../FAQAccordion';

const FrequentlyQuestion: React.FC = () => {
  return (
    <Section
    className='bg-white'
     heading="Frequently Asked Questions"
    description="We’ve got answers. If you need more help, reach out to our support team 24/7.">
  <FAQAccordion />

    </Section>
  )
}

export default FrequentlyQuestion;
