



// components/BillingAddress.tsx
export default function BillingAddress() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-cyan-900 text-xl">Billing Address</h2>
        <button className="text-sm text-cyan-600 hover:underline">Edit</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-sm text-gray-700">
        <div>
          <div className="font-medium">Name</div>
          <div>John Smith</div>
        </div>
        <div>
          <div className="font-medium">Email</div>
          <div>john.smith@example.com</div>
        </div>
        <div>
          <div className="font-medium">Address</div>
          <div>123 Security Street</div>
        </div>
        <div>
          <div className="font-medium">City, State, ZIP</div>
          <div>Cyberville, CA 90210</div>
        </div>
        <div>
          <div className="font-medium">Country</div>
          <div>United States</div>
        </div>
        <div>
          <div className="font-medium">Phone</div>
          <div>+1 (555) 123-4567</div>
        </div>
      </div>
    </div>
  );
}
