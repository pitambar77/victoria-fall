import React from "react";
import { CheckCircle, Calendar, Leaf, Brain,  ShieldCheck } from "lucide-react";
import { SlBadge } from "react-icons/sl";

const reasons = [
  {
    icon: <SlBadge className="w-10 h-10 text-white" />,
    text: "All the experiences that we offer are pre-approved for quality and safety.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-white" />,
    text: "We offer an incredible range of pre-approved experiences & simple payment options for multiple bookings.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-white" />,
    text: "We have a flexible cancellation policy that most experiences can be cancelled +24 hours in advance.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-white" />,
    text: "We are conscious of the environments in which we operate and support local conservation organisations through fund raising and donations from our guests.",
  },
  {
    icon: <Brain className="w-10 h-10 text-white" />,
    text: "We are local, with experienced and knowledgeable staff on the ground in the destinations, providing you with a seamless experience.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    text: "Trust Protects Me - With all bookings made online with Trust My Travel credit card payment facility, your financial transaction will be guaranteed 100%.",
  },
];

const WhyBookWithUs = () => {
  return (
    <>
    
    <div className=" max-w-[1140px] mx-auto py-20 ">
 <div
      className=" relative bg-cover bg-center rounded-md overflow-hidden"
      style={{
        backgroundImage:
          "url('https://blog.sunsafaris.com/wp-content/uploads/2019/07/FamilyActivitiesTableMountain.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8d7648]/90 to-transparent"></div>

      <div className="relative max-w-[1140px] mx-auto px-10 py-16 lg:py-20">
        {/* Content */}
        <div className="max-w-xl text-white space-y-6">
          <h2 className=" hd  text-[30px] mb-14 font-semibold text-white tracking-[3px] uppercase">
            Why Book With Us?
          </h2>
          <ul className="space-y-10 hd">
            {reasons.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <p className="text-base leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>

   
        </>
  );
};

export default WhyBookWithUs;

