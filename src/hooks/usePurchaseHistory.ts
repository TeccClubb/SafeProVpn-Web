// hooks/usePurchaseHistory.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { GET_PURCHASE_HISTORY_ROUTE } from '@/lib/constants';

export type Purchase = {
  id: string;
  start_date: string;
  amount_paid: string;
  status: string;
};

export function usePurchaseHistory(token: string | null, page = 1) {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;

    const fetchHistory = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(GET_PURCHASE_HISTORY_ROUTE(page), {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        });
        console.log(res.data);

        setPurchases(res.data?.purchases || []);
      } catch (err: any) {
        const message = err.response?.data?.message || 'Failed to fetch purchase history';
        setError(message);
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [token, page]);

  return { purchases, loading, error };
}
