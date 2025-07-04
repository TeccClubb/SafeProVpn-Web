"use client";

import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { MailIcon } from "@/icons/mailIcon";
import PasswordICon from "@/icons/passwordIcon";
import { Input, Link as HeroLink } from "@heroui/react";
import { Loader2 } from "lucide-react";
import { DASHBOARD_PAGE_PATH, FORGOT_PASSWORD_PAGE_PATH, SIGNUP_PAGE_PATH } from "@/lib/pathnames";
import { toast } from "react-toastify";
import FreeTrialSection from "@/components/FreeTrialSection";
import Link from "next/link";
import GoogleSignInButton from "@/components/GoogleSignIn";
import AppleSignInButton from "@/components/AppleSignInButton";
import { deviceInfo } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import { SIGNIN_ROUTE } from "@/lib/constants";
import { User } from "next-auth";

type LoginFormData = {
  email: string;
  password: string;

};

const LoginForm: FC = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || DASHBOARD_PAGE_PATH;
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm<LoginFormData>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);
      setError("");
      const res = await axios
        .post<{
          status: boolean;
          message: string;
          access_token: string;
          user: User;
        }>(
          SIGNIN_ROUTE,
          {
            ...data,
            ...deviceInfo,
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((res) => res.data);

      if (res.status) {
        await signIn("credentials", {
          redirect: false,
          id: res.user.id,
          name: res.user.name,
          email: res.user.email,
          avatar: res.user.avatar,
          access_token: res.access_token,
        });
        router.replace(redirect);
        reset();
        toast.success(res.message);
      } else {
        toast.error(res.message);
        setError(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response?.data.errors[0]
          : error instanceof Error
          ? error.message
          : "Login Failed, Please try again later";
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div>


      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Welcome Back!</h2>
            <p className="text-sm text-gray-500">Login to your SafePro VPN account</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="relative mb-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                labelPlacement="outside"
                placeholder="you@example.com"
                startContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                variant="bordered"
                type="email"
                size="lg"
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
              />
            </div>

            {/* Password Field */}
            <div className="relative mb-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                labelPlacement="outside"
                placeholder="********"
                startContent={<PasswordICon />}
                variant="bordered"
                size="lg"
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me for 30 days
              </label>
              <HeroLink as={Link} href={FORGOT_PASSWORD_PAGE_PATH}  className="text-small">Forgot Password</HeroLink>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-sm text-red-600 font-medium text-center mb-2">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center gap-2 bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Logging in..." : "Login →"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex space-x-4 justify-center px-4 sm:px-6">
             

                <GoogleSignInButton></GoogleSignInButton>
             <AppleSignInButton></AppleSignInButton>

          </div>

          {/* Sign Up */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            {/* <a href="#" className="text-cyan-600 hover:underline"></a> */}
              <HeroLink as={Link} href={SIGNUP_PAGE_PATH}  className="text-small">Sign up for free</HeroLink>

          </p>
        </div>

      </div>
      <FreeTrialSection />
    </div>
  );
}

export default function() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
