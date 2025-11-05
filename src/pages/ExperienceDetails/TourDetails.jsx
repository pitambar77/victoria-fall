import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getActivity } from "../../api/activityApi";
import { Check, X } from "lucide-react"; // icons for includes/excludes



const ActivityDetails = () => {

  const { id } = useParams();
    const [activity, setActivity] = useState(null);
  
    useEffect(() => {
      const fetchActivity = async () => {
        try {
          const res = await getActivity(id);
          setActivity(res.data);
        } catch (err) {
          console.error("Error fetching activity:", err);
        }
      };
      fetchActivity();
    }, [id]);
  
    if (!activity) return <p className="text-center mt-10">Loading activity...</p>;
  

  return (
    <div className="max-w-[1140px] mx-auto  hd px-4 py-10 md:py-20 md:space-y-10 space-y-4">
      

{/* 🌟 Highlights */}
      {activity.highlights?.length > 0 && (
        <div className=" hd flex flex-col md:flex-row">
          <div className=" w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Highlights
            </h3>
          </div>
          <div className=" w-full md:w-2/4">
            <ul className="list-disc list-inside text-[#5c5e62] space-y-1">
              {activity.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      )}


      <div className=" h-[1px] bg-[#ebebeb] w-full md:w-3/4"></div>


     
   
 {/* 📝 Full Description */}
      {activity.fullDescription?.length > 0 && (
        <div className="flex flex-col md:flex-row">
          <div className=" w-full md:w-1/4">
            <h3 className="hd font-[500] text-lg text-[#2e2c2d] mb-2 capitalize">
              Full description
            </h3>
          </div>
          <div className=" w-full md:w-2/4 space-y-2 text-[#5c5e62] leading-relaxed">
            {activity.fullDescription.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>
        </div>
      )}
         <div className=" h-[1px] bg-[#ebebeb]/50 w-full md:w-3/4"></div>

    

{/* ✅ Includes / ❌ Excludes */}
      {(activity.include?.length > 0 || activity.exclude?.length > 0) && (
        <div>
        <div className="flex flex-col md:flex-row mb-4 md:mb-8">
          <div className=" w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Includes 
            </h3>
          </div>
          <div className="w-full md:w-2/4 space-y-2">
            {activity.include?.map((item, i) => (
              <div key={i} className="flex  text-[#2e2c2d]">
                <Check className="text-green-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5 " />
                {item}
              </div>
            ))}
             </div>
            
        </div>

        

<div className=" h-[1px] bg-[#ebebeb]/50 w-full md:w-3/4"></div>

        <div className=" flex flex-col md:flex-row mt-4 md:mt-8">
          <div className=" w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Excludes
            </h3>
          </div>
          <div className=" w-full md:w-2/4 space-y-2">
            {activity.exclude?.map((item, i) => (
              <div key={i} className="flex  text-[#2e2c2d]">
                <X className="text-red-600 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
        </div>
      )}

   <div className=" h-[1px] bg-[#ebebeb]/50 w-full md:w-3/4"></div>

{activity.importantInfo && (
        <div className="hd flex flex-col md:flex-row">
          <div className=" w-full md:w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2 capitalize">
              Important <br className="hidden md:inline" /> information
            </h3>
          </div>
          <div className=" w-full md:w-2/4">
            <p className="font-[500] text-[#2e2c2d] mb-2">Know before you go</p>
            <p className="hd text-[#5c5e62]">{activity.importantInfo}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default ActivityDetails;
