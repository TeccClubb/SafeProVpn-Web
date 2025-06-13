import DeviceTable from "@/components/DeviceTable";
import UsageCharts from "./UsageCharts";



export default function ConnectedDevices() {
  return (
    <div className="w-full">
      
      
        <DeviceTable />
     
      <div className="mt-6">

      <UsageCharts />
      </div>
    </div>
  );
}
