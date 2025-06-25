import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { LOGOUT_ROUTE } from "@/lib/constants";
import { addToast } from "@heroui/react";
import { SIGNIN_PAGE_PATH } from "@/lib/pathnames";
import { signOut, useSession } from "next-auth/react";

export const useLogout = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogout = async () => {
    try {
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
    }
  };

  return { handleLogout } as const;
};
