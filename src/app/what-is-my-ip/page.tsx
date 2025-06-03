import ShowApiSection from "@/components/whatisMyIp/showApiSection";
import CardSection from "@/components/whatisMyIp/cardSection";
import FAQAccordion from "@/components/FAQAccordion";
 import Section from "@/components/sections/Section";

 export default function WhatIsMyIpPage() {
      return <div>
        <ShowApiSection></ShowApiSection>
        <CardSection></CardSection>
         <Section heading="Frequently Asked Questions"
            // description="Got questions? We’ve got answers. If you need more help, reach out to our support team 24/7."
            >   
            <FAQAccordion></FAQAccordion>
        </Section>

      </div>
 }