import { useFormContext } from "react-hook-form";

const OPTIONS = [
    "Run Payroll",
    "Pay Contractors",
    "Protect my business with insurance",
    "Save for retirement with a Solo 401(k)",
    "Manage cash flow with confidence"
];

export function StepHelp() {
    const { register } = useFormContext();

    return (
        <>
            <h3 className="font-semibold text-gray-800">
                What help do you need?
            </h3>
            <p className="text-gray-400 text-xs">From payroll to benefits, we’ve got you covered. Select all that apply to include them in your package.</p>


            <div className="space-y-3 mt-4">
                {OPTIONS.map(opt => (
                    <label key={opt} className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            value={opt}
                            {...register("workerTypes")}
                            className="mt-1 accent-orange-500"
                        />
                        <span className="inline-block text-sm font-semibold text-gray-800">
                            {opt}
                        </span>
                    </label>
                ))}
            </div>
        </>
    );
}
