import { X } from "lucide-react";

export default function AmenitiesModal({ close }) {
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

  const additionalRight = [
    "Pool cover",
    "BBQ",
    "Concierge",
    "Fireplace",
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-start pt-20 z-50">

      <div className="bg-white w-[900px] max-h-[80vh] overflow-y-auto rounded-xl shadow-lg p-8">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-semibold">Amenities</h2>
          <button onClick={close}>
            <X size={24} />
          </button>
        </div>

        {/* Basics Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-6">Basics</h3>

          <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-lg">

            <div className="space-y-4">
              {basics.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>

            <div className="space-y-4">
              {basicsRight.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>

          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-6">Additional</h3>

          <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-lg">

            <div className="space-y-4">
              {additional.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>

            <div className="space-y-4">
              {additionalRight.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}