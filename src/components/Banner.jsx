import React from "react";

const Banner = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative md:h-[90vh] h-[550px]">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className=" max-w-[1140px] mx-auto absolute inset-0 flex flex-col justify-center  text-white/80 px-4  ">
        <h1 className="hd leading-[1.6] text-center sm:text-left text-[24px] sm:text-4xl md:text-[60px] tracking-[5px] font-[600] mb-4 uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="hd font-[500] text-sm text-center sm:text-left tracking-[5px] max-w-3xl uppercase">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
