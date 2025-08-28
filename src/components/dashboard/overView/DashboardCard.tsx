import React, { FC, ReactNode } from "react";
import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

const DashboardCard: FC<{
  label: string;
  icon: ReactNode;
  value: string;
  subtitle: string;
  isLoading?: boolean;
  children?: ReactNode;
}> = ({ isLoading, label, icon, value, subtitle, children }) => (
  <Card>
    <CardBody className="p-6">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-default-700 text-sm">{label}</h4>
        <div className="p-2 bg-default-100 rounded-full">{icon}</div>
      </div>

      {isLoading ? (
        <>
          <Skeleton className="h-8 w-20 rounded mt-2" />
          <Skeleton className="h-4 w-32 rounded mt-1" />
          {children && <Skeleton className="mt-4 h-4 w-full rounded" />}
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mt-2">{value}</h2>
          <p className="text-sm text-default-500 mt-1">{subtitle}</p>
          {children}
        </>
      )}
    </CardBody>
  </Card>
);

export default DashboardCard;
