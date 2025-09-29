import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const destinationActivities = [
  {
    id: 1,
    destination: "  victorial falls",
    url:'/',
    image:
      "https://cdn-homfb.nitrocdn.com/qetlunkKTeClpfQiVATTOyJJbvVSTFzJ/assets/images/source/rev-d854626/hukalodge.com/wp-content/uploads/2025/03/Lodge-Banner.jpg",
    
  },
  {
    id: 2,
      destination: "  Livingstone",
    url:'/',
    image:
      "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
   
  },
  {
    id: 3,
      destination: " chobe",
    url:'/',
    image:
      "https://campsolutions.com/wp-content/uploads/2020/12/CS-LSL-Cover-01.jpg",
    
  },
  {
    id: 4,
     destination: "  cape town",
    url:'/',
    image:
      "https://www.flattopswildernessguides.com/wp-content/uploads/2025/03/FTWGLodge_Exterior5-scaled.jpg",
    
  },
   
 
];


const ExperienceDestination = () => {

    const navigate = useNavigate();

  return (
    <>
     <div className=" bg-[#faf8f1] py-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 ">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {destinationActivities.map((activity, index) => (
            <div
              key={`${activity.id}-${index}`}
              className={`bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group ${index === 3 ? "lg:col-start-2" : ""} `}
            >
              <Link to={``}>
                {/* Image */}
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className=" hd transition-all duration-500 group-hover:-translate-y-4">
                  <div className="p-4 bg-white group-hover:rounded-t-md text-center">
                   
                    <h3 className="text-lg font-[500] text-[#2e2c2d] mt-1 uppercase">
                      {activity.destination}
                    </h3>
                    <button  onClick={()=>{
                        navigate('/experience-sub-landing')
                        window.scrollTo(0,0)
                    }}
                     className=' my-2 text-[#2e2c2d] border  border-[#aca188] rounded-[50px] text-[14px] leading-[1.6] uppercase tracking-[3px] font-normal py-[8px] px-[20px]  transition-colors duration-300 cursor-pointer ease-out'>View Destination</button>
                   
                    {/* <div className=' mt-4'>
<Button>View Details</Button>
                    </div> */}
                    
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
     
      </div>
    </div>
    </>
  )
}

export default ExperienceDestination

