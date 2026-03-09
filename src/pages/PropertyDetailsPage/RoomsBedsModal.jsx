import { X, BedDouble, ShowerHead, Toilet, Bath } from "lucide-react";

export default function RoomsBedsModal({ close }) {
  const bedrooms = [
    { name: "Bedroom 1", bed: "1 Twin Bed" },
    { name: "Bedroom 2", bed: "1 Twin Bed" },
    { name: "Bedroom 3", bed: "1 King Bed" },
    { name: "Bedroom 4", bed: "1 King Bed" },
    { name: "Bedroom 5", bed: "1 Queen Bed" },
  ];

  const bathrooms = [
    {
      title: "Room 1 en-suite",
      icons: [Toilet, ShowerHead],
      text: "Toilet · Shower only",
    },
    {
      title: "Room 2 En-suite",
      icons: [Toilet, ShowerHead],
      text: "Toilet · Shower only",
    },
    {
      title: "Room 3 En-suite",
      icons: [Toilet, ShowerHead],
      text: "Toilet · Shower only",
    },
    {
      title: "Room 4 and 5 Shared bathroom",
      icons: [Bath, Toilet, ShowerHead],
      text: "Bathtub · Toilet · Shower only",
    },
  ];

  const spacesLeft = [
    "Deck/patio",
    "Dining",
    "Seating for 10 people",
    "Kitchen",
  ];

  const spacesRight = [
    "A fully equipped Kitchen is included",
    "Lawn/garden",
    "Porch/veranda",
    "Entertainment area with BBQ facilities and bar fridge.",
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-start pt-10 z-50">

      <div className="bg-white w-[900px] max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-10">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={close}
            className="w-10 h-10 rounded-full border flex items-center justify-center"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl font-semibold">
            Rooms & beds
          </h2>
        </div>

        {/* Bedrooms */}
        <h3 className="text-xl font-semibold mb-6">
          5 bedrooms <span className="text-gray-500">(sleeps 10)</span>
        </h3>

        <div className="grid grid-cols-2 gap-y-8 gap-x-20">

          {bedrooms.map((room, i) => (
            <div key={i} className="space-y-2">

              <p className="font-semibold text-lg">{room.name}</p>

              <BedDouble size={34} strokeWidth={1.5} />

              <p className="text-gray-600">{room.bed}</p>

            </div>
          ))}

        </div>

        <div className="border-t my-10"></div>

        {/* Bathrooms */}
        <h3 className="text-xl font-semibold mb-6">
          4 bathrooms
        </h3>

        <div className="grid grid-cols-2 gap-y-10 gap-x-20">

          {bathrooms.map((bath, i) => (
            <div key={i} className="space-y-3">

              <p className="font-semibold text-lg">{bath.title}</p>

              <div className="flex gap-3">
                {bath.icons.map((Icon, idx) => (
                  <Icon key={idx} size={30} />
                ))}
              </div>

              <p className="text-gray-600">{bath.text}</p>

            </div>
          ))}

        </div>

        <div className="border-t my-10"></div>

        {/* Spaces */}
        <h3 className="text-3xl font-semibold mb-8">
          Spaces
        </h3>

        <div className="grid grid-cols-2 gap-y-4 gap-x-20 text-lg text-gray-700">

          <div className="space-y-4">
            {spacesLeft.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>

          <div className="space-y-4">
            {spacesRight.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}