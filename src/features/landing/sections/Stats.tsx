import React from 'react';

export default function Stats() {
    return (
        <div className="absolute right-0 mb-16 w-full px-4 h-60">
            <div className="flex flex-col relative lg:flex-row justify-between items-center gap-4 lg:gap-6 max-w-7xl mx-auto">
                {/* Left Stats */}
                <div className="absolute bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-100 top-5">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EC6016' }}>
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="font-semibold text-gray-900 text-sm lg:text-base">99.9% Payroll Accuracy</span>
                    </div>
                    <p className="text-sm text-gray-500 ml-9">calculations every run</p>
                </div>

                {/* User Avatars */}
                <div className="flex flex-col mx-auto sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full max-w-sm">
                    <div className="flex -space-x-2">
                        <img src="/1b7d48eeafdcfffc16a92d0fedc4eba355930a84.png" alt="User 1" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white shadow-sm object-cover" />
                        <img src="/bfb13bc29e04a248ef089f1c961a2428333eafaa.png" alt="User 2" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white shadow-sm object-cover" />
                        <img src="/f553410761f3180d46cab8d9546a1b2acdd227bc.jpg" alt="User 3" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white shadow-sm object-cover" />
                        <img src="/fc1ba72d8731caef24e4c4fad3e2dff9c56544fc.jpg" alt="User 4" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white shadow-sm object-cover" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-center" style={{ color: '#EC6016' }}>We are trusted by Fortune 500 Users</span>
                </div>

                {/* Right Stats */}
                <div className="absolute bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-100 right-2 top-5">
                    <div className="text-center lg:text-right">
                        <div className="flex items-center justify-center lg:justify-end space-x-2 text-sm text-gray-500 mb-1">
                            <span>1-2 Day Deposits</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-2xl lg:text-3xl font-bold" style={{ color: '#EC6016' }}>$567.34K</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
