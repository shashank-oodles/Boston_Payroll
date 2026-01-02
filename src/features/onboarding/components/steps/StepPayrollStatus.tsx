import { useFormContext } from "react-hook-form";

export function StepPayrollStatus() {
  const { register } = useFormContext();

  return (
    <>
      <h3 className="font-semibold text-gray-800 mb-1">
        Do you currently run payroll?
      </h3>
      <p className="text-gray-400 text-xs">Select all that apply. If your team changes, you’ll be able to add more worker types at any time.</p>


      <div className="space-y-3 mt-4">
        {[
          "No, new to running payroll",
          "Yes, using online payroll software",
          "Yes, manually",
        ].map(opt => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              value={opt}
              {...register("payrollStatus")}
              className="accent-orange-500"
            />
            <span className="text-sm">{opt}</span>
          </label>
        ))}
      </div>
    </>
  );
}
