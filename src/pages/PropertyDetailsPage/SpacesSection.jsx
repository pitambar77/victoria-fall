import { Umbrella, Home, CookingPot, Flower2 } from "lucide-react";
import { useState } from "react";
import RoomsBedsModal from "./RoomsBedsModal";

export default function SpacesSection() {
  const [open, setOpen] = useState(false);

  const spaces = [
    { icon: Umbrella, label: "Deck or patio" },
    { icon: Home, label: "Porch or lanai" },
    { icon: CookingPot, label: "Kitchen" },
    { icon: Flower2, label: "Garden" },
  ];

  return (
    <div className="hd space-y-6">

      {/* Title */}
      <h2 className=" hd text-[18px] font-semibold text-[#2e2c2d]  tracking-wide uppercase mb-6">
        Spaces
      </h2>

      {/* Spaces list */}
      <div className="space-y-4">

        {spaces.map((item, i) => {
          const Icon = item.icon;

          return (
            <div key={i} className="hd flex items-center gap-4  font-[500] text-lg text-[#2e2c2d]">
              <Icon size={24} strokeWidth={1.5} color="#a57830" />
              {item.label}
            </div>
          );
        })}

      </div>

      {/* See all button */}
      <button
        onClick={() => setOpen(true)}
        className="text-[#b18642] cursor-pointer font-medium hover:underline"
      >
        See all rooms and beds details
      </button>

      {open && <RoomsBedsModal close={() => setOpen(false)} />}
    </div>
  );
}