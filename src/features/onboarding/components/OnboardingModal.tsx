import { useEffect, useState, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ProgressBar } from "./ProgressBar";
import { StepWhoYouPay, StepPayrollStatus, StepIndustry, StepAccountant, StepBusinessEntity, StepHelp } from "../components/steps/index";
import { STEPS } from "../config";
import type { OnboardingData } from "../types";
import { RxCross2 } from "react-icons/rx";


export function OnboardingModal({ onClose }: { onClose: () => void }) {
  const methods = useForm<OnboardingData>({
    defaultValues: { workerTypes: [] },
  });

  const [step, setStep] = useState(0);

  useEffect(() => {
    console.log(STEPS.length)
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const onSubmit = (data: OnboardingData) => {
    console.log("FINAL DATA", data);
    onClose();
  };

  const StepComponent = useMemo(() => {
    return [
      StepWhoYouPay,
      StepPayrollStatus,
      StepIndustry,
      StepBusinessEntity,
      StepAccountant,
      StepHelp
    ][step];
  }, [step]);

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl rounded-xl p-6 relative">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center justify-centertext-xl font-bold mb-1">
            <img src="/edit.png" alt="edit" className="h-5" />
            <h2 className="text-xl">Create your company profile</h2>
          </div>
          <button
            onClick={onClose}
          >
            <RxCross2 />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Welcome to Boston Payroll. Let’s get you set up.
        </p>

        <hr className="border-gray-300 mb-4" />

        <ProgressBar percent={STEPS[step].percent} />

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <StepComponent />

            <div className="flex gap-3 mt-6">
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(s => s - 1)}
                  className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-lg"
                >
                  Back
                </button>
              )}

              {step === STEPS.length - 1 ? (
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 text-white py-2 rounded-lg"
                >
                  Submit
                </button>

              ) : (
                <button
                  type="button"
                  onClick={(e) => {e.preventDefault();  setStep(s => (s + 1)); }
                  }
                  className="flex-1 bg-orange-500 text-white py-2 rounded-lg"
                >
                  Continue
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
