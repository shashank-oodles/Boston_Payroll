import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="mt-24 mb-16">
      <div style={{ backgroundColor: '#FDEFE8' }} className="rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Get in<br />touch with us
            </h3>
            <p className="text-gray-600 mb-8">
              We're here to help! Whether you have a question about our services, need assistance, or want to provide feedback, our team is ready to assist you.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Email:</p>
                <p className="font-semibold">support@bostonpayroll.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone:</p>
                <p className="font-semibold">+1 (0)234 567 890</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="e.g. john@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">How can we help you?</label>
                <textarea
                  rows={4}
                  placeholder="Enter your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
