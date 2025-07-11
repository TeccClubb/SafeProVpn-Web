"use client";

import { Input, Button } from "@heroui/react";
import ProfileUploader from "./ProfileUploader";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { REST_API_BASE_URL } from "@/lib/constants";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type FormData = {
  name: string;
  email: string;
};

export default function SettingsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const { data: session, status: authStatus } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null); // ✅ for showing error

  useEffect(() => {
    const fetchUserData = async () => {
      if (authStatus !== "authenticated") return;

      try {
        const response = await axios.get(`${REST_API_BASE_URL}/user`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session.user.access_token}`,
          },
        });

        const user = response.data.user;

        reset({
          name: user.name || "",
          email: user.email || "",
        });

        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [session, reset, authStatus]);

  const onSubmit = async (data: FormData) => {
    if (authStatus !== "authenticated") return;

    setSaving(true);
    setUpdateError(null); // clear any previous errors

    try {
      const response = await axios.post(
        `${REST_API_BASE_URL}/user/update`,
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session.user.access_token}`,
          },
        }
      );

      console.log("Response:", response.data);
      toast.success("Profile updated successfully!");
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response?.data.message
          : "Failed to update profile. Please try again.";
      toast.error(errorMessage);
      setUpdateError(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-6">
        <p className="text-gray-500">Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-start items-start py-6">
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Profile Information</h2>

          <ProfileUploader />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Name"
              placeholder="Azil"
              labelPlacement="outside"
              variant="bordered"
              {...register("name", { required: "Name is required" })}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
              className="mb-10 pt-4"
            />

            <Input
              label="Email"
              placeholder="azil@gmail.com"
              labelPlacement="outside"
              type="email"
              variant="bordered"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />

            <Button
              type="submit"
              className="mt-2 bg-cyan-400 hover:bg-cyan-500 text-white"
              variant="solid"
              isDisabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </Button>

            {updateError && (
              <p className="text-red-500 text-sm mt-2">{updateError}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
