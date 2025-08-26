import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPaymentMethods,
  removePaymentMethod,
} from "@/store/dashboard.slice";
import { RootState } from "@/store/store";
import axios, { AxiosError } from "axios";
import { addToast } from "@heroui/react";
import { PaymentMethod } from "@paddle/paddle-node-sdk";

export const usePaymentMethods = () => {
  const dispatch = useDispatch();
  const { paymentMethods, isPaymentMethodsLoadedOnce } = useSelector(
    (state: RootState) => state.dashboard
  );
  const [isPaymentMethodsLoading, setLoading] = useState<boolean>(true);

  const fetchPaymentMethods = useCallback(async () => {
    try {
      if (isPaymentMethodsLoadedOnce) return;
      setLoading(true);
      const res = await axios
        .get<{
          success: boolean;
          message: string;
          paymentMethods: PaymentMethod[];
        }>("/api/payment-methods")
        .then((res) => res.data);
      if (res.success) {
        dispatch(setPaymentMethods(res.paymentMethods));
      } else {
        addToast({ color: "danger", description: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to load payment methods";
      addToast({ color: "danger", description: errorMessage });
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchPaymentMethods();
  }, [fetchPaymentMethods]);

  const deletePaymentMethod = async (values: {
    customerId: string;
    paymentMethodId: string;
  }) => {
    try {
      const res = await axios
        .delete<{ success: boolean; message: string }>(
          "/api/delete-payment-method",
          { data: values }
        )
        .then((res) => res.data);

      if (res.success) {
        dispatch(removePaymentMethod(values.paymentMethodId));
        addToast({ color: "success", description: res.message });
      } else {
        addToast({ color: "danger", description: res.message });
      }
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : error instanceof Error
          ? error.message
          : "Failed to delete payment method";
      addToast({ color: "danger", description: message });
    }
  };

  return {
    isPaymentMethodsLoading,
    paymentMethods,
    deletePaymentMethod,
  } as const;
};
