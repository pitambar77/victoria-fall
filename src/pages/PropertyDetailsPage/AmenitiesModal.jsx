import { RxCrossCircled } from "react-icons/rx";
import { TbAirConditioning } from "react-icons/tb";
import { useEffect } from "react";

export default function AmenitiesModal({ close }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const basics = [
    "Air Conditioning",
    "Clothes Dryer",
    "Dishwasher",
    "Free Cleaning",
    "Fridge",
    "Heating",
    "Hot water",
    "Kettle",
    "Linen Towels",
    "Oven",
    "Private Car Park",
    "Smoking Forbidden",
    "Suitable for children (2+ years old)",
    "TV",
  ];

  const basicsRight = [
    "Baby crib",
    "Coffee Maker",
    "Essentials",
    "Freezer",
    "Full Equipped Kitchen",
    "Highchair",
    "Internet",
    "Kids Friendly",
    "Microwave",
    "Parking Included",
    "Private entrance",
    "Stove",
    "Suitable for infants (under 2 years)",
    "Washing Machine",
  ];

  const additional = [
    "Electric vehicle charger",
    "Babysitter recommendation",
    "Books",
    "Contemporary",
  ];

  const additionalRight = ["Pool cover", "BBQ", "Concierge", "Fireplace"];

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-start pt-20 z-50">
      <div className="bg-white w-[900px] max-h-[80vh] rounded-xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4  rounded-t-2xl p-6 shadow sticky top-0 bg-white z-10">
          <button
            onClick={close}
            className="cursor-pointer text-[#ab8c51] hover:text-[#dfab4b]"
          >
            <RxCrossCircled size={28} />
          </button>
          <h2 className="font-[500] text-xl text-[#2e2c2d] capitalize">
            Property Amenities
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8">
          {/* Basics */}
          <div className="mt-2">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-6">Basics</h3>

            <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-[#2e2c2d]">
              <div className="space-y-4">
                {basics.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <TbAirConditioning className="text-[#ab8c51]" size={18} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {basicsRight.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <TbAirConditioning className="text-[#ab8c51]" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional */}
          <div className="mt-10">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-6">
              Additional
            </h3>

            <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-[#2e2c2d]">
              <div className="space-y-4">
                {additional.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <TbAirConditioning className="text-[#ab8c51]" size={18} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {additionalRight.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <TbAirConditioning className="text-[#ab8c51]" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
