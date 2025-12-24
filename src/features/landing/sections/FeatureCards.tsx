import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FiClock } from "react-icons/fi";

export default function FeatureCards() {
  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-6 lg:mt-50 mb-20 max-w-3xl mx-auto">
      <div className="flex h-max w-max items-center gap-2 rounded-3xl p-3 shadow-lg border border-gray-100">
        <div className="flex gap-2 items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-xl bg-[#EC6016]">
            <IoMdArrowUp className='text-white'/>
          </div>
          <span className="font-semibold text-[#EC6016]">99.9% Accuracy</span>
        </div>
      </div>

      <div className="bg-white h-max w-max rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <span className="font-semibold text-gray-900">Tax Compliance</span>
          <AiOutlineDollarCircle className='text-gray-500'/>
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-4">98%</div>
        <div className='flex items-center gap-1'>
          <div className="flex items-center justify-center w-6 h-6 rounded-xl bg-[#EC6016]">
            <FiClock className='text-white'/>
          </div>
          <div className="text-sm text-gray-500">On Time</div>
        </div>
      </div>

      <div className="flex flex-col h-max w-max bg-white rounded-xl px-3 py-2 h-max shadow-lg border border-gray-100">
        <p className='font-semibold text-xl'>98%</p>
        <p className='text-gray-500'>Customer Satisfaction</p>
      </div>
    </div>
  );
}
