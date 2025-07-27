"use client";

import React from "react";
import { useBillingAddress } from "@/hooks/useBillingAddress";
import AddOrUpdateBillingAddress from "@/components/AddOrUpdateBillingAddress";

export default function BillingAddress() {
  const { billingAddress, isBillingAddressLoading, error } = useBillingAddress();

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-cyan-900 text-xl">Billing Address</h2>
        <AddOrUpdateBillingAddress />
      </div>

      {isBillingAddressLoading ? (
        <div className="space-y-4 animate-pulse">
          <div className="h-5 w-32 bg-gray-200 rounded" />
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
          <div className="h-4 w-1/4 bg-gray-200 rounded" />
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : billingAddress ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-sm text-gray-700">
          <div><div className="font-medium">Name</div><div>{billingAddress.name}</div></div>
          <div><div className="font-medium">Address</div><div>{billingAddress.address}</div></div>
          <div><div className="font-medium">City, State, ZIP</div><div>{billingAddress.city}, {billingAddress.state} {billingAddress.postal_code}</div></div>
          <div><div className="font-medium">Phone</div><div>{billingAddress.phone}</div></div>
        </div>
      ) : (
        <p>No billing address found.</p>
      )}
    </div>
  );
}
