"use client";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
// import { STRIPE_PUBLISHABLE_KEY } from "@/lib/utils/apiRoutes";
import { STRIPE_PUBLISHABLE_KEY } from "@/lib/constants";
import { Plan } from "@/types"; // adjust if needed
import { Input } from "@heroui/react";

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
}

const PaymentForm = ({ plan, className }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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

      const res = await axios.post("/api/create-payment-intent", {
        amount: +(plan.price ?? 0) * 100,
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

    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          
          <Input
            label="Name"
            placeholder="Full Name"
            labelPlacement="outside"
            variant="bordered"
            {...register("name", { required: "Name is required" })}
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
            className="mb-3  "
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </div>


        <div>
          {/* <label className="text-sm">Address</label>
          <input
            className="w-full p-2 border rounded mb-2"
            placeholder="123 Main St"
          /> */}
          <Input
            label="Address"
            placeholder="123 Main St"
            labelPlacement="outside"
            variant="bordered"
            {...register("address", { required: "Address is required" })}

            isInvalid={!!errors.address}
            errorMessage={errors.name?.message}
            className="mb-3  "
          />
          {errors.address && (
            <p className="text-red-600 text-sm">{errors.address.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <Input
          label="Address"
          placeholder="City"

          labelPlacement="outside"
          variant="bordered"
          {...register("city", { required: "City is required" })}


          isInvalid={!!errors.city}
          errorMessage={errors.city?.message}
          className="mb-3  "
        />
        {errors.city && (
          <p className="text-red-600 text-sm">{errors.city.message}</p>
        )}

        <Input
          label="State"
          placeholder="State"

          labelPlacement="outside"
          variant="bordered"
          {...register("state", { required: "State is required" })}



          isInvalid={!!errors.state}
          errorMessage={errors.state?.message}
          className="mb-3  "
        />
        {errors.city && (
          <p className="text-red-600 text-sm">{errors.city.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">

        <Input
          label="Postal Code"
          placeholder="Postal Code"


          labelPlacement="outside"
          variant="bordered"
          {...register("postal_code", { required: "Postal Code is required" })}




          isInvalid={!!errors.postal_code}
          errorMessage={errors.postal_code?.message}
          className="mb-3"
        />
        {errors.postal_code && (
          <p className="text-red-600 text-sm">{errors.postal_code.message}</p>
        )}

      </div>

      <PaymentElement className="mb-4" />

      {errorMessage && (
        <p className="text-red-600 mb-4 text-center">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={!stripe || !elements || loading}
        className="w-full bg-[#4DB8AC] text-white py-3 rounded-full disabled:opacity-50"
      >
        {loading ? "Processing..." : `Pay $${(+(plan.price ?? 0)).toFixed(2)}`}
      </button>
    </form>
  );
};

interface CheckoutFormProps {
  plan: Plan;
  className?: string;
}

const CheckoutForm = ({ plan, className }: CheckoutFormProps) => {
  if (!STRIPE_PUBLISHABLE_KEY) {
    throw new Error("STRIPE_PUBLISHABLE_KEY is not defined");
  }

  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  const options: StripeElementsOptions = {
    mode: "payment",
    amount: +(plan.price ?? 0) * 100,
    currency: "usd",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm plan={plan} className={className} />
    </Elements>
  );
};

export default CheckoutForm;
