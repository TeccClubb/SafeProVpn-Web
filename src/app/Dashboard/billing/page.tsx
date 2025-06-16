// app/billing/page.tsx or pages/billing.tsx (Next.js)
import BillingAddress from "@/components/dashboard/billing/BillingAddress";
import BillingHistory from "@/components/dashboard/billing/BillingHistory";
import BillingSection from "@/components/dashboard/billing/BillingSection";
import {Button} from "@heroui/react";

export default function BillingPage() {
    return (
        <div className="w-full ">
            <div className="mb-4">

                <BillingSection />
            </div>
            <BillingHistory />
            <BillingAddress />

            <div className="bg-cyan-50 p-4 rounded-lg mt-6 flex items-center justify-between">
                <div>
                    <h3 className="text-cyan-800 font-medium">Need help with billing?</h3>
                    <p className="text-sm text-gray-600">Our support team is available 24/7 to assist you with any billing questions.</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                    <Button color="primary">Connect Support</Button>
                </div>
            </div>
        </div>
    );
}
