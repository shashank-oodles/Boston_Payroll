import React from 'react';

export default function BottomSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24 max-w-6xl mx-auto px-4">
      {/* Left Side - Content */}
      <div style={{ backgroundColor: '#FDEFE8' }} className="rounded-2xl p-6 lg:p-10">
        <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
          <span style={{ color: '#EC6016' }}>Powerful tools</span> to run payroll without complexity
        </h3>
        <p className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg">
          Our intuitive dashboard gives you complete control over your payroll operations with enterprise-grade features.
        </p>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EC6016' }}>
              <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs lg:text-sm font-medium">One-click payroll processing</span>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EC6016' }}>
              <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs lg:text-sm font-medium">Employee self-service portal</span>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EC6016' }}>
              <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs lg:text-sm font-medium">Integrated time tracking</span>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EC6016' }}>
              <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs lg:text-sm font-medium">Multi-state compliance</span>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EC6016' }}>
              <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs lg:text-sm font-medium">Automated tax calculations</span>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EC6016' }}>
              <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs lg:text-sm font-medium">Direct deposit & payment options</span>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative">
        <img
          src="/laptop.jpg"
          alt="Payroll Dashboard on Laptop with Coffee"
          className="w-full h-auto rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
}
