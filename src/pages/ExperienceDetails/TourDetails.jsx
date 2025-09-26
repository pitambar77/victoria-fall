import React from "react";
import { Check, X } from "lucide-react"; // icons for includes/excludes
import { FaCheck } from "react-icons/fa";


const ActivityDetails = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-4 hd sm:px-6 lg:px-0 py-20 space-y-10">
      {/* Highlights */}
      <div className=" flex">
        <div className=" w-1/4">
          <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
            Highlights{" "}
          </h3>
        </div>

        <div className=" w-2/4">
          <ul className="list-disc list-inside text-[#5c5e62] space-y-1">
            <li>
              Enjoy a private and exclusive time on the river with your loved
              ones
            </li>
            <li>Explore the Zambezi River</li>
            <li>
              Taste decadent canapés and cocktails served by attentive staff
            </li>
          </ul>
        </div>
      </div>
      <div className=" h-[1px] bg-[#ebebeb] w-3/4"></div>


      {/* Full description */}
      <div className=" flex w-full">
        <div className=" w-1/4">
          <h3 className=" font-[500] text-lg text-[#2e2c2d] mb-2">
            Full description
          </h3>
        </div>
        <div className=" w-2/4">
          <p className="text-[#5c5e62] leading-relaxed mb-4">
            Experience a private and exclusive sunset cruise on the Zambezi
            River with your loved ones. Enjoy decadent canapés and cocktails
            served on board.
          </p>
          <p className="text-[#5c5e62] leading-relaxed">
            Peacefully and intimately explore the Zambezi River’s navigable
            channels as it idles quietly up and down stream. As the sun sets,
            toast the orange-tinged sky, the lull of the waters, and each other.{" "}
            <a href="#" className="text-blue-600 underline">
              See less
            </a>
          </p>
        </div>
      </div>

         <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

      {/* Includes */}
      <div className=" flex">
        <div className=" w-1/4">
          <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
            Includes
          </h3>
        </div>
        <div className=" w-2/4">
          <ul className="space-y-2">
            <li className="flex  text-[#2e2c2d]">
              <Check className="text-green-600 w-5 h-5 mr-2 " /> Complimentary
              Transfers to/from Hotel/Lodge in Victoria Falls Zimbabwe Only.
            </li>
            <li className="flex items-center text-[#2e2c2d]">
              <Check className="text-green-600 w-5 h-5 mr-2 " /> Canapes
            </li>
            <li className="flex items-center text-[#2e2c2d]">
              <Check className="text-green-600 w-5 h-5 mr-2 " /> Beverages
            </li>
            <li className="flex items-center text-[#2e2c2d]">
              <X className="text-red-600 w-5 h-5 mr-2 " /> National Park Fees
              (USD 10 per person, payable direct at check-in)
            </li>
            <li className="flex items-center text-[#2e2c2d]">
              <X className="text-red-600 w-5 h-5 mr-2 " /> Transfers from
              Livingstone Hotels/Lodges from Zambian Side
            </li>
            <li className="flex items-center text-[#2e2c2d]">
              <X className="text-red-600 w-5 h-5 mr-2 " /> Gratuities
            </li>
          </ul>
        </div>
      </div>
   <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
      {/* Important information */}
      <div className=" flex">
        <div className=" w-1/4">
          <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
            Important <br/> information
          </h3>
          
        </div>
        <div className=" w-2/4">
        <p className="font-[500] text-[#2e2c2d]">Know before you go</p>
          <ul className="list-disc list-inside text-[#5c5e62] space-y-1 mt-2">
            <li>
              Complimentary pick up is only offered for guests staying in
              Victoria Falls Town’s Lodges/Hotels Zimbabwe within 5km radius. We
              do not pick guests staying in Livingstone Hotels Zambia.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
