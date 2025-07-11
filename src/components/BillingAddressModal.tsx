"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { BillingAddress } from "@/types";
import { useBillingAddress } from "@/hooks/useBillingAddress";

interface BillingAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BillingAddressModal({
  isOpen,
  onClose,
}: BillingAddressModalProps) {
  const { billingAddress, updateBillingAddress } = useBillingAddress();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BillingAddress>({
    values: {
      name: billingAddress ? billingAddress.name : "",
      address: billingAddress ? billingAddress.address : "",
      city: billingAddress ? billingAddress.city : "",
      country: billingAddress ? billingAddress.country : "",
      state: billingAddress ? billingAddress.state : "",
      postal_code: billingAddress ? billingAddress.postal_code : "",
    },
  });

  const onSubmit = async (data: BillingAddress) => {
      updateBillingAddress({address: data, onSuccess: onClose})
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white text-black p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Billing Address</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {["name", "address", "city", "country", "state", "postal_code"].map((field) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const rules: any = {
              required: `${field.replace("_", " ").toUpperCase()} is required`,
            };

            if (["name", "city", "state", "country"].includes(field)) {
              rules.pattern = {
                value: /^[A-Za-z\s]+$/,
                message: `${field.replace("_", " ")} must contain only letters`,
              };
            }

            if (field === "address") {
              rules.pattern = {
                value: /^[A-Za-z0-9\s,.-]+$/,
                message: "Address can only contain letters, numbers, commas, dots, and spaces",
              };
              rules.minLength = {
                value: 6,
                message: "Address must be at least 6 characters long",
              };
            }


            if (field === "postal_code") {
              rules.pattern = {
                value: /^[0-9]{4,10}$/,
                message: "Postal code must be 4–10 digits",
              };
            }

            return (
              <div key={field}>
                <input
                  type="text"
                  placeholder={field.replace("_", " ").toUpperCase()}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  {...register(field as keyof BillingAddress, rules)}
                />
                {errors[field as keyof BillingAddress] && (
                  <p className="text-red-600 text-sm">
                    {errors[field as keyof BillingAddress]?.message}
                  </p>
                )}
              </div>
            );
          })}


          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-700"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
