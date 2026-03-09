import { MapPin, Gem } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      icon: <Gem size={28} />,
      title: "Outdoor pool",
      description:
        "The outdoor pool is a refreshing retreat under the open sky – a rare gem in this area.",
    },
    {
      icon: <MapPin size={28} />,
      title: "Discover nearby landmarks",
      description: "Walk to Zambezi National Park",
    },
  ];

  return (
    <div className="hd space-y-6">
      <h2 className=" hd text-[18px] font-semibold text-[#2e2c2d]  tracking-wide uppercase mb-6">Highlights</h2>

      <div className="space-y-8">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start gap-5">
            
            {/* Icon Circle */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f9f4e8] text-[#b08a4e] shrink-0">
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="hd font-[500] text-lg text-[#2e2c2d]">
                {item.title}
              </h3>
              <p className="text-[#2e2c2d] mt-1">{item.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}