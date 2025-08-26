import { auth } from "@/auth";
import { paddle } from "@/lib/paddle";
import {
  ApiError,
  CustomerCollection,
  PaymentMethod,
  PaymentMethodCollection,
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
      .then((customers) => customers.length > 0 ? customers[0].id : null);

    const paymentMethods: PaymentMethod[] = [];

    if (!customerId) {
      return Response.json(
        {
          success: true,
          message: "No payment methods found for this account.",
          paymentMethods,
        },
        { status: 200 }
      );
    }

    const paymentMethodCollection: PaymentMethodCollection =
      paddle.paymentMethods.list(customerId);

    for await (const paymentMethod of paymentMethodCollection) {
      paymentMethods.push(paymentMethod);
    }

    return Response.json(
      {
        success: true,
        message: "Payment Methods fetched successfully",
        paymentMethods,
      },
      { status: 200 }
    );
  } catch (error) {
    const message =
      error instanceof ApiError || error instanceof Error
        ? error.message
        : "Failed to get saved paymentMethods";

    return Response.json({ success: false, message }, { status: 500 });
  }
};
