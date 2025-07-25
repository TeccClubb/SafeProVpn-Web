"use client";

import React, {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { PADDLE_CLIENT_TOKEN, PADDLE_ENVIRONMENT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  CheckoutLineItem,
  CheckoutOpenOptions,
  CheckoutUpdateOptions,
  Environments,
  initializePaddle,
  Paddle,
  PaddleEventData,
} from "@paddle/paddle-js";
import { useTheme } from "next-themes";

type Props = HTMLAttributes<HTMLDivElement> & {
  successUrl: string;
  eventCallback?: (event: PaddleEventData) => void;
};

type PaddleFormHandle = {
  openCheckout: (options: CheckoutOpenOptions) => void;
  updateCheckout: (options: CheckoutUpdateOptions) => void;
  updateItems: (options: CheckoutLineItem[]) => void;
  closeCheckout: () => void;
};

const PaddleCheckoutForm = forwardRef<PaddleFormHandle, Props>(
  ({ successUrl, className, eventCallback, ...props }, ref) => {
    const { theme } = useTheme();
    const [paddle, setPaddle] = useState<Paddle | undefined>();

    useEffect(() => {
      const initialize = async () => {
        if (!PADDLE_CLIENT_TOKEN) {
          throw Error(
            "NEXT_PUBLIC_PADDLE_CLIENT_TOKEN is missing in environment variables"
          );
        } else if (!PADDLE_ENVIRONMENT) {
          throw Error(
            "NEXT_PUBLIC_PADDLE_ENVIRONMENT is missing in environment variables"
          );
        } else {
          const paddle = await initializePaddle({
            token: PADDLE_CLIENT_TOKEN,
            environment: PADDLE_ENVIRONMENT as Environments,
            checkout: {
              settings: {
                variant: "one-page",
                displayMode: "inline",
                theme: theme === "dark" ? "dark" : "light",
                allowLogout: false,
                frameTarget: "paddle-checkout-form",
                frameInitialHeight: 450,
                frameStyle:
                  "width: 100%; background-color: transparent; border: none",
                successUrl,
              },
            },
            eventCallback: (event) => {
              if (eventCallback) eventCallback(event);
            },
          });

          setPaddle(paddle);
        }
      };

      initialize();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useImperativeHandle(ref, () => ({
      openCheckout: (options) => paddle?.Checkout.open(options),
      updateCheckout: (options) => paddle?.Checkout.updateCheckout(options),
      updateItems: (items) => paddle?.Checkout.updateItems(items),
      closeCheckout: () => paddle?.Checkout.close(),
    }));

    return <div className={cn("paddle-checkout-form", className)} {...props} />;
  }
);

PaddleCheckoutForm.displayName = "PaddleCheckoutForm";

export { type PaddleFormHandle };

export default PaddleCheckoutForm;
