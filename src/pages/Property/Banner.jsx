import React from 'react'

const Banner = () => {
  return (
    <div className="relative h-screen">
      
      {/* Background Image */}
      <img
        src="https://travelessencemag.com/wp-content/uploads/travelessence-Babohi_Iconic-scaled.webp"
        alt="Couple looking at a sunset over hills by a pool"
        className="absolute inset-0 w-full h-full object-cover"
      />
<div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-16 lg:p-32">
        <h1 className="text-4xl md:text-7xl font-serif font-semibold mb-4 capitalize">
          Babohi
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl  max-w-2xl">
          At Qwabi Private Game Reserve
        </p>
      </div>
    </div>
  )
}

export default Banner