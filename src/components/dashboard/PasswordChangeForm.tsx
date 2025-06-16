"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import { CheckCircle, Circle } from "lucide-react";

export default function PasswordChangeForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange",
  });

  const newPassword = watch("newPassword") || "";

  // Password validation rules
  const rules = [
    {
      label: "At least 8 characters long",
      valid: newPassword.length >= 8,
    },
    {
      label: "Contains at least one uppercase letter",
      valid: /[A-Z]/.test(newPassword),
    },
    {
      label: "Contains at least one number",
      valid: /\d/.test(newPassword),
    },
    {
      label: "Contains at least one special character",
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    },
  ];

  const allRulesPassed = rules.every(rule => rule.valid);
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data: any) => {
    alert("Password changed successfully!");
    console.log(data);
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
            {...register("currentPassword", { required: "Current password is required" })}
          />
          {errors.currentPassword?.message && (
            <p className="text-sm text-red-500">{String(errors.currentPassword.message)}</p>
          )}

          <Input
            label="New Password"
            placeholder="Enter new password"
            labelPlacement="outside"
            type="password"
            variant="bordered"
            {...register("newPassword", {
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
          {errors.newPassword && (
            <span className="text-sm text-red-500">{String(errors.newPassword.message)}</span>
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
                value === newPassword || "Passwords do not match",
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
