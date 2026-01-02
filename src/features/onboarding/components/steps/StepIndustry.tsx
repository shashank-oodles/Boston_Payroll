import { useFormContext } from "react-hook-form";

export function StepIndustry() {
  const { register } = useFormContext();

  return (
    <>
      <h3 className="font-semibold text-gray-800 mb-3">
        What industry are you in?
      </h3>

      <input
        {...register("industry")}
        placeholder="e.g Restaurant, Consulting, Retail..."
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
      />
    </>
  );
}
