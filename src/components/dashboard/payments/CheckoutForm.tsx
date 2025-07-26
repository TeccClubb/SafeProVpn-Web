"use client";

import React, { FC, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PaddleCheckoutForm, {
  type PaddleFormHandle,
} from "@/components/PaddleCheckoutForm";
import Input from "@/components/Input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardBody, Skeleton } from "@heroui/react";
import {
  citySchema,
  emailSchema,
  nameSchema,
  phoneSchema,
  postalCodeSchema,
  stateSchema,
  streetAddressSchema,
} from "@/lib/zod-schemas";
import { cn } from "@/lib/utils";
import { useBillingAddress } from "@/hooks/useBillingAddress";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";

const CheckoutForm: FC<{ priceId: string }> = ({ priceId }) => {
  const schema = z.object({
    name: nameSchema,
    email: emailSchema,
    address: streetAddressSchema,
    city: citySchema,
    state: stateSchema,
    postal_code: postalCodeSchema,
    phone: phoneSchema,
  });

  const { data: session, status: authStatus } = useSession();
  const { billingAddress, isBillingAddressLoading } = useBillingAddress();
  const paddleRef = useRef<PaddleFormHandle>(null);
  const [isSubmitted, setSubmitted] = useState<boolean>(false);

  if (authStatus === "unauthenticated") {
    notFound();
  }

  const { handleSubmit, control, watch } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    values: {
      name: billingAddress ? billingAddress.name : "",
      email: session ? session.user.email : "",
      address: billingAddress ? billingAddress.address : "",
      city: billingAddress ? billingAddress.city : "",
      state: billingAddress ? billingAddress.state : "",
      postal_code: billingAddress ? billingAddress.postal_code : "",
      phone: billingAddress ? billingAddress.phone : "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    setSubmitted(true);
    paddleRef.current?.openCheckout({
      customer: {
        email: values.email,
        address: {
          city: values.city,
          postalCode: values.postal_code,
          region: values.state,
          firstLine: values.address,
        },
      },
      customData: { name: values.name, phone: values.phone },
      items: [{ priceId, quantity: 1 }],
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {isBillingAddressLoading && authStatus === "loading" ? (
        <div className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-12 rounded-2xl" />
            ))}
          </div>
          <Skeleton className="h-12 rounded-2xl" />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn(
            "w-full flex flex-col gap-4",
            isSubmitted ? "hidden" : ""
          )}
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

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  isRequired
                  label="Email Address"
                  placeholder="Enter your email address"
                  type="email"
                  errorMessage={fieldState.error?.message}
                  {...field}
                />
              )}
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

          <Button
            type="submit"
            color="primary"
            variant="shadow"
            fullWidth
            radius="full"
            size="lg"
          >
            Next
          </Button>
        </form>
      )}

      <Card className={cn("p-4", isSubmitted ? "" : "hidden")}>
        <CardBody className="grid grid-cols-2 gap-4">
          {[
            { key: "Name", value: watch("name") },
            { key: "Email Address", value: watch("email") },
            { key: "Phone", value: watch("phone") },
            {
              key: "Address",
              value: `${watch("address")}, ${watch("city")}, Postal: ${watch(
                "postal_code"
              )}, ${watch("state")}`,
            },
          ].map(({ key, value }, index) => (
            <p key={index} className="text-default-500 text-medium">
              <span className="text-foreground font-semibold">{key}: </span>
              {value}
            </p>
          ))}
        </CardBody>
      </Card>
      <PaddleCheckoutForm ref={paddleRef} successUrl="/checkout/success" />
    </div>
  );
};

export default CheckoutForm;
