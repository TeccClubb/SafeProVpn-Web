"use client";

import React, { FC } from "react";
import { Alert, Button } from "@heroui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { UPDATE_USER_INFO_ROUTE } from "@/lib/constants";
import { useSession } from "next-auth/react";
import Input from "../Input";
import z from "zod";
import { emailSchema, nameSchema } from "@/lib/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "next-auth";

const SettingsForm: FC = () => {
  const schema = z.object({
    name: nameSchema,
    email: emailSchema,
  });

  const { data: session, update: updateSession } = useSession();

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    values: {
      name: session ? session.user.name : "",
      email: session ? session.user.email : "",
    },
  });

  const update: SubmitHandler<z.infer<typeof schema>> = async (values) => {
    try {
      clearErrors("root");
      const res = await axios
        .post<{
          status: boolean;
          message: string;
          user: User;
        }>(UPDATE_USER_INFO_ROUTE, values, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.user.access_token}`,
          },
        })
        .then((res) => res.data);

      if (res.status) {
        setError("root", { type: "success", message: res.message });
        updateSession({ user: { ...session?.user, name: res.user.name } });
      } else {
        setError("root", { type: "error", message: res.message });
      }
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : error instanceof Error
          ? error.message
          : "Failed to update profile. Please try again.";
      setError("root", { type: "error", message });
    }
  };

  return (
    <div className="w-full flex justify-start items-start py-6">
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Profile Information</h2>

          <form
            onSubmit={handleSubmit(update)}
            className="flex flex-col gap-y-6"
          >
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  size="md"
                  errorMessage={fieldState.error?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  isReadOnly
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  size="md"
                  errorMessage={fieldState.error?.message}
                  {...field}
                />
              )}
            />

            {errors.root && (
              <Alert
                color={errors.root.type === "success" ? "success" : "danger"}
              >
                {errors.root.message}
              </Alert>
            )}

            <Button
              type="submit"
              color="primary"
              variant="solid"
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
