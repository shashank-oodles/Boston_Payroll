// import { forwardRef } from "react";
// import type { InputProps } from "../types/input";

// export const Input = forwardRef<HTMLInputElement, InputProps>(
//   (
//     {
//       label,
//       type = "text",
//       placeholder,
//       className = "",
//       error,
//       id,
//       ...rest
//     },
//     ref
//   ) => {
//     return (
//       <div className="flex flex-col gap-1">
//         {label && (
//           <label
//             htmlFor={id}
//             className="block text-sm font-medium text-gray-700"
//           >
//             {label}
//           </label>
//         )}

//         <input
//           ref={ref}
//           id={id}
//           type={type}
//           placeholder={placeholder}
//           className={`
//             w-full rounded-lg border px-3 py-2 text-sm
//             focus:outline-none focus:ring-2
//             ${error
//               ? "border-red-500 focus:ring-red-400"
//               : "border-gray-300 focus:ring-orange-400"
//             }
//             ${className}
//           `}
//           {...rest}
//         />

//         {error && (
//           <span className="text-xs text-red-500 mt-0.5">{error}</span>
//         )}
//       </div>
//     );
//   }
// );

// Input.displayName = "Input";

import { forwardRef } from "react";
import type { InputProps } from "../types/input";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      placeholder,
      className = "",
      error,
      id,
      rightElement,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        {/* INPUT WRAPPER — THIS IS THE FIX */}
        <div className="relative">
          <input
            ref={ref}
            id={id}
            type={type}
            placeholder={placeholder}
            className={`
              w-full rounded-lg border px-3 py-2 text-sm
              focus:outline-none focus:ring-2
              ${error
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-orange-400"
              }
              ${rightElement ? "pr-10" : ""}
              ${className}
            `}
            {...rest}
          />

          {rightElement && (
            <div
              className="
                absolute right-3 top-1/2
                -translate-y-1/2
                text-gray-500
              "
            >
              {rightElement}
            </div>
          )}
        </div>

        {error && (
          <span className="text-xs text-red-500 mt-0.5">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
