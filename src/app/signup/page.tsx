"use client";

import { useForm } from "react-hook-form";
import AppleICon from "@/icons/AppleIcon";
import GoogleIcon from "@/icons/GoogleIcon";
import { MailIcon } from "@/icons/mailIcon";
import PasswordICon from "@/icons/passwordIcon";
import { Button, Input } from "@heroui/react";
type FormValues = {
  
  username: string;
  email: string;
  password: string;
};

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit =async (data: FormValues) =>  {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen py-5 flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Sing Up Now!</h2>
          <p className="text-sm text-gray-500">Create an account to continue</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Username */}
          <div className="relative mb-6">
            <label className="">Username</label>
            <Input
              labelPlacement="outside"
              placeholder="Username"
              startContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              variant="bordered"
              type="text"
              size="lg"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <label className="">Email</label>
            <Input
              labelPlacement="outside"
              placeholder="enter your email"
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
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <label className="">Password</label>
            <Input
              type="password"
              labelPlacement="outside"
              placeholder="********"
              startContent={<PasswordICon />}
              variant="bordered"
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

          {/* Remember Me */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me for 30 days
            </label>
            <a href="#" className="text-cyan-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition"
          >
            Sign Up →
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-2">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex space-x-4 justify-center px-4 sm:px-6">
          <Button variant="bordered" className="w-40">
            <GoogleIcon />
          </Button>
          <Button variant="bordered" className="w-40">
            <AppleICon />
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-cyan-600 hover:underline">
            Sign up for free
          </a>
        </p>
      </div>
    </div>
  );
}
