import React from 'react';

export default function Pricing() {
  return (
    <div id="pricing" className="mt-16 lg:mt-24 mb-16 px-4">
      <div className="text-center mb-8 lg:mb-12">
        <span className="text-orange-500 font-semibold text-sm">PRICING & PLAN</span>
        <h3 className="text-2xl lg:text-3xl font-bold mt-2 mb-4">Simple, transparent pricing</h3>
        <p className="text-gray-600">Choose the plan that fits your business. No hidden fees, cancel anytime.</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Simple Plan */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold mb-2">Simple</h4>
            <p className="text-gray-600 text-sm mb-4">For small businesses needing payroll, reports and basic support.</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-orange-500">$49</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <p className="text-sm text-gray-500">+ $10/mo per person</p>
          </div>
          <button className="w-full border border-orange-500 text-orange-500 py-3 rounded-lg mb-6 hover:bg-orange-50">
            Get Started
          </button>
          <div>
            <h5 className="font-semibold mb-3">Top Features:</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Unlimited payrolls per month</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Tax filings and payments</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Full Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Plus Plan - Most Popular */}
        <div className="bg-white rounded-2xl p-8 border-2 border-orange-500 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
          </div>
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold mb-2">Plus</h4>
            <p className="text-gray-600 text-sm mb-4">For businesses needing payroll, benefits, HR and time & attendance tracking.</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-orange-500">$80</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <p className="text-sm text-gray-500">+ $10/mo per person</p>
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg mb-6 hover:bg-orange-600">
            Get Started
          </button>
          <div>
            <h5 className="font-semibold mb-3">All Simple features, plus:</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Next-day pay</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Time tracking</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Basic PTO policies and holiday pay</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Multi-state payroll</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold mb-2">Pro</h4>
            <p className="text-gray-600 text-sm mb-4">For scaling businesses needing full-service payroll and benefits.</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-orange-500">$180</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <p className="text-sm text-gray-500">+ $27/mo per person</p>
          </div>
          <button className="w-full border border-orange-500 text-orange-500 py-3 rounded-lg mb-6 hover:bg-orange-50">
            Get Started
          </button>
          <div>
            <h5 className="font-semibold mb-3">Top Features:</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Dedicated service advisor</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Access to certified HR experts</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Performance management tools</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Advanced analytics and custom reporting</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Priority support & migration services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
