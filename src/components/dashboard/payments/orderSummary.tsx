import React, { FC } from "react";
import { CheckCircle, Shield, Globe, Zap } from "lucide-react";

const OrderSummary: FC<{ plan: Plan }> = ({ plan }) => {
  const handleDiscount = () => {
    const originalPrice = parseFloat(plan.original_price ?? "0");
    const discountPrice = parseFloat(plan.discount_price ?? "0");
    if (originalPrice < 0 || discountPrice < 0) {
      return "Invalid Price";
    }
    const discountPercentage = (discountPrice / originalPrice) * 100;
    return discountPercentage.toFixed(2) + "%";
  };

  return (
    <div className="lg:max-w-sm w-full border border-divider rounded-xl shadow-md p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="bg-gray-100 p-4 rounded-lg border border-divider mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium">
            SafePro VPN <br></br> {plan.name}
          </p>
          <span className="text-sm font-semibold text-cyan-600">
            {plan.invoice_period} {plan.invoice_interval}
            <br />
            Plan
          </span>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-600" />
            Unlimited devices
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-600" />
            100+ server locations
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-600" />
            Ultra-fast connection
          </div>
        </div>
      </div>

      <div className="text-sm space-y-1 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-gray-800 font-medium">
            ${plan.original_price}
          </span>
        </div>
        <div className="flex justify-between ">
          <span>Discount ({handleDiscount()})</span>
          <span className="text-green-600">-${plan.discount_price}</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-lg font-semibold mb-1">
        <span>Total</span>
        <span>
          $
          {(
            parseFloat(plan.original_price ?? "0") -
            parseFloat(plan.discount_price ?? "0")
          ).toFixed(2)}
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-4">
        $
        {(
          parseFloat(plan.original_price ?? "0") -
          parseFloat(plan.discount_price ?? "0")
        ).toFixed(2)}
        /month
      </p>

      <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 py-2 px-3 rounded-lg text-sm font-medium">
        <CheckCircle className="w-4 h-4" />
        30-day money-back guarantee
      </div>
    </div>
  );
};

export default OrderSummary;
