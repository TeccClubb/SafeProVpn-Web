import FAQAccordion from "@/components/FAQAccordion";
import ChooseDeviceSection from "@/components/guideSetUpComponents/chooseDevicesSection";
import VpnInstallation from "@/components/guideSetUpComponents/vpnInstalliation";
import Section from "@/components/sections/Section";

 


 export default function GuideSetupPage() { 
    return <div>
        <VpnInstallation></VpnInstallation>
        <ChooseDeviceSection></ChooseDeviceSection>
        <Section heading="Frequently Asked Questions"
            description="Got questions? We’ve got answers. If you need more help, reach out to our support team 24/7.">
            <FAQAccordion></FAQAccordion>
        </Section>
    </div>
 }