import React, { FC } from "react";
import { Button } from "@heroui/button";
import { Link as HeroLink } from "@heroui/link";
import Link from "next/link";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";
import { CheckCircleIcon, TagIcon } from "@heroicons/react/24/solid";
import { Chip } from "@heroui/chip";
import axios, { AxiosError } from "axios";
import { GET_PURCHASE_ACTIVE_PLAN_ROUTE } from "@/lib/constants";
import { auth } from "@/auth";
import { Alert } from "@heroui/alert";

const ActivePlan: FC = async () => {
  const session = await auth();

  if (!session) {
    return <Alert>You are not logged in</Alert>;
  }

  const {
    status,
    message,
    plan: activePlan,
  } = await axios
    .get<{ status: boolean; message?: string; plan?: PurchasedPlan }>(
      GET_PURCHASE_ACTIVE_PLAN_ROUTE,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${session.user.access_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => ({
      status: false,
      message:
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to Load Active Plan",
      plan: undefined,
    }));

  return (
    <div className="border border-divider rounded-xl p-6 space-y-4">
      {!status && (
        <div className="text-center text-danger-500 py-8">
          {message}{" "}
          <HeroLink as={Link} href={PRICING_PAGE_PATH}>
            Upgrade Now
          </HeroLink>
        </div>
      )}

      {status && !activePlan && (
        <div className="text-center text-default-500 py-8">
          No Active Plan founded.{" "}
          <HeroLink as={Link} href={PRICING_PAGE_PATH}>
            Upgrade Now
          </HeroLink>
        </div>
      )}

      {activePlan && (
        <>
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h3 className="font-semibold">
                Current Plan ({activePlan.plan.name})
                <span className="ml-2 text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </h3>
              <p className="text-sm text-default-500 mt-1">
                Your plan ends on{" "}
                {new Date(activePlan.end_date).toLocaleString()}
              </p>
            </div>
            <Button as={Link} href={PRICING_PAGE_PATH} color="primary">
              Upgrade Plan
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-default-600">
            {activePlan.plan.description.split(",").map((feature, index) => (
              <Chip
                key={index}
                color="primary"
                variant="flat"
                classNames={{ content: "flex gap-1 items-center" }}
              >
                <CheckCircleIcon className="size-4 text-primary" />{" "}
                {feature.trim()}
              </Chip>
            ))}
          </div>

          {/* Alert box */}
          <div className="bg-blue-50 text-gray-700 text-sm p-4 rounded-md flex justify-between items-center">
            <div className="flex items-center gap-2">
              <TagIcon className="size-5 text-cyan-500" />
              <span>
                Save 40% by{" "}
                <HeroLink
                  as={Link}
                  href={PRICING_PAGE_PATH}
                  className="text-cyan-500 font-medium"
                >
                  Switching to an Annual Plan!
                </HeroLink>
              </span>
            </div>
            <button className="text-blue-500 hover:text-blue-700 text-xl font-bold">
              &times;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivePlan;
