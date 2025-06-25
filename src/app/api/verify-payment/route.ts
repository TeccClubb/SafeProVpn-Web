import { NextResponse } from "next/server";
import Stripe from "stripe";
// import { STRIPE_SECRET_KEY } from "@/lib/utils/apiRoutes";
import { STRIPE_SECRET_KEY } from "@/lib/constants";

const stripe = new Stripe(STRIPE_SECRET_KEY);
export async function POST(request: Request) {
  try {
    const { paymentIntent } = await request.json();
    if (!paymentIntent) {
      return NextResponse.json(
        {
          success: false,
          message: "paymentIntent required",
        },
        { status: 400 }
      );
    }

    const verifyPaymentIntent = await stripe.paymentIntents.retrieve(
      paymentIntent
    );

    const paymentMethod = await stripe.paymentMethods.retrieve(
      verifyPaymentIntent.payment_method as string
    );

    return NextResponse.json(
      {
        success: true,
        paymentStatus: verifyPaymentIntent.status === "succeeded",
        billing_details: paymentMethod.billing_details,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to verify payment",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
