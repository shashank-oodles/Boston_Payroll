import { useFormContext } from "react-hook-form";

const OPTIONS = [
  { head: "Myself", description: "(W-2)" },
  { head: "Employees in the US", description: "(People you employ directly who live in the US)" },
  { head: "Non-US employees", description: "(Employees who don’t live in the US)" },
  { head: "Contractors in the US", description: "(People or businesses you work with who are under contract for a specific project, who live in the US)" },
  { head: "Non-US contractors", description: "(Contractors who don’t live in the US)" },
  { head: "Vendors", description: "(Businesses or people that supply goods or ongoing services, often paid through invoices)" },
];

export function StepWhoYouPay() {
  const { register } = useFormContext();

  return (
    <>
      <h3 className="font-semibold text-gray-800">
        Who is your company planning to pay?
      </h3>
      <p className="text-gray-400 text-xs">Select all that apply. If your team changes, you’ll be able to add more worker types at any time.</p>


      <div className="space-y-3 mt-4">
        {OPTIONS.map(opt => (
          <label key={opt.head} className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              value={opt.head}
              {...register("workerTypes")}
              className="mt-1 accent-orange-500"
            />
            <span className="inline-block text-sm font-semibold text-gray-800">
              {opt.head} <span className="text-sm text-gray-400 font-normal">
                {opt.description}
              </span>
            </span>
          </label>
        ))}
      </div>
    </>
  );
}
