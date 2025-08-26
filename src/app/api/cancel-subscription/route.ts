import { paddle } from "@/lib/paddle";
import { ApiError } from "@paddle/paddle-node-sdk";

export const POST = async (req: Request) => {
  try {
    const { subscriptionId } = await req.json();

    const subscription = await paddle.subscriptions.cancel(subscriptionId, {
      effectiveFrom: "next_billing_period",
    });

    return Response.json({
      success: true,
      message: "Subscription cancelled successfully",
      subscription,
    });
  } catch (error) {
    const message =
      error instanceof ApiError
        ? error.detail
        : "Failed to cancel subscription";
    return Response.json({ success: false, message }, { status: 500 });
  }
};
