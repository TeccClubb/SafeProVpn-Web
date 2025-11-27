import React, { FC } from "react";
import Subscriptions from "./Subscriptions";
import ActivePlan from "./ActivePlan";
import PaymentMethods from "./PaymentMethods";

const BillingSection: FC = () => (
  <div className="w-full  space-y-12 bg-white">
    <div>
      <h2 className=" font-bold text-black text-3xl">Billing Information</h2>
      <p className="text-gray-500 text-sm">
        Manage your subscription, payment methods, and billing history
      </p>
    </div>

    <ActivePlan />

    <Subscriptions />

    <PaymentMethods />
  </div>
);

export default BillingSection;
