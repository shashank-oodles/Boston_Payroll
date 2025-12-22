import React from 'react';

export default function Hero() {
  return (
    <div className="text-center max-w-6xl mx-auto mb-16">
      <div className="text-center mb-6 sm:mb-8">
        <span className="inline-flex items-center px-4 py-2 text-sm font-medium border border-black text-black rounded-full">
          <img src="/c235f9c748cf8b85f117d108b2cd5102a1a4213c.png" alt="Sparkle" className="w-4 h-4 mr-2" />
          Serving businesses across the U.S.
        </span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        A <span className="relative inline-block">
          <span style={{ color: '#EC6016', border: '2px solid #EC6016', transform: 'rotate(-2deg)', display: 'inline-block', backgroundColor: 'white' }} className="px-4 py-2 font-bold">PAYROLL</span>
          <span style={{ border: '2px solid #EC6016', position: 'absolute', top: '4px', left: '4px', width: '100%', height: '100%', backgroundColor: 'transparent' }}></span>
        </span> That Actually Works
      </h1>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
        For Businesses, Households, And Contractors
      </h2>
      <p className="text-gray-600 text-lg mb-12 max-w-4xl mx-auto leading-relaxed">
        Fast, accurate payroll and tax filing across states — set up in days, not weeks. Save time, avoid penalties,
        and pay people correctly every run.
      </p>
    </div>
  );
}
