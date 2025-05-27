import { GET_SUPPORT_TICKETS_ROUTE } from "@/lib/constants";
import { setSupportTickets } from "@/store/app.slice";
import { RootState } from "@/store/store";
import { SupportTicket } from "@/types";
import { addToast } from "@heroui/react";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserCookie } from "./use-cookies";

export const useSupportTickets = () => {
  const dispatch = useDispatch();
  const { user } = useUserCookie();
  const { supportTickets, isSupportTicketsLoadedOnce } = useSelector(
    (state: RootState) => state.app
  );

  const [isSupportTicketsLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadSupportTickets = async () => {
      try {
        if (isSupportTicketsLoadedOnce) return;
        const response = await axios
          .get<{ status: boolean; tickets: SupportTicket[] }>(
            GET_SUPPORT_TICKETS_ROUTE,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${user.access_token}`,
              },
            }
          );

        if (response.status === 201 || response.status === 200) {
          dispatch(setSupportTickets(response.data.tickets));
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Load Support Tickets";
        addToast({ color: "danger", description: errorMessage });
      } finally {
        setLoading(false);
      }
    };

    loadSupportTickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isSupportTicketsLoading,
    supportTickets,
  } as const;
};
