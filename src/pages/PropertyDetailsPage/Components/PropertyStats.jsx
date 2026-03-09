import { DoorOpen, Bath, Users, Maximize } from "lucide-react";

export default function PropertyStats() {
  const stats = [
    {
      icon: DoorOpen,
      label: "5 bedrooms",
    },
    {
      icon: Bath,
      label: "4 bathrooms",
    },
    {
      icon: Users,
      label: "Sleeps 10",
    },
    {
      icon: Maximize,
      label: "10763.9 sq ft",
    },
  ];

  return (
    <div className="w-full py-4 rounded-md">
      <div className="flex flex-wrap justify-between items-center gap-6">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="hd flex items-center gap-3  font-[500]  text-[#2e2c2d] "
            >
              <Icon size={26} strokeWidth={1.5} color="#a57830" />
              <span>{item.label}</span>
            </div>
          );
        })}

      </div>
    </div>
  );
}