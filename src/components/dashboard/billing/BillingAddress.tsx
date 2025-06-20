"use client";

import { useSession } from "next-auth/react";
import { useBillingAddress } from "@/hooks/useBillingAddress";

export default function BillingAddress() {
  const { data: session } = useSession();
  const token = (session?.user as any)?.access_token;
  const { billingAddress, loading, error } = useBillingAddress(token);

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-cyan-900 text-xl">Billing Address</h2>
        <button className="text-sm text-cyan-600 hover:underline">Edit</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : billingAddress ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-sm text-gray-700">
          <div>
            <div className="font-medium">Name</div>
            <div>{billingAddress.name}</div>
          </div>
          <div>
            <div className="font-medium">Email</div>
            <div>{billingAddress.email}</div>
          </div>
          <div>
            <div className="font-medium">Address</div>
            <div>{billingAddress.address}</div>
          </div>
          <div>
            <div className="font-medium">City, State, ZIP</div>
            <div>
              {billingAddress.city}, {billingAddress.state} {billingAddress.zip}
            </div>
          </div>
          <div>
            <div className="font-medium">Country</div>
            <div>{billingAddress.country}</div>
          </div>
          <div>
            <div className="font-medium">Phone</div>
            <div>{billingAddress.phone}</div>
          </div>
        </div>
      ) : (
        <p>No billing address available.</p>
      )}
    </div>
  );
}
