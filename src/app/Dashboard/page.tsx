import React, { FC } from "react";
import ConnectedDevices from "@/components/dashboard/overView/ConnectedDevices";
import DataUsageChart from "@/components/dashboard/overView/DataUsageChart";
import OverviewCards from "@/components/dashboard/overView/overViewCards";
import QuickActionsAndNotifications from "@/components/dashboard/overView/quickAction";

const DashboardPage: FC = () => (
  <>
    <OverviewCards />
    <DataUsageChart />
    <ConnectedDevices />
    <QuickActionsAndNotifications />
  </>
);

export default DashboardPage;
