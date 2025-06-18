"use client";

import { useForm } from "react-hook-form";
import { MailIcon } from "@/icons/mailIcon";
import { Button, Input } from "@heroui/react";

type FormValues = {
  email: string;
};

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Forgot password data:", data);
    // TODO: API call here
  };

  return (
    <div className="min-h-screen py-5 flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Forget Password</h2>
          <p className="text-sm text-gray-500">
            Please enter your email to receive a password reset link
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email Field */}
          <div className="relative mb-6">
            <label>Email</label>
            <Input
              labelPlacement="outside"
              placeholder="you@example.com"
              variant="bordered"
              type="email"
              size="lg"
              startContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition"
          >
            {isSubmitting ? "Sending..." : "Send Reset Link →"}
          </button>
        </form>

        {/* Back to Login */}
        <button
          type="button"
          className="w-full text-black py-2 rounded-md hover:bg-cyan-100 transition"
        >
          Back to login ?
        </button>
      </div>
    </div>
  );
}
