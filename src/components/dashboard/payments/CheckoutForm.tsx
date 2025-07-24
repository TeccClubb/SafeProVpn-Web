"use client";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Controller, useForm } from "react-hook-form";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { PADDLE_CLIENT_TOKEN, PADDLE_ENVIRONMENT, STRIPE_PUBLISHABLE_KEY } from "@/lib/constants";
import { BillingAddress } from "@/types";
import { Input } from "@heroui/react";
import { CheckoutEventsData, Environments, initializePaddle, type Paddle } from "@paddle/paddle-js";

const PaymentForm: FC<{ planId: number; priceId: string; amount: number; email: string; billingAddress: BillingAddress | null }> = ({
  planId,
  priceId,
  amount,
  email,
  billingAddress
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const [paddle, setPaddle] = useState<Paddle | null>(null);

  const {
    handleSubmit,
    control,
  } = useForm<BillingAddress>({
    values: {
      name: billingAddress ? billingAddress.name : "",
      address: billingAddress ? billingAddress.address : "",
      city: billingAddress ? billingAddress.city : "",
      country: billingAddress ? billingAddress.country : "",
      state: billingAddress ? billingAddress.state : "",
      postal_code: billingAddress ? billingAddress.postal_code : "",
    },
  });

  const handleCheckoutEvents = (event: CheckoutEventsData) => {
    console.log(event);
  };

  useEffect(() => {
    if (!paddle?.Initialized && PADDLE_CLIENT_TOKEN && PADDLE_ENVIRONMENT) {
      initializePaddle({
        token: PADDLE_CLIENT_TOKEN,
        environment: PADDLE_ENVIRONMENT as Environments,
        eventCallback: (event) => {
          if (event.data && event.name) {
            handleCheckoutEvents(event.data);
          }
        },
        checkout: {
          settings: {
            variant: "one-page",
            displayMode: "inline",
            theme: "dark",
            allowLogout: !email,
            frameTarget: "paddle-checkout-frame",
            frameInitialHeight: 450,
            frameStyle:
              "width: 100%; background-color: transparent; border: none",
            successUrl: "/checkout/success",
          },
        },
      }).then(async (paddle) => {
        if (paddle && priceId) {
          setPaddle(paddle);
          paddle.Checkout.open({
            ...(email && { customer: { email } }),
            items: [{ priceId: priceId, quantity: 1 }],
          });
        }
      });
    }
  }, [paddle?.Initialized, priceId, email]);

  const onSubmit = async (values: BillingAddress) => {
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
      const res = await axios.post("/api/create-payment-intent", { amount });
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
          return_url: `${window.location.origin}/payment-processing?planId=${planId}`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
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
        
        <div className="paddle-checkout-frame" />

        {errorMessage && (
          <p className="text-red-600 mb-4 text-center">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={!stripe || !elements || loading}
          className="w-full bg-[#4DB8AC] text-white py-3 rounded-full disabled:opacity-50"
        >
          {loading
            ? "Processing..."
            : `Pay $${(amount / 100).toFixed(2)}`}
        </button>
      </form>
  );
};

const CheckoutForm: FC<{
  planId: number;
  priceId: string;
  amount: number;
  email: string;
  billingAddress: BillingAddress | null;
}> = ({ planId, priceId, amount, email, billingAddress }) => {
  if (!STRIPE_PUBLISHABLE_KEY) {
    throw new Error("STRIPE_PUBLISHABLE_KEY is not defined");
  }

  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  const options: StripeElementsOptions = {
    mode: "payment",
    amount,
    currency: "usd",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm
        planId={planId}
        priceId={priceId}
        amount={amount}
        email={email}
        billingAddress={billingAddress}
      />
    </Elements>
  );
};

export default CheckoutForm;
