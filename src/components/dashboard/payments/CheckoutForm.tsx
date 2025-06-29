"use client";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
// import { STRIPE_PUBLISHABLE_KEY } from "@/lib/utils/apiRoutes";
import { STRIPE_PUBLISHABLE_KEY } from "@/lib/constants";
import { Plan } from "@/types"; // adjust if needed
import { Input } from "@heroui/react";
import PaymentStep from "./PaymentStep";

type FormData = {
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
};


interface PaymentFormProps {
  plan: Plan;
  className?: string;
  billingAddress?: any;
}

const PaymentForm = ({ plan, billingAddress, className }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      address: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
    },
  });

  useEffect(() => {
    console.log("Resetting form with billing address:", billingAddress);
    if (billingAddress) {
      reset({
        name: billingAddress.name || "",
        address: billingAddress.address || "",
        city: billingAddress.city || "",
        state: billingAddress.state || "",
        postal_code: billingAddress.postal_code || "",
        country: billingAddress.country || "",
      });
    }
  }, [billingAddress, reset]);

  const onSubmit = async (values: FormData) => {
    console.log(values)
    setErrorMessage(undefined);

    if (!stripe || !elements) {
      setErrorMessage("Stripe has not loaded yet.");
      return;
    }

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setErrorMessage(submitError.message);
        return;
      }

      setLoading(true);
      const original = parseFloat(plan.original_price ?? "0");
      const discount = parseFloat(plan.discount_price ?? "0");
      const finalAmount = (original - discount) * 100;
      const res = await axios.post("/api/create-payment-intent", {
        amount: finalAmount,
      });
      const data = res.data;

      if (!data.clientSecret) {
        setErrorMessage("Client secret is missing from payment intent.");
        return;
      }

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret: data.clientSecret,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: values.name,
              address: {
                line1: values.address,
                city: values.city,
                state: values.state,
                postal_code: values.postal_code,
                country: values.country,
              },
            },
          },
          return_url: `${window.location.origin}/payment-processing?planId=${plan.id}`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PaymentStep></PaymentStep>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <div className="grid grid-cols-2 gap-4">
          <div>

            <Controller
              name="name"
              control={control}
              rules={{
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Enter a valid name (letters and spaces only)",
                },
              }}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Name"
                  placeholder="Full Name"
                  labelPlacement="outside"
                  variant="bordered"
                  isInvalid={!!fieldState.error}
                  errorMessage={fieldState.error?.message}
                  className="mb-3"
                />
              )}
            />

            {/* {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )} */}
          </div>


          <div>
            {/* <label className="text-sm">Address</label>
          <input
            className="w-full p-2 border rounded mb-2"
            placeholder="123 Main St"
          /> */}
          <Controller
  name="address"
  control={control}
  rules={{
    required: "Address is required",
    minLength: {
      value: 5,
      message: "Address must be at least 5 characters",
    },
  }}
  render={({ field, fieldState }) => (
    <Input
      {...field}
      label="Address"
      placeholder="123 Main St"
      labelPlacement="outside"
      variant="bordered"
      isInvalid={!!fieldState.error}
      errorMessage={fieldState.error?.message}
      className="mb-3"
    />
  )}
/>

            {/* {errors.address && (
            <p className="text-red-600 text-sm">{errors.address.message}</p>
          )} */}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <Controller
            name="city"
            control={control}
            rules={{
              required: "City is required",
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Enter a valid city name",
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="City"
                placeholder="City"
                labelPlacement="outside"
                variant="bordered"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                className="mb-3"
              />
            )}
          />


          <Controller
            name="state"
            control={control}
            rules={{
              required: "State is required",
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Enter a valid State name",
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="State"
                placeholder="State"
                labelPlacement="outside"
                variant="bordered"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                className="mb-3"
              />
            )}
          />

        </div>

        <div className="grid grid-cols-2 gap-4">



          <Controller
            name="postal_code"
            control={control}
            rules={{
              required: "Postal Code is required",
              pattern: {
                value: /^\d{5}(-\d{4})?$/,
                message: "Enter a valid postal code (e.g. 12345 or 12345-6789)",
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Postal Code"
                placeholder="Postal Code"
                labelPlacement="outside"
                variant="bordered"
                isInvalid={!!fieldState.error}
                errorMessage={fieldState.error?.message}
                className="mb-3"
              />
            )}
          />



        </div>

        <PaymentElement className="mb-4" />

        {errorMessage && (
          <p className="text-red-600 mb-4 text-center">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={!stripe || !elements || loading}
          className="w-full bg-[#4DB8AC] text-white py-3 rounded-full disabled:opacity-50">
          {loading
            ? "Processing..."
            : `Pay $${(
              (parseFloat(plan.original_price ?? "0") || 0) -
              (parseFloat(plan.discount_price ?? "0") || 0)
            ).toFixed(2)}`}

        </button>
      </form>
    </div>
  );
};
export interface BillingAddress {
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}
interface CheckoutFormProps {
  plan: Plan;
  className?: string;
  billingAddress?: BillingAddress;
}

const CheckoutForm = ({ plan, className, billingAddress }: CheckoutFormProps) => {
  if (!STRIPE_PUBLISHABLE_KEY) {
    throw new Error("STRIPE_PUBLISHABLE_KEY is not defined");
  }

  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  const options: StripeElementsOptions = {
    mode: "payment",
    amount: +(plan.original_price ?? 0) * 100,
    currency: "usd",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm plan={plan} billingAddress={billingAddress ? billingAddress : undefined} className={className} />
    </Elements>
  );
};

export default CheckoutForm;
