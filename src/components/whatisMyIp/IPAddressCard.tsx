import { FC } from "react";
import { MapPin, Server } from "lucide-react";

interface IPAddressCardProps {
  ipAddress: string;
  location: string;
  isp: string;
}

const IPAddressCard: FC<IPAddressCardProps> = ({ ipAddress, location, isp }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-[800px] w-full mx-auto mb-10">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4">
        <div>
          <p className="text-sm text-gray-500">Your IP Address:</p>
          <p className="text-2xl sm:text-3xl text-cyan-500 font-semibold break-all">{ipAddress}</p>
        </div>

        <div className="flex flex-col text-sm text-gray-600 gap-2 items-start sm:items-end">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-cyan-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Server size={16} className="text-cyan-500" />
            <span>ISP: {isp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPAddressCard;
