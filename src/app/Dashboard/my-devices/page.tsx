import React, { FC } from "react";
import DeviceDownloadSection from "@/components/dashboard/mydevices/DeviceDownloadSection";
import DeviceTable from "@/components/DeviceTable";

const Billing: FC = () => (
  <>
    <DeviceTable />
    <DeviceDownloadSection />
  </>
);

export default Billing;
