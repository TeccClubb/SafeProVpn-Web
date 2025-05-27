import { useRouter } from "next/navigation";
import { useUserCookie } from "./use-cookies";
import axios, { AxiosError } from "axios";
import { LOGOUT_ROUTE } from "@/lib/constants";
import { addToast } from "@heroui/react";
import { SIGNIN_PAGE_PATH } from "@/lib/pathnames";

export const useLogout = () => {
  const router = useRouter();
  const { user, removeUserCookie } = useUserCookie();

  const handleLogout = async () => {
    try {
      const res = await axios
        .post<{ status: boolean; message: string }>(
          LOGOUT_ROUTE,
          {},
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (res.status) {
        addToast({ color: "success", description: res.message });
        // removeUserCookie();
        // router.refresh();
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
      router.replace(SIGNIN_PAGE_PATH);
      removeUserCookie();
    }
  };

  return { handleLogout } as const;
};
