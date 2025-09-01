"use client";

import { useForm } from "react-hook-form";
import { Input } from "@heroui/react";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { FORGOT_PASSWORD_ROUTE } from "@/lib/constants";

import FreeTrialSection from "@/components/FreeTrialSection";
import {   SIGNIN_PAGE_PATH } from "@/lib/pathnames";
import { MailIcon } from "lucide-react";


type FormValues = {
  email: string;
};

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const router = useRouter();
//   const [error, setError] = useState("");

  const onSubmit = async (data: FormValues) => {
    try {
    //   setError("");
      const res = await axios.post(
        FORGOT_PASSWORD_ROUTE,
        { email: data.email },
        { headers: { Accept: "application/json" } }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success(res.data.message);
        console.log(res.data)
        reset();
      } else {
        toast.error(res.data.message);
        // setError(res.data.message);
      }
    } catch (error) {
      const message = error instanceof AxiosError ?  error?.response?.data?.message : "Something went wrong.";
      
      toast.error(message);
      toast.error("Failed to send reset link.");
    }
  };

  return (
    <div>

    
    <div className="min-h-screen py-5 flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Forget Password</h2>
          <p className="text-sm text-gray-500">
            Please enter your email to receive a password reset link
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition"
          >
            {isSubmitting ? "Sending..." : "Send Reset Link →"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => router.push(
            SIGNIN_PAGE_PATH
          )}
          className="w-full text-black py-2 rounded-md hover:bg-cyan-100 transition"
        >
          Back to login ?
        </button>
      </div>
    </div>
        <FreeTrialSection />

    </div>
  );
}
