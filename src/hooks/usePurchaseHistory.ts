// hooks/usePurchaseHistory.ts
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { GET_PURCHASE_HISTORY_ROUTE } from "@/lib/constants";
import { useSession } from "next-auth/react";

export type Purchase = {
  id: string;
  start_date: string;
  amount_paid: string;
  status: string;
};

export function usePurchaseHistory(page: number = 1) {
  const { data: session, status: authStatus } = useSession();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (authStatus !== "authenticated") return;

    const fetchHistory = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(GET_PURCHASE_HISTORY_ROUTE(page), {
          headers: {
            Authorization: `Bearer ${session.user.access_token}`,
            Accept: "application/json",
          },
        });
        console.log(res.data);

        setPurchases(res.data?.purchases || []);
      } catch (error) {
        const message =
          error instanceof AxiosError
            ? error.response?.data?.message
            : "Failed to fetch purchase history";
        setError(message);
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [page, authStatus, session]);

  return { purchases, loading, error };
}
