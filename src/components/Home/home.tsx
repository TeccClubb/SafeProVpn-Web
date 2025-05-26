import VPNPromo from "@/components/SafeProVpn-home/securePrivicy";
import WhyChooseSection from "@/components/SafeProVpn-home/WhyChooseSection";
export default function HomePage() {
  return (
    <div className="w-7xl items-center justify-center min-h-screen bg-gray-100">
     
      <VPNPromo></VPNPromo>
     <WhyChooseSection></WhyChooseSection>
    </div>
  );
}