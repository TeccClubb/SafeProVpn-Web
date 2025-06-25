import StepIndicator from "./StepIndicator";
import PaymentOptions from "./PaymentOptions";

const PaymentStep = () => {
  const steps = ["Plan", "Payment", "Confirmation"];
  const currentStep = 1; // 0-based index: 0 = Plan, 1 = Payment

  return (
    <div className=" w-full mx-auto py-6 ">
      <StepIndicator steps={steps} currentStep={currentStep} />
      <PaymentOptions />
    </div>
  );
};

export default PaymentStep;
