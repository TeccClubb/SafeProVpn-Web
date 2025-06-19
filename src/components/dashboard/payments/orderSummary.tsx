'use client';
import { CheckCircle, Shield, Globe, Zap } from 'lucide-react';

export default function OrderSummary() {
  return (
    <div className="max-w-sm mx-auto border rounded-xl shadow-md p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="bg-gray-50 p-4 rounded-lg border mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium">SafePro VPN <br></br> Premium</p>
          <span className="text-sm font-semibold text-cyan-600">1-Year <br></br> Plan</span>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-600" />
            Unlimited devices
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-600" />
            100+ server locations
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-600" />
            Ultra-fast connection
          </div>
        </div>
      </div>

      <div className="text-sm space-y-1 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-gray-800 font-medium">$119.88</span>
        </div>
        <div className="flex justify-between ">
          <span>Discount (50%)</span>
          <span className='text-green-600'>-$59.94</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-lg font-semibold mb-1">
        <span>Total</span>
        <span>$59.94</span>
      </div>
      <p className="text-xs text-gray-500 mb-4">$4.99/month</p>

      <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 py-2 px-3 rounded-lg text-sm font-medium">
        <CheckCircle className="w-4 h-4" />
        30-day money-back guarantee
      </div>
    </div>
  );
}
