import VPNPromo from "@/components/SafeProVpn-home/securePrivicy";
import WhyChooseSection from "@/components/SafeProVpn-home/WhyChooseSection";
import SecureEveryClickSection from "../SafeProVpn-home/secure-every-click";
import SafeProWork from "../SafeProVpn-home/safePro-work";
import AvailableDevices from "../SafeProVpn-home/avialable-devices";
import UsersRemarksSection from "../SafeProVpn-home/UsersRemarksSection";
import PricingSection from "../SafeProVpn-home/PricingSection";
import FrequentlyQuestion from "../SafeProVpn-home/frequently-question";
export default function HomePage() {

  

  return (
    <div className="w-7xl items-center justify-center min-h-screen bg-gray-100">
     
      <VPNPromo></VPNPromo>
     <WhyChooseSection></WhyChooseSection>
     <SecureEveryClickSection></SecureEveryClickSection>
     <SafeProWork></SafeProWork>
     <AvailableDevices></AvailableDevices>
     <UsersRemarksSection></UsersRemarksSection>
     <PricingSection></PricingSection>
     <FrequentlyQuestion></FrequentlyQuestion>
    </div>
  );
}