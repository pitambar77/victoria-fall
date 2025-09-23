import React from 'react'
import { FaCompass, FaPhoneVolume, FaShieldAlt, FaGlobeAmericas, FaGem } from 'react-icons/fa';

const Overview = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading and Subheading */}
        <h2 className="text-4xl md:text-5xl font-serif font-light mb-10 text-gray-800 capitalize">
          Our mission is to turn <br className="hidden md:inline" /> your holiday...
        </h2>
        <p className="max-w-2xl mx-auto font-avenir text-center text-[#5c5e62] leading-relaxed mb-16 text-sm">
          We make your Victoria Falls holiday effortless. From booking your dream villa to
          organizing every detail of your stay — dining, shopping, activities, and transfers — we
          handle it all. You simply relax and enjoy. With us, your experience at the Falls will be
          100% stress-free
        </p>

        {/* Feature Icons Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8 lg:space-x-12 mb-16 py-10">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center max-w-[140px]">
            <div className="flex items-center justify-center w-20 h-20 rounded-full  bg-[#f0f5f9] mb-4 transition-all duration-300 hover:bg-gray-100">
              <FaCompass className="text-4xl text-[#33486b]" />
            </div>
            <p className="text-[#5c5e62] text-sm">
              Tailor-made vacations as unique as you are
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center max-w-[140px]">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#f0f5f9] mb-4 transition-all duration-300 hover:bg-gray-100">
              <FaPhoneVolume className="text-4xl text-[#33486b]" />
            </div>
            <p className="text-[#5c5e62] text-sm">
              24/7/365 support to ensure your trip is perfect
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center max-w-[140px]">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#f0f5f9] mb-4 transition-all duration-300 hover:bg-gray-100">
              <FaShieldAlt className="text-4xl text-[#33486b]" />
            </div>
            <p className="text-[#5c5e62] text-sm">
              Authentic experts who know your destinations
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center max-w-[140px]">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#f0f5f9] mb-4 transition-all duration-300 hover:bg-gray-100">
              <FaGlobeAmericas className="text-4xl text-[#33486b]" />
            </div>
            <p className="text-[#5c5e62] text-sm">
              Global adventures to 115 destinations, your way
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center text-center max-w-[140px]">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#f0f5f9] mb-4 transition-all duration-300 hover:bg-gray-100">
              <FaGem className="text-4xl text-[#33486b]" />
            </div>
            <p className="text-[#5c5e62] text-sm">
              Elevated journeys with 5-star stays and private tours
            </p>
          </div>
        </div>

        {/* Featured Logos Section */}
        <div className="text-center">
          <p className="text-gray-500 font-medium text-sm uppercase mb-6">
            As featured in
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-12">
            <span className="text-2xl font-bold text-gray-700">TRAVEL+<span className="font-light">LEISURE</span></span>
            <span className="text-2xl font-bold text-gray-700">AFAR</span>
            <span className="text-2xl font-bold text-gray-700">Forbes</span>
            <span className="text-2xl font-bold text-gray-700">Smithsonian<br/><span className="text-base font-normal">MAGAZINE</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview