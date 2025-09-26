import React from "react";

const Overview = ({ title, subtitle, description }) => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="hd text-[30px] mb-6 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
          {title} 
          {subtitle && (
            <>
              <br className="hidden md:inline" /> {subtitle}
            </>
          )}
        </h2>

        {/* Description */}
        <p className="hd max-w-2xl mx-auto text-center text-[#5c5e62] tracking-[1px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Overview;
