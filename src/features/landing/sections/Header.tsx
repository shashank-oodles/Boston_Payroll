import React from 'react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="bg-white px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Boston Payroll Logo"
            className="h-8"
          />
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Pricing</a>
          <a href="#testimonials" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Testimonials</a>
          <a href="#why-choose-us" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Why Choose Us</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Get In Touch</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:block flex items-center space-x-2 text-gray-600 border border-gray-300 rounded-lg px-3 py-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-sm">+1 (781) 750-0669</span>
          </div>
          <Link to="/login" style={{ backgroundColor: '#EC6016' }} className="text-white px-6 py-2 rounded-lg hover:opacity-90 text-sm font-medium cursor-pointer">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
