import { useFormContext } from "react-hook-form";

export function StepAccountant() {
  const { register } = useFormContext();

  return (
    <>
      <h3 className="font-semibold text-gray-800">
        Do you have an accountant or bookkeeper?
      </h3>

      <div className="space-y-3 mt-4">
        {[
          "Yes, external accounting service",
          "Yes, in-house accountant",
          "No",
        ].map(opt => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              value={opt}
              {...register("accountant")}
              className="accent-orange-500"
            />
            <span className="text-sm">{opt}</span>
          </label>
        ))}
      </div>
    </>
  );
}
