import DeviceTable from "@/components/DeviceTable";
import UsageCharts from "./UsageCharts";



export default function ConnectedDevices() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Connected Devices</h2>
        <button className="text-blue-500 hover:underline text-sm font-medium">+ Add Device</button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <DeviceTable />
      </div>
      <UsageCharts />
    </div>
  );
}
