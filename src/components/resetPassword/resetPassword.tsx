
"use client";

import { useForm } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { RESET_PASSWORD_ROUTE } from "@/lib/constants";

type FormValues = {
  password: string;
  confirmPassword: string;
};

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<FormValues>();

  const [linkError, setLinkError] = useState("");

  useEffect(() => {
    if (!token || !email) {
      setLinkError("Invalid or expired reset link.");
    }
  }, [token, email]);

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post(
        RESET_PASSWORD_ROUTE,
        {
          token,
          email,
          password: data.password,
          password_confirmation: data.confirmPassword,
        },
        {
          headers: { Accept: "application/json" },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Password reset successful!");
        reset();
        setTimeout(() => router.push("/login"), 1500);
      } else {
        toast.error("Password reset failed.");
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || "Something went wrong.";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen py-5 flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Reset Password</h2>
          <p className="text-sm text-gray-500">
            Enter and confirm your new password below.
          </p>
        </div>

        {linkError ? (
          <p className="text-red-500 text-center text-sm">{linkError}</p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Password Field */}
            <div className="relative mb-4">
              <label>New Password</label>
              <Input
                labelPlacement="outside"
                placeholder="••••••••"
                variant="bordered"
                type="password"
                size="lg"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="relative mb-4">
              <label>Confirm Password</label>
              <Input
                labelPlacement="outside"
                placeholder="••••••••"
                variant="bordered"
                type="password"
                size="lg"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition"
            >
              {isSubmitting ? "Resetting..." : "Reset Password →"}
            </button>

            {/* Back to Login */}
            <button
              type="button"
              className="w-full text-black py-2 rounded-md hover:bg-cyan-100 transition"
              onClick={() => router.push("/login")}
            >
              Back to login ?
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
