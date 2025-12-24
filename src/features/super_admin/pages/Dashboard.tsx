import React from 'react'
import { ClientDistributionChart, SubscriptionBreakdown, RecentTicketsTable } from '../components'
import { FaUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import {tickets} from '../constants'

export function Dashboard() {

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold text-gray-700'>Welcome to Boston Payroll, John</h1>
        <p className='text-sm text-gray-600'>Monitor payroll runs, client activity, and subscription performance across your entire payroll ecosystem.</p>
      </div>
      <div className='flex gap-2'>
        <div className='flex flex-col gap-1 bg-white px-3 py-3 rounded-lg w-full'>
          <div className='flex items-center gap-3'><div className='p-2 bg-[#FDEFE8] rounded-lg'><FaUser className='text-[#EC6016]' /></div><p className='font-semibold text-gray-700'>Total Clients</p></div>
          <p className='text-2xl font-semibold text-[#005151]'>1,650</p>
          <p className='text-sm text-gray-600'>Active clients currently linked with your organization.</p>
        </div>
        <div className='flex flex-col gap-1 bg-white px-3 py-3 rounded-lg w-full'>
          <div className='flex items-center gap-3'><div className='p-2 bg-[#FDEFE8] rounded-lg'><FaUserCircle className='text-[#EC6016] text-lg' /></div><p className='font-semibold text-gray-700'>Active Clients</p></div>
          <p className='text-2xl font-semibold text-[#005151]'>128</p>
          <p className='text-sm text-gray-600'>Number of clients currently active on the platform.</p>
        </div>
        <div className='flex flex-col gap-1 bg-white px-3 py-3 rounded-lg w-full'>
          <div className='flex items-center gap-3'><div className='p-2 bg-[#FDEFE8] rounded-lg'><FaUser className='text-[#EC6016]' /></div><p className='font-semibold text-gray-700'>Upcoming Payroll Runs</p></div>
          <p className='text-2xl font-semibold text-[#005151]'>15</p>
          <p className='text-sm text-gray-600'>Payroll runs scheduled this week.</p>
        </div>
      </div>
      <div className='flex gap-5'>
        <ClientDistributionChart className="w-[64%]" />
        <SubscriptionBreakdown className='w-[36%]' />
      </div>
      <RecentTicketsTable data={tickets} />
    </div>
  )
}

