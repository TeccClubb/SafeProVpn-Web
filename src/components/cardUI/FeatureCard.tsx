import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  align?: "center" | "start";
  children?: React.ReactNode; // ✅ Allow slotting content like <Button />
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = "",
  align = "center",
  children,
}) => {
  const textAlignClass =
    align === "start" ? "text-left items-start" : "text-center items-center";

  return (
    <div
      className={`shadow-md rounded-2xl bg-gray-50 p-6 space-y-4 flex flex-col ${textAlignClass} ${className}`}
    >
      <div className="text-sky-500">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

      {/* ✅ Inject button or other elements here */}
      {children}
    </div>
  );
};

export default FeatureCard;
