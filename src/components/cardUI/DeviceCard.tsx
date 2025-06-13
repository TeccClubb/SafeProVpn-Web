
import React from "react";

interface DeviceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  version: string;
  buttonText: string;
  storeIcon?: React.ReactNode;
}

const DeviceCard: React.FC<DeviceCardProps> = ({
  icon,
  title,
  subtitle,
  version,
  buttonText,
  storeIcon,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center space-y-4">
      <div className="w-14 h-14 flex items-center justify-center bg-sky-100 rounded-full text-sky-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
      <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md">
        {buttonText}
      </button>
      <p className="text-xs text-gray-400">{version}</p>
      {storeIcon && <div className="mt-1 text-sm text-gray-500">{storeIcon}</div>}
    </div>
  );
};

export default DeviceCard;
