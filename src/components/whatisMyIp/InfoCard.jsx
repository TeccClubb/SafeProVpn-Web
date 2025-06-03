// components/InfoCard.jsx
import { ReactNode } from "react";

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex just items-start   w-full max-w-sm">
      <div className="text-cyan-500 text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-left ps-4 text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-left ps-4 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
