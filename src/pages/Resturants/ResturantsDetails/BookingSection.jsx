import React from "react";
import Button from "../../../components/Button";

const BookingSection = () => {
  return (
    <>
      <div className=" max-w-[1140px] mx-auto pt-20">
        <p
          className={`text-sm text-center tracking-widest uppercase mb-4 text-[#5c5e62] `}
        >
          your special moment
        </p>
        <h2 className="hd text-[30px]  text-center font-semibold text-[#2e2c2d] tracking-[3px] uppercase mb-6">
          book a table
        </h2>
        <p
          className={`hd max-w-2xl mx-auto text-center text-[#5c5e62] tracking-[1px] italic mb-10 `}
        >
          Book a table online and dine at basilico restaurant to enjoy the
          special flavors, cozy space with your family and loved ones!
        </p>
      </div>
      <div
        className="relative md:py-[80px] py-[50px] bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://iol-prod.appspot.com/image/f26461d40465033da0466e224e74577fb4a628ef/5000')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <form className="w-full md:w-1/2 p-4 relative z-30">
          <div className="grid grid-cols-2 gap-4 mb-4 text-white">
            <input
              type="text"
              placeholder="Name*"
              className="p-3 outline-0 border border-white focus:border-white rounded-md placeholder-white text-sm"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="p-3 outline-0 border border-white focus:border-white rounded-md placeholder-white text-sm"
              required
            />
            <input
              type="number"
              placeholder="Amount of people"
              className="p-3 outline-0 border border-white focus:border-white rounded-md placeholder-white text-sm"
            />
            <input
              type="time"
              className="p-3 outline-0 border border-white focus:border-white rounded-md text-white text-sm"
            />
            <input
              type="date"
              className="p-3 outline-0 border border-white focus:border-white rounded-md text-white text-sm"
            />
            <input
              type="number"
              placeholder="Phone number"
              className="p-3 outline-0 border border-white focus:border-white rounded-md placeholder-white text-sm"
            />
          </div>
          <div className="text-center mt-10">
            <Button type="submit">BOOK YOUR TABLE</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingSection;
