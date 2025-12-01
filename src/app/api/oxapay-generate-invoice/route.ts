import { auth } from "@/auth";
import oxapayClient from "@/lib/oxapayClient";
import z, { ZodError } from "zod";

export const POST = async (req: Request) => {
  try {
    const schema = z.object({
      amount: z
        .number({
          error: (issue) =>
            issue.input == null
              ? "amount is required"
              : "amount must be a number",
        })
        .positive("positive number expected"),
      slug: z
        .string({
          error: (issue) =>
            issue.input == null ? "slug is required" : "slug must be a string",
        })
        .trim()
        .min(1, "slug is required"),
      description: z.string().optional(),
    });

    const body = await req.json();

    const { amount, slug, description } = schema.parse(body);

    const session = await auth();

    if (!session) {
      return Response.json(
        { success: false, message: "You are not logged in" },
        { status: 401 }
      );
    }

    const origin = req.headers.get("origin");

    const { message, data } = await oxapayClient
      .post("/payment/invoice", {
        amount,
        description,
        currency: "USD",
        to_currency: "USDT",
        auto_withdrawal: false,
        mixed_payment: true,
        return_url: `${origin}/checkout/success`,
        email: session.user.email,
        order_id: slug,
        thanks_message: `Thank you for purchase ${slug}.`,
        sandbox: true,
      })
      .then((res) => res.data);

    return Response.json({ success: true, message, data }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof ZodError
        ? error.issues.reduce(
            (prev, curr) => `${prev ? `${prev}, ` : ""}${curr.message}`,
            ""
          )
        : error instanceof Error
        ? error.message
        : "Failed to generate invoice";

    const status =
      error instanceof ZodError
        ? 400
        : error instanceof Error
        ? (error.cause as { status?: number })?.status || 500
        : 500;

    return Response.json({ success: false, message }, { status });
  }
};
