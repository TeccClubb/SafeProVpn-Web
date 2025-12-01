"use client";

import React, { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Snippet } from "@heroui/react";
import { billingAddressSchema } from "@/lib/zod-schemas";
import { cn } from "@/lib/utils";
import axios, { AxiosError } from "axios";

const PayWithOxapay: FC<{
  plan: Plan;
  billingAddress?: BillingAddress;
  email: string;
}> = ({ plan, billingAddress, email }) => {
  const [paymentUrl, setPaymentUrl] = useState<string>();

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<z.infer<typeof billingAddressSchema>>({
    resolver: zodResolver(billingAddressSchema),
    values: {
      name: billingAddress ? billingAddress.name : "",
      address: billingAddress ? billingAddress.address : "",
      city: billingAddress ? billingAddress.city : "",
      state: billingAddress ? billingAddress.state : "",
      postal_code: billingAddress ? billingAddress.postal_code : "",
      phone: billingAddress ? billingAddress.phone : "",
    },
  });

  const submit: SubmitHandler<z.infer<typeof billingAddressSchema>> = async (
    values
  ) => {
    try {
      const res = await axios
        .post<{
          success: boolean;
          message: string;
          data: {
            track_id: string;
            payment_url: string;
            expired_at: number;
            date: number;
          };
        }>("/api/oxapay-generate-invoice", {
          amount: +plan.original_price,
          slug: plan.slug,
          description: JSON.stringify(values),
        })
        .then((res) => res.data);

      if (res.success) {
        setPaymentUrl(res.data.payment_url);
        window.open(res.data.payment_url, "_black");
      } else throw new Error("Failed to generate invoice url");
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error.response
            ? error.response.data?.message ||
              `ServerError: ${error.response.statusText}`
            : error.request
            ? "Network Error: Could not connect to the server."
            : `Request Error: ${error.message}`
          : error instanceof Error
          ? error.message
          : "Failed to generate invoice url";
      setError("root", { type: "manual", message });
    }
  };

  return paymentUrl ? (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">
        Payment URL Generated successfully
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <Snippet
          codeString={paymentUrl}
          tooltipProps={{ content: "Copy" }}
          color="success"
          variant="flat"
          className="flex-1"
          classNames={{
            pre: "[&>span:first-child]:hidden mx-w-48 overflow-hidden text-ellipsis whitespace-nowrap",
          }}
        >
          {paymentUrl}
        </Snippet>
        <Button as="a" target="_blank" href={paymentUrl} color="success">
          Open
        </Button>
      </div>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit(submit)}
      className={cn("w-full flex flex-col gap-4")}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              isRequired
              label="Name"
              placeholder="Enter your full name"
              type="text"
              errorMessage={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Input
          isReadOnly
          isRequired
          value={email}
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
        />

        <Controller
          name="city"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              isRequired
              label="City"
              placeholder="Enter City"
              type="text"
              errorMessage={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="state"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              isRequired
              label="State"
              placeholder="Enter State"
              type="text"
              errorMessage={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="postal_code"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              isRequired
              label="Postal Code"
              placeholder="Enter Postal Code"
              type="text"
              errorMessage={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              isRequired
              label="Phone"
              placeholder="Enter your phone"
              type="tel"
              errorMessage={fieldState.error?.message}
              {...field}
            />
          )}
        />
      </div>

      <Controller
        name="address"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            isRequired
            label="Address"
            placeholder="Enter your Street Address"
            type="text"
            errorMessage={fieldState.error?.message}
            {...field}
          />
        )}
      />

      {errors.root && <Alert color="danger">{errors.root.message}</Alert>}

      <Button
        type="submit"
        color="primary"
        variant="shadow"
        fullWidth
        radius="full"
        size="lg"
        disabled={isLoading}
        isLoading={isSubmitting}
      >
        Generate Payment Link
      </Button>
    </form>
  );
};

export default PayWithOxapay;
