"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

interface BillingAddressForm {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  postal_code: string;
}

interface BillingAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddressAdded: (address: BillingAddressForm) => void;
  defaultValues?: BillingAddressForm; // for editing
}

export default function BillingAddressModal({
  isOpen,
  onClose,
  onAddressAdded,
  defaultValues,
}: BillingAddressModalProps) {
  const { data: session } = useSession();
  const token = (session?.user as any)?.access_token;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BillingAddressForm>({
    defaultValues: {
      name: "",
      address: "",
      city: "",
      country: "",
      state: "",
      postal_code: "",
    },
  });

  // Reset form with default values when modal opens or defaultValues change
  useEffect(() => {
    if (isOpen) {
      reset(defaultValues || {
        name: "",
        address: "",
        city: "",
        country: "",
        state: "",
        postal_code: "",
      });
    }
  }, [isOpen, defaultValues, reset]);


  const onSubmit = async (data: BillingAddressForm) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/billing-address/store`,
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onAddressAdded(response.data.user.billing_address);
      onClose();
      toast.success("Billing address added successfully!");
    } catch (err) {
      toast.error("Failed to add billing address. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white text-black p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Billing Address</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {["name", "address", "city", "country", "state", "postal_code"].map((field) => {
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
                  {...register(field as keyof BillingAddressForm, rules)}
                />
                {errors[field as keyof BillingAddressForm] && (
                  <p className="text-red-600 text-sm">
                    {errors[field as keyof BillingAddressForm]?.message}
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
