interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  align?: "center" | "start"; // New optional prop
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = "",
  align = "center", // default to center to preserve existing usage
}) => {
  const textAlignClass = align === "start" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`shadow-md rounded-2xl p-6 space-y-4 flex flex-col ${textAlignClass} ${className}`}>
      <div className="text-sky-500">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
