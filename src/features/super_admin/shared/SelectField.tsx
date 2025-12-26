import { forwardRef } from "react";

type Props = {
  label: string;
  options: string[];
  error?: string;
};

export const SelectField = forwardRef<
  HTMLSelectElement,
  Props & React.SelectHTMLAttributes<HTMLSelectElement>
>(({ label, options, error, ...rest }, ref) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <select
        ref={ref}
        {...rest}
        className={`
          mt-1 w-full border rounded-md px-3 py-2 text-sm
          focus:outline-none focus:ring-2
          ${error ? "border-red-400 focus:ring-red-400" : "focus:ring-orange-400"}
        `}
      >
        <option value="">Select</option>
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
});

SelectField.displayName = "SelectField";
