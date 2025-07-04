"use client";

import { Button } from "@heroui/react";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import axios from "axios";
import { DELETE_USER_ACCOUNT_ROUTE } from "@/lib/constants";



export default function DeleteAccount() {
  const { data: session } = useSession();

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete your account permanently?");
    if (!confirmed) return;

    try {
      await axios.delete(DELETE_USER_ACCOUNT_ROUTE, {
        headers: {
          Authorization: `Bearer ${session?.user.access_token}`,
          Accept: "application/json",
        },
      });

      toast.success("Account deleted successfully.");
      await signOut({ redirect: true });
    } catch (error) {
      toast.error("Failed to delete account. Please try again.");
    }
  };

  return (
    <div className="w-full flex justify-start items-start py-6">
      <div className="w-full max-w-3xl space-y-8">
        <h3 className="text-lg font-semibold">Delete Account</h3>
        <p className="text-sm text-gray-500">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <Button
          variant="bordered"
          className="text-red-700 border-red-500"
          onClick={handleDelete}
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
}
