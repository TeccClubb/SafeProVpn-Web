
import ConnectedDevices from "@/components/dashboard/overView/ConnectedDevices";
import DataUsageChart from "@/components/dashboard/overView/DataUsageChart";
import OverviewCards from "@/components/dashboard/overView/overViewCards";
import QuickActionsAndNotifications from "@/components/dashboard/overView/quickAction";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* <div className="bg-cyan-50 border border-cyan-200 text-cyan-800 px-4 py-4 rounded-md flex items-center justify-between">
        <p>Your Premium trial ends in 14 days. <br className="md:hidden" /> Upgrade now to keep all premium features.</p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md">Upgrade Now</button>
      </div> */}

      <OverviewCards />
      <DataUsageChart />
      <ConnectedDevices />
      <QuickActionsAndNotifications/>
    </div>
  );
}