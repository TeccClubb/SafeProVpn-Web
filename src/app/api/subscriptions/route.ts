import { auth } from "@/auth";
import { paddle } from "@/lib/paddle";
import {
  ApiError,
  CustomerCollection,
  Subscription,
} from "@paddle/paddle-node-sdk";

export const GET = async () => {
  try {
    const session = await auth();

    if (!session) {
      return Response.json(
        {
          success: false,
          message: "unauthorized request, you are not logged in",
        },
        { status: 401 }
      );
    }

    const customerCollection: CustomerCollection = paddle.customers.list({
      email: [session.user.email],
    });

    const customerId = await customerCollection
      .next()
      .then((customers) => (customers.length > 0 ? customers[0].id : null));

    const subscriptions: Subscription[] = [];

    if (!customerId) {
      return Response.json(
        {
          success: true,
          message: "No payment subscriptions found for this account.",
          subscriptions,
        },
        { status: 200 }
      );
    }

    const subscriptionCollection = paddle.subscriptions.list({
      customerId: [customerId],
    });

    for await (const subscription of subscriptionCollection) {
      if (
        subscription.status === "active" ||
        subscription.status === "trialing"
      ) {
        subscriptions.push(subscription);
      }
    }

    return Response.json(
      {
        success: true,
        message: "Subscriptions fetched successfully",
        subscriptions,
      },
      { status: 200 }
    );
  } catch (error) {
    const message =
      error instanceof ApiError
        ? error.detail
        : "Failed to fetch Subscriptions";
    return Response.json({ success: false, message }, { status: 500 });
  }
};
