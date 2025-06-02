import PricingTable from "@/components/pricingSections/PricingTable";
import TransparentPricing from "@/components/pricingSections/transparent-pricing";


export default function PricingPage() {
    return (
      <div>
        <TransparentPricing></TransparentPricing>
        <PricingTable></PricingTable>
        </div>
    );
    }