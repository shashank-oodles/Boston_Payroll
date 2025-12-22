import { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import type { OtpFormValues } from "../types/input";

const OTP_LENGTH = 6;

export function OtpForm({ onSubmit }: { onSubmit: (otp: string) => void }) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const {
    control,
    handleSubmit,
    watch,
  } = useForm<OtpFormValues>({
    defaultValues: {
      otp: Array(OTP_LENGTH).fill(""),
    },
  });

  const otpValues = watch("otp");

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const submitHandler = (data: OtpFormValues) => {
    const otp = data.otp.join("");
    if (otp.length === OTP_LENGTH) {
      onSubmit(otp);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full max-w-sm rounded-xl p-6 bg-white shadow-md"
    >
      <p className="text-sm text-gray-600 mb-4">
        Enter the OTP sent on your email address
      </p>

      <div className="flex justify-around lg:justify-between lg:gap-2 mb-6">
        {Array.from({ length: OTP_LENGTH }).map((_, index) => (
          <Controller
            key={index}
            name={`otp.${index}`}
            control={control}
            rules={{ required: true, pattern: /^\d$/ }}
            render={({ field }) => (
              <input
                {...field}
                ref={(el) => {
                  field.ref(el);
                  inputsRef.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                onChange={(e) => {
                  if (!/^\d?$/.test(e.target.value)) return;
                  field.onChange(e.target.value);
                  if (e.target.value && index < OTP_LENGTH - 1) {
                    inputsRef.current[index + 1]?.focus();
                  }
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="
                  w-8 h-8
                  lg:w-12 lg:h-12
                  text-center text-lg font-semibold
                  border rounded-md
                  focus:outline-none focus:ring-2 focus:ring-orange-500
                "
              />
            )}
          />
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
