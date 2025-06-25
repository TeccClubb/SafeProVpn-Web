"use client";

import React, { FC, useEffect } from "react";
import VPNPromo from "@/components/SafeProVpn-home/securePrivacy";
import WhyChooseSection from "@/components/SafeProVpn-home/WhyChooseSection";
import SecureEveryClickSection from "@/components/SafeProVpn-home/secure-every-click";
import SafeProWork from "@/components/SafeProVpn-home/safePro-work";
import AvailableDevices from "@/components/SafeProVpn-home/available-devices";
import UsersRemarksSection from "@/components/SafeProVpn-home/UsersRemarksSection";
import PricingSection from "@/components/SafeProVpn-home/PricingSection";
import FrequentlyQuestion from "@/components/SafeProVpn-home/frequently-question";
import { useSession } from "next-auth/react";

const HomePage: FC = () => {
  const { data: session } = useSession();
useEffect(()=>{
console.log("Session data:", session);
},[session]);
  return (
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
};

export default HomePage;
