"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import { CheckCircle, Circle } from "lucide-react";
import axios from "axios";
import { REST_API_BASE_URL } from "@/lib/constants";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function PasswordChangeForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange",
  });

  const new_password = watch("new_password") || "";

  const { data: session } = useSession();

  // Password validation rules
  const rules = [
    {
      label: "At least 8 characters long",
      valid: new_password.length >= 8,
    },
    {
      label: "Contains at least one uppercase letter",
      valid: /[A-Z]/.test(new_password),
    },
    {
      label: "Contains at least one number",
      valid: /\d/.test(new_password),
    },
    {
      label: "Contains at least one special character",
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(new_password),
    },
  ];

  const allRulesPassed = rules.every(rule => rule.valid);
  const confirmPassword = watch("confirmPassword");

  const onSubmit = async (data: any) => {
    // alert("Password changed successfully!");
    const token = (session?.user as any)?.access_token;
    console.log(data)
    const response = await axios.post(`${REST_API_BASE_URL}/user/update-password`, data, {
      headers: {
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })

    console.log(response.data)
    if(response.status){
      toast.success("Password Update Successfully")
    }else{
      toast.error("Update Failed Some Error Occer")
    }


  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex justify-start items-start py-6">
      <div className="w-full max-w-3xl space-y-8">
        <h2 className="text-xl font-semibold pb-4">Change Password</h2>

        <div className="space-y-10 text-gray-600">
          
          <Input
            label="Current Password"
            placeholder="Enter your current password"
            labelPlacement="outside"
            type="password"
            variant="bordered"
            {...register("old_password", { required: "Current password is required" })}
          />
          {errors.old_password?.message && (
            <p className="text-sm text-red-500">{String(errors.old_password.message)}</p>
          )}

          <Input
            label="New Password"
            placeholder="Enter new password"
            labelPlacement="outside"
            type="password"
            variant="bordered"
            {...register("new_password", {
              required: "New password is required",
              validate: {
                minLength: value => value.length >= 8 || "Must be at least 8 characters",
                hasUpper: value => /[A-Z]/.test(value) || "Must contain an uppercase letter",
                hasNumber: value => /\d/.test(value) || "Must contain a number",
                hasSpecial: value =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Must contain a special character",
              }
            })}
          />
          {errors.new_password && (
            <span className="text-sm text-red-500">{String(errors.new_password.message)}</span>
          )}

          <Input
            label="Confirm New Password"
            placeholder="Confirm new password"
            labelPlacement="outside"
            type="password"
            variant="bordered"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: value =>
                value === new_password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-500">{String(errors.confirmPassword.message)}</span>
          )}
        </div>

        {/* Password rules indicators */}
        <ul className="text-sm text-gray-700 pl-1 mt-2">
          {rules.map((rule, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {rule.valid ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <Circle className="w-4 h-4 text-gray-400" />
              )}
              {rule.label}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4">
          <Button type="submit" variant="solid" className="bg-cyan-400 text-white" disabled={!isValid || !allRulesPassed}>
            Update Password
          </Button>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </form>
  );
}
