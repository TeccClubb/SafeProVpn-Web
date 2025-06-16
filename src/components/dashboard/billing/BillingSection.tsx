
import { CheckCircleIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function BillingSection() {
  return (
    <div className="w-full  space-y-12 bg-white">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Billing Information</h2>
        <p className="text-gray-500 text-sm">
          Manage your subscription, payment methods, and billing history
        </p>
      </div>

      {/* Current Plan */}
      <div className="border rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h3 className="font-semibold text-gray-800">Premium Plan <span className="ml-2 text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full">Active</span></h3>
            <p className="text-sm text-gray-500 mt-1">Your plan renews on May 15, 2024</p>
          </div>
          <div className="flex gap-2">
            <button className="border border-cyan-600 text-cyan-600 text-sm font-medium rounded-md px-4 py-2 hover:bg-cyan-50 transition">
              Change Plan
            </button>
            <button className="border border-gray-300 text-gray-700 text-sm font-medium rounded-md px-4 py-2 hover:bg-gray-50 transition">
              Cancel Subscription
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 rounded-full px-3 py-1">
            <CheckCircleIcon className="h-4 w-4 text-cyan-500" />
            Unlimited Bandwidth
          </span>
          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 rounded-full px-3 py-1">
            <CheckCircleIcon className="h-4 w-4 text-cyan-500" />
            5 Devices
          </span>
          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 rounded-full px-3 py-1">
            <CheckCircleIcon className="h-4 w-4 text-cyan-500" />
            80+ Locations
          </span>
        </div>

        {/* Alert box */}
        <div className="bg-blue-50 text-blue-700 text-sm p-4 rounded-md flex justify-between items-center">
          <span>
            Save 40% by <a href="#" className="font-semibold underline">switching to an Annual Plan</a>!
          </span>
          <button className="text-blue-500 hover:text-blue-700 text-xl font-bold">&times;</button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="border rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">Payment Method</h3>
          <button className="text-sm text-cyan-600 font-medium hover:underline">+ Add New Card</button>
        </div>
        <div className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white font-semibold text-xs rounded px-2 py-1">VISA</div>
            <div>
              <p className="text-sm font-medium text-gray-800">Visa ending in 4242</p>
              <p className="text-xs text-gray-500">Expires 09/2025</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded hover:bg-gray-200">
              <PencilIcon className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 rounded hover:bg-gray-200">
              <TrashIcon className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
