import { removeSubscription, setSubscriptions } from "@/store/dashboard.slice";
import { RootState } from "@/store/store";
import { addToast } from "@heroui/react";
import { Subscription } from "@paddle/paddle-node-sdk";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useSubscriptions = () => {
  const dispatch = useDispatch();
  const { isSubscriptionsLoadedOnce, subscriptions } = useSelector(
    (state: RootState) => state.dashboard
  );
  const [isSubscriptionsLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        if (isSubscriptionsLoadedOnce) return;
        const res = await axios
          .get<{
            success: boolean;
            message: string;
            subscriptions: Subscription[];
          }>("/api/subscriptions")
          .then((res) => res.data);

        if (res.success) {
          dispatch(setSubscriptions(res.subscriptions));
        } else {
          addToast({ color: "danger", description: res.message });
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to load subscriptions";
        addToast({ color: "danger", description: errorMessage });
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cancelSubscription = async (subscriptionId: string) => {
    try {
      const res = await axios
        .post<{
          success: boolean;
          message: string;
          subscription: Subscription;
        }>("/api/cancel-subscription", {
          subscriptionId,
        })
        .then((res) => res.data);

      if (res.success) {
        dispatch(removeSubscription(res.subscription.id));
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
          : "Failed to cancel subscriptions";

      addToast({ color: "danger", description: message });
    }
  };

  return {
    isSubscriptionsLoading,
    subscriptions,
    cancelSubscription,
  } as const;
};
