"use client";

import React, { FC, useMemo } from "react";
import { Plan } from "@/types";
import { CheckCircle, Shield, Globe, Zap } from "lucide-react";
import { usePlans } from "@/hooks/usePlans";
import { notFound } from "next/navigation";

const OrderSummary: FC<{ planId: number }> = ({ planId }) => {
  const { plans, isPlansLoading } = usePlans();

  const plan = useMemo(
    () => plans.find((plan) => plan.id === planId),
    [planId, plans]
  );

  if (!isPlansLoading && !plan) {
    notFound();
  }

  const handleDiscount = (plan: Plan) => {
    const originalPrice = parseFloat(plan.original_price ?? "0");
    const discountPrice = parseFloat(plan.discount_price ?? "0");
    if (originalPrice < 0 || discountPrice < 0) {
      return "Invalid Price";
    }
    const discountPercentage = (discountPrice / originalPrice) * 100;
    return discountPercentage.toFixed(2) + "%";
  };

  return (
    <div className="lg:max-w-sm w-full border rounded-xl shadow-md p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      {isPlansLoading && (
        <div className="animate-pulse mb-4">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="bg-gray-100 p-4 rounded-lg border mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
          <div className="space-y-1 mb-4">
            <div className="flex justify-between">
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/6"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/6"></div>
            </div>
          </div>
          <div className="flex justify-between items-center text-lg font-semibold mb-1">
            <div className="h-4 bg-gray-200 rounded w-1/6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/6"></div>
          </div>
          <div className="h-3 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="flex items-center justify-center gap-2 bg-green-50 py-2 px-3 rounded-lg">
            <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      )}

      {plan && (
        <>
          <div className="bg-gray-50 p-4 rounded-lg border mb-4">
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
              <span>Discount ({handleDiscount(plan)})</span>
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
        </>
      )}

      <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 py-2 px-3 rounded-lg text-sm font-medium">
        <CheckCircle className="w-4 h-4" />
        30-day money-back guarantee
      </div>
    </div>
  );
};

export default OrderSummary;
