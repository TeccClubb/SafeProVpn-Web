
"use client";

import { useState, ChangeEvent } from "react";
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
}

export default function BillingAddressModal({
  isOpen,
  onClose,
  onAddressAdded,
}: BillingAddressModalProps) {
 const { data: session } = useSession();
  const token = (session?.user as any)?.access_token;
  const [form, setForm] = useState<BillingAddressForm>({
    name: "",

    address: "",
    city: "",
    country: "",
    
    state: "",
    postal_code: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/billing-address/store`,
        form,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,

            
          },
        }
      );
      console.log(response.data);

      onAddressAdded(response.data.user.billing_address);
      onClose();
      toast.success("Billing address added successfully!");
    } catch (err) {
      setError("Failed to add billing address. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white text-black p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Billing Address</h2>
        <div className="space-y-3">
          {["name", "address", "city","email" ,"country", "state", "postal_code"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.replace("_", " ").toUpperCase()}
              className="w-full mx-auto block px-4 py-2 border border-gray-300 rounded-md"
              value={(form as any)[field]}
              onChange={handleChange}
            />
          ))}
        </div>

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

        <div className="mt-4 flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded-full bg-gray-200 text-gray-700"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
