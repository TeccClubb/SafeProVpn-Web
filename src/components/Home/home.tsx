import React, { FC } from "react";
import VPNPromo from "@/components/SafeProVpn-home/securePrivacy";
import WhyChooseSection from "@/components/SafeProVpn-home/WhyChooseSection";
import SecureEveryClickSection from "../SafeProVpn-home/secure-every-click";
import SafeProWork from "../SafeProVpn-home/safePro-work";
import AvailableDevices from "../SafeProVpn-home/available-devices";
import UsersRemarksSection from "../SafeProVpn-home/UsersRemarksSection";
import PricingSection from "../SafeProVpn-home/PricingSection";
import FrequentlyQuestion from "../SafeProVpn-home/frequently-question";

const HomePage: FC = () => (
  <>
    <VPNPromo />
    <WhyChooseSection />
    <SecureEveryClickSection />
    <SafeProWork />
    <AvailableDevices />
    <UsersRemarksSection />
    <PricingSection />
    <FrequentlyQuestion />
  </>
);

export default HomePage;
