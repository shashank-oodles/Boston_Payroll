import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 bg-gradient-to-b from-[#461d00] to-[#ffffff] lg:bg-none lg:bg-[#FFDBB8]">

      {/* MOBILE HEADER */}
      <div className="flex justify-center lg:flex-none lg:hidden px-6 py-16 text-white">
        <div className="flex font-semibold text-xl items-center gap-2">
          Boston Payroll
          <img src="/upscale_image.png" alt="" className="w-6 h-6" />
        </div>
      </div>

      {/* DESKTOP LEFT SECTION */}
      <div className="hidden lg:flex flex-col justify-between mt-4 p-6 mr-4 bg-white rounded-r-xl">
        <div>
          <div className="bg-[#e6e6e6] inline-block px-2 py-2 rounded-xl font-semibold text-[32px]">
            Boston Payroll{" "}
            <img className="inline-block" src="/upscale_image.png" alt="" />
          </div>

          <h1 className="mt-10 text-4xl font-bold leading-tight">
            <span className="text-orange-500">Smart</span> payroll
            <br />
            management for
            <br />
            modern businesses.
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Streamline your payroll processes with automated workflows,
            real-time analytics, and enterprise-grade security.
          </p>

          <div className="mt-6 h-1 w-32 bg-orange-500 rounded" />
        </div>

        <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
          <img src="/Signup.png" alt="Dashboard Preview" className="w-full" />
        </div>
      </div>

      {/* RIGHT / FORM SECTION */}
      <div className="flex lg:gap-none lg:items-center w-full rounded-t-3xl lg:rounded-none bg-white items-start lg:items-center justify-center px-4 py-6 mt-7 lg:mt-0 lg:p-6">
        {children}
      </div>
    </div>
  );
}
