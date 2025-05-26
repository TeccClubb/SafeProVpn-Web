interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`shadow-md rounded-2xl p-6 text-center space-y-4 ${className}`}>
      <div className="flex justify-center text-sky-500">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
export default FeatureCard;