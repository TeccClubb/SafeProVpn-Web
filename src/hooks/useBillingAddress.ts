// hooks/useBillingAddress.ts
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_BILLING_ADDRESS_ROUTE } from "@/lib/constants";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

export interface BillingAddress {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
 postal_code: string;
  country: string;
  phone: string;
}

export function useBillingAddress(token?: string | null) {
  const { data: session } = useSession();
  const [billingAddress, setBillingAddress] = useState<BillingAddress | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBillingAddress = async () => {
      try {
        const res = await axios.get(GET_BILLING_ADDRESS_ROUTE, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token? token : session?.user.access_token}`,
          },
        });

        const data = res.data;
        if (data.status) {
          setBillingAddress(data.user.billing_address);
        } else {
          setError("Billing address not found.");
        }
      } catch (err: any) {
        const msg = err.response?.data?.message || "Error fetching billing address";
        setError(msg);
        toast.error(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchBillingAddress();
  }, [token]);

  return { billingAddress, loading, error };
}
