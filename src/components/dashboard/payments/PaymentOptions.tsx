"use client";

import { useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
} from "react-icons/fa";

const paymentOptions = [
  { name: "Visa", icon: <FaCcVisa className="text-blue-600 text-3xl" /> },
  { name: "MasterCard", icon: <FaCcMastercard className="text-red-600 text-3xl" /> },
  { name: "PayPal", icon: <FaCcPaypal className="text-blue-800 text-3xl" /> },
  { name: "Apple Pay", icon: <FaApplePay className="text-black text-3xl" /> },
];

const PaymentOptions = () => {
  const [selected, setSelected] = useState("Visa");

  return (
    <div>
      <h2 className="text-lg text-left font-semibold mb-4">Payment Information</h2>
      <div className="grid max-w-2xl grid-cols-2 sm:grid-cols-4 gap-4">
        {paymentOptions.map((option) => (
          <button
            key={option.name}
            onClick={() => setSelected(option.name)}
            className={`border rounded-lg  p-2 flex items-center justify-center transition-all duration-200 ${
              selected === option.name
                ? "border-cyan-500 shadow-md"
                : "border-gray-300 hover:border-cyan-300"
            }`}
          >
            {option.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
