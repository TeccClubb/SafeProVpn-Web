"use client";

import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { addToast, Alert, Button } from "@heroui/react";
import { CheckCircle, Circle } from "lucide-react";
import axios, { AxiosError } from "axios";
import { UPDATE_USER_PASSWORD_ROUTE } from "@/lib/constants";
import { useSession } from "next-auth/react";
import z from "zod";
import { choosePasswordSchema, passwordSchema } from "@/lib/zod-schemas";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";

const PasswordChangeForm: FC = () => {
  const schema = z
    .object({
      old_password: passwordSchema,
      new_password: choosePasswordSchema,
      confirm_password: passwordSchema,
    })
    .refine(
      ({ new_password, confirm_password }) => new_password === confirm_password,
      { error: "Passwords do not match", path: ["confirm_password"] }
    );

  const { data: session } = useSession();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { old_password: "", new_password: "", confirm_password: "" },
  });

  const choosePasswordRules = choosePasswordSchema.safeParse("").error!.format()
    ._errors!;
  choosePasswordRules?.shift();

  const new_password = watch("new_password");
  const unfollowRules =
    choosePasswordSchema.safeParse(new_password).error?.format()._errors ?? [];

  const changePassword: SubmitHandler<z.infer<typeof schema>> = async ({
    old_password,
    new_password,
  }) => {
    try {
      const res = await axios
        .post<{ status: boolean; message: string }>(
          UPDATE_USER_PASSWORD_ROUTE,
          { old_password, new_password },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${session?.user.access_token}`,
            },
          }
        )
        .then((res) => res.data);

      reset();

      addToast({
        color: res.status ? "success" : "danger",
        description: res.message,
      });
      setError("root", {
        type: res.status ? "success" : "error",
        message: res.message,
      });
    } catch (error) {
      reset();
      const message =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : error instanceof Error
          ? error.message
          : "Failed to change password";

      addToast({ color: "danger", description: message });
      setError("root", { type: "error", message });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(changePassword)}
      className="w-full flex flex-col gap-y-6 max-w-3xl py-6"
    >
      <h2 className="text-xl font-semibold pb-4">Change Password</h2>

      <Controller
        name="old_password"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            isRequired
            label="Current Password"
            placeholder="Enter your current password"
            type="password"
            size="md"
            errorMessage={fieldState.error?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="new_password"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            isRequired
            label="New Password"
            placeholder="Enter new password"
            type="password"
            size="md"
            errorMessage={fieldState.error?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="confirm_password"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            isRequired
            label="Confirm New Password"
            placeholder="Confirm new password"
            type="password"
            size="md"
            errorMessage={fieldState.error?.message}
            {...field}
          />
        )}
      />

      <ul className="text-sm text-default-700 pl-1 mt-2">
        {choosePasswordRules.map((rule, idx) => {
          const isUnfollowRule = unfollowRules.includes(rule);
          return (
            <li
              key={idx}
              className={`flex items-center gap-2 ${
                isUnfollowRule ? "text-danger-500" : "text-success-500"
              }`}
            >
              {isUnfollowRule ? (
                <Circle className="w-4 h-4" />
              ) : (
                <CheckCircle className="w-4 h-4" />
              )}
              {rule}
            </li>
          );
        })}
      </ul>

      {errors.root && (
        <Alert color={errors.root.type === "success" ? "success" : "danger"}>
          {errors.root.message}
        </Alert>
      )}

      <Button type="submit" color="primary" isLoading={isSubmitting}>
        Update Password
      </Button>
    </form>
  );
};

export default PasswordChangeForm;
