"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import AppleICon from "@/icons/AppleIcon";
import GoogleIcon from "@/icons/GoogleIcon";
import { MailIcon } from "@/icons/mailIcon";
import PasswordICon from "@/icons/passwordIcon";
import { Button, Input } from "@heroui/react";
import { Loader2 } from "lucide-react";
import { SIGNIN_PAGE_PATH } from "@/lib/pathnames";
import { toast } from "react-toastify";
import { getOrCreateDeviceId } from "@/components/deviceId";
import getDeviceName from "@/components/getDeviceName";

type LoginFormData = {
  email: string;
  password: string;
 
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm<LoginFormData>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data: LoginFormData) => {
    setLoading  (true);
    setError("");
 const deviceId = getOrCreateDeviceId();
    const deviceName = getDeviceName(); 
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      device_id: deviceId, // Pass the device ID to the signIn function
          device_name: deviceName, // Pass the device name to the signIn function
    });

    setLoading(false);

    if (res?.ok) {
      reset();
      toast.success("Login Successful")
      router.push("/");

    } else {
      setError(res?.error || "Login failed. Please try again.");
    }
  };

  return (
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
            <a href="#" className="text-cyan-600 hover:underline" onClick={()=>router.push(SIGNIN_PAGE_PATH)}>Forgot password?</a>
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
            className={`w-full flex justify-center items-center gap-2 bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
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
          <Button variant="bordered" className="w-40">
            <GoogleIcon />
          </Button>
          <Button variant="bordered" className="w-40">
            <AppleICon />
          </Button>
        </div>

        {/* Sign Up */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-cyan-600 hover:underline">Sign up for free</a>
        </p>
      </div>
    </div>
  );
}
