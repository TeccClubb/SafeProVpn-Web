import React from "react";

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  const progressWidth = `${(currentStep / (steps.length - 1)) * 100}%`;

  return (
    <div className="relative mb-12">
      {/* Full gray base line */}
      <div className="absolute top-4 left-0 w-full h-1 bg-gray-300 rounded-full z-0" />
      
      {/* Cyan progress line */}
      <div
        className="absolute top-4 left-0 h-1 bg-cyan-500 rounded-full z-10 transition-all duration-300"
        style={{ width: progressWidth }}
      />

      {/* Step circles and labels */}
      <div className="relative flex justify-between items-center z-20">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div
              className={`w-8     h-8 rounded-full   flex items-center justify-center text-white text-sm ${
                index < currentStep
                  ? "bg-teal-500"
                  : index === currentStep
                  ? "bg-cyan-500"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`mt-2 text-sm ${
                index <= currentStep ? "text-cyan-600" : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
