import React from 'react';

export default function Testimonials() {
  return (
    <div id="testimonials" className="mt-24 mb-16">
      <div className="text-center mb-12">
        <span className="text-orange-500 font-semibold text-sm">TESTIMONIALS</span>
        <h3 className="text-3xl font-bold mt-2 mb-4">What our customers say</h3>
        <p className="text-gray-600">Join thousands of businesses that trust Boston Payroll for their payroll needs.</p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-gray-600 mb-6 leading-relaxed">
            "I was relocating from New York to Miami for work and needed a rental fast. This platform helped me find a stylish studio in Brickell within just five days. I loved the real-time availability, verified listings, and the ability to chat directly with landlords. The process was seamless and modern - no shady deals or hidden fees. Couldn't have asked for a better experience!"
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h5 className="font-semibold">Sarah Martinez</h5>
              <div className="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-gray-600 mb-6 leading-relaxed">
            "As a first-time property owner, I was a bit nervous about listing online, but the platform made it incredibly simple. I uploaded high-res photos, added my details, and within 48 hours, I had qualified leads lining up. The best part? No commission fees and direct communication helped me manage all my properties. It's like having a personal assistant for rentals!"
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h5 className="font-semibold">Luis Ramirez</h5>
              <p className="text-sm text-gray-500">Property Owner</p>
              <div className="flex text-yellow-400">
                <span>★★★★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-gray-600 mb-6 leading-relaxed">
            "I spent weeks on other sites before I landed here. The search filters helped me narrow down options quickly - I needed something pet-friendly, with parking under $2,100, and close to public transport. The site delivered! I was live in my new apartment within two weeks thanks to their ultra-responsive team. Highly recommend!"
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-300 rounded-full"></div>
            <div>
              <h5 className="font-semibold">Emily Tran</h5>
              <p className="text-sm text-gray-500">Renter</p>
              <div className="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-gray-600 mb-6 leading-relaxed">
            "I list 10+ properties a month for my clients, and this platform consistently brings the most engaged renters. From promoting listings to analytics, it gives me the edge I need to close deals faster. Plus, the client UI makes it a breeze to manage multiple properties without missing critical deadlines for professionals."
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
            <div>
              <h5 className="font-semibold">David Cohen</h5>
              <p className="text-sm text-gray-500">Real Estate Agent</p>
              <div className="flex text-yellow-400">
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
