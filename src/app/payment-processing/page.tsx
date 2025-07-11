"use client";

import React, { FC, Suspense, useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import axios, { AxiosError } from "axios";
import VerifiedIcon from "@/icons/VerifiedIcon";
import ErrorIcon from "@/icons/ErrorIcon";
import { useDispatch } from "react-redux";
import { setActivePlan } from "@/store/plans.slice";
import Link from "next/link";
import { toast } from "react-toastify";
import { ADD_PURCHASE_PLAN_ROUTE } from "@/lib/constants";
import { useSession } from "next-auth/react";
import { Spinner } from "@heroui/react";
import Section from "@/components/sections/Section";
import { DASHBOARD_PAGE_PATH } from "@/lib/pathnames";
import { PurchasedPlan } from "@/types";

const PaymentProcessingPage: FC = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const paymentIntent = searchParams.get("payment_intent");
  const planId = searchParams.get("planId");

  if (!paymentIntent || !planId) {
    notFound();
  }

  const [isPaymentSuccessful, setPaymentStatus] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "loading") return;

    const verifyPayment = async (planId: number, paymentIntent: string) => {
      try {
        const res = await axios
          .post("/api/verify-payment", { paymentIntent })
          .then((res) => res.data);

        if (res.paymentStatus) {
          const response = await axios
            .post<{
              status: boolean;
              message: string;
              purchase: PurchasedPlan;
            }>(
              ADD_PURCHASE_PLAN_ROUTE,
              {
                plan_id: planId,
                payment_intent: paymentIntent,
              },
              {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${session?.user.access_token}`,
                },
              }
            )
            .then((response) => response.data);

          if (response.status) {
            dispatch(setActivePlan(response.purchase));
            setPaymentStatus(true);
            setSuccessMessage(response.message);
            toast.success(response.message);
          }
        } else {
          setPaymentStatus(false);
        }
      } catch (error) {
        toast.error(
          error instanceof AxiosError && error.response
            ? error.response.data.message
            : "An error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    verifyPayment(+planId, paymentIntent);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStatus, session]);

  return (
    <Section isHeroSection className="gap-y-4">
      {isLoading && (
        <div className="flex flex-col items-center gap-y-6">
          <Spinner
            size="lg"
            variant="spinner"
            label="Processing Payment..."
            className="space-y-8"
            classNames={{
              wrapper: "size-32",
              label: "text-2xl font-semibold",
            }}
          />
        </div>
      )}

      {!isLoading && !isPaymentSuccessful && (
        <>
          <ErrorIcon className="size-48 text-red-500" />
          <h1 className="text-3xl font-semibold text-gray-900">
            Payment Failed
          </h1>

          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-3xl">
            <strong className="font-bold">Error: </strong>
            <span>
              Unfortunately, we were unable to process your payment. Please try
              again or contact support if the issue persists.
            </span>
          </div>
        </>
      )}

      {!isLoading && isPaymentSuccessful && (
        <>
          <VerifiedIcon className="size-48 text-green-500" />
          <h1 className="text-3xl font-semibold text-gray-900">
            Payment Successful
          </h1>
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded max-w-3xl">
              <strong className="font-bold">Success: </strong>
              <span>{successMessage}</span>
            </div>
          )}

          <Link
            href={DASHBOARD_PAGE_PATH}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Go to Dashboard
          </Link>
        </>
      )}
    </Section>
  );
};

const Page: FC = () => (
  <Suspense>
    <PaymentProcessingPage />
  </Suspense>
);

export default Page;
