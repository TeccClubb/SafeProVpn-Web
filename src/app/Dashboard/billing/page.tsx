// app/billing/page.tsx or pages/billing.tsx (Next.js)

// import BillingAddress from "@/components/dashboard/billing/BillingAddress";
// import BillingHistory from "@/components/dashboard/billing/BillingHistory";
import BillingSection from "@/components/dashboard/billing/BillingSection";


export default function BillingPage() {
  return (
    <div className="w-full ">
        <div className="mb-4">

        <BillingSection />
        </div>
      {/* <BillingHistory/> */}
      {/* <BillingAddress/> */}

      <div className="bg-cyan-50 p-4 rounded-lg mt-6 flex items-center justify-between">
        <div>
          <h3 className="text-cyan-800 font-medium">Need help with billing?</h3>
          <p className="text-sm text-gray-600">Our support team is available 24/7 to assist you with any billing questions.</p>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm px-4 py-2 rounded-md">
          Contact Support
        </button>
      </div>
    </div>
  );
}
