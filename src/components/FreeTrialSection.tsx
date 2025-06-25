export default function FreeTrialSection() {
  return (
    <div className="bg-blue-50 py-12 flex justify-center items-center text-center">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Not ready to commit?</h2>
        <p className="text-sm text-gray-600 mb-4">
          Try SafePro VPN risk-free with our 7-day free trial. No credit card required.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-md text-sm font-medium">
          Get Free Trial
        </button>
      </div>
    </div>
  );
}
