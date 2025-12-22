import React from 'react';

export default function FeatureCards() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-20 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 w-80">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#EC6016' }}>
            <span className="text-white text-xs font-bold">!</span>
          </div>
          <span className="font-semibold text-gray-900">99.9% Accuracy</span>
        </div>
        <div className="text-3xl font-bold" style={{ color: '#EC6016' }}>100%</div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 w-80">
        <div className="flex items-center space-x-3 mb-4">
          <span className="font-semibold text-gray-900">Tax Compliance</span>
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="text-3xl font-bold text-gray-900">98%</div>
        <div className="text-sm text-gray-500">customer satisfaction</div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 w-80">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#EC6016' }}>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-semibold text-gray-900">On-Time</span>
        </div>
      </div>
    </div>
  );
}
