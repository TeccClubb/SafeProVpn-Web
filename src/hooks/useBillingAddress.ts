import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import {
  GET_BILLING_ADDRESS_ROUTE,
  UPDATE_BILLING_ADDRESS_ROUTE,
} from "@/lib/constants";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useAppState } from "./use-app-state";
import { useDispatch } from "react-redux";
import { setBillingAddress } from "@/store/app.slice";
import { BillingAddress } from "@/types";

export function useBillingAddress(token?: string | null) {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { billingAddress, isBillingAddressLoadedOnce } = useAppState();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const updateBillingAddress = async ({
    address,
    onSuccess,
    onFailure,
  }: {
    address: BillingAddress;
    onSuccess?: (address: BillingAddress) => void;
    onFailure?: (message: string) => void;
  }) => {
    try {
      setLoading(true);
      const res = await axios
        .post<{
          status: boolean;
          message: string;
          user: { billing_address: BillingAddress };
        }>(UPDATE_BILLING_ADDRESS_ROUTE, address, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.user.access_token}`,
          },
        })
        .then((res) => res.data);

      if (res.status) {
        dispatch(setBillingAddress(res.user.billing_address));
        toast.success(res.message);
        if (onSuccess) onSuccess(res.user.billing_address);
      } else {
        toast.error(res.message);
        if (onFailure) onFailure(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response?.data.message
          : error instanceof Error
          ? error.message
          : "Failed to add billing address. Please try again.";
      toast.error(errorMessage);
      if (onFailure) onFailure(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchBillingAddress = async () => {
      try {
        if (isBillingAddressLoadedOnce) return;

        if (!token || !session) return;

        const res = await axios
          .get<{ status: boolean; user: { billing_address: BillingAddress } }>(
            GET_BILLING_ADDRESS_ROUTE,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${
                  token ? token : session?.user.access_token
                }`,
              },
            }
          )
          .then((res) => res.data);

        if (res.status) {
          dispatch(setBillingAddress(res.user.billing_address));
        } else {
          setError("Billing address not found.");
        }
      } catch (err: any) {
        const msg =
          err.response?.data?.message || "Error fetching billing address";
        setError(msg);
        toast.error(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchBillingAddress();
  }, [session]);

  return { billingAddress, loading, updateBillingAddress, error };
}
