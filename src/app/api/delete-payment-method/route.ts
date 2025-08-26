import { PADDLE_API_BASE_URL } from "@/lib/constants";
import axios, { AxiosError } from "axios";
import z, { ZodError } from "zod";

const schema = z.object({
  customerId: z
    .string({
      error: (issue) =>
        issue.input == null
          ? "customerId is required"
          : "customerId must be a string",
    })
    .min(1, "customerId is required"),
  paymentMethodId: z
    .string({
      error: (issue) =>
        issue.input == null
          ? "paymentMethodId is required"
          : "paymentMethodId must be a string",
    })
    .min(1, "paymentMethodId is required"),
});

export const DELETE = async (req: Request) => {
  try {
    const body = await req.json();
    const { customerId, paymentMethodId } = schema.parse(body);

    const res = await axios.delete(
      `${PADDLE_API_BASE_URL}/customers/${customerId}/payment-methods/${paymentMethodId}`
    );

    if (res.status === 204) {
      return Response.json(
        {
          success: true,
          message: "Payment method deleted successfully",
        },
        { status: res.status }
      );
    } else {
      return Response.json(
        {
          success: false,
          message: "Failed to delete payment method",
        },
        { status: res.status }
      );
    }
  } catch (error) {
    let status;
    let message;

    if (error instanceof ZodError) {
      status = 400;
      message = error.issues.reduce(
        (prev, curr) => `${prev ? `${prev}, ` : ""}${curr.message}`,
        ""
      );
    } else if (error instanceof AxiosError) {
      status = error.status;
      message = error.response
        ? error.response.data.error.detail
        : error.message;
    } else if (error instanceof Error) {
      status = 500;
      message = error.message;
    } else {
      status = 500;
      message = "Failed to delete payment method";
    }

    return Response.json({ success: false, message }, { status });
  }
};
