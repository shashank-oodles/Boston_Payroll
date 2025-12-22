import React from 'react';

export default function WhyChooseUs() {
  return (
    <div id="why-choose-us" className="mt-24 mb-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div>
          <div className='inline-block bg-orange-200 px-2 rounded-2xl'>
            <span className="text-orange-500 font-semibold text-sm">WHY CHOOSE US</span>
          </div>
          <h3 className="text-4xl font-bold mt-2 mb-6">
            The Perfect Fit for<br />Your Payroll Operations
          </h3>
          <p className="text-gray-600 mb-8">
            We simplify payroll by offering automated, compliant, and enterprise-grade solutions designed for modern businesses.
          </p>

          {/* Stats */}
          <div className="flex space-x-12 mb-8">
            <div>
              <div className="text-3xl font-bold mb-1">100k+</div>
              <div className="text-gray-600 text-sm">
                Businesses<br />Onboarded
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">78k+</div>
              <div className="text-gray-600 text-sm">
                Employees<br />Managed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-gray-600 text-sm">
                Average<br />Rating
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="space-y-8">
          {/* Secure & Reliable */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Secure & Reliable</h4>
              <p className="text-gray-600 text-sm">
                Enterprise-grade encryption, protected data storage, and strict access controls ensure every payroll run is safe and compliant.
              </p>
            </div>
          </div>

          {/* Transparent & Support-Driven */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Transparent & Support-Driven</h4>
              <p className="text-gray-600 text-sm">
                No hidden fees, no unclear charges, and no guesswork. Our support team and clear reporting keep you in control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
