import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { LOGOUT_ROUTE } from "@/lib/constants";
import { addToast } from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { setIsLogoutModalOpen } from "@/store/app.slice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

  const openLogoutModal = (open: boolean) =>
    dispatch(setIsLogoutModalOpen(open));

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const res = await axios
        .post<{ status: boolean; message: string }>(
          LOGOUT_ROUTE,
          {},
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${session?.user.access_token}`,
            },
          }
        )
        .then((res) => res.data);

      await signOut({ redirect: false });
      router.refresh();
      openLogoutModal(false);

      if (res.status) {
        addToast({ color: "success", description: res.message });
      } else addToast({ color: "danger", description: res.message });
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to logout";
      addToast({ color: "danger", description: errorMessage });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return {
    isLoggingOut,
    handleLogout,
    openLogoutModal,
  } as const;
};
