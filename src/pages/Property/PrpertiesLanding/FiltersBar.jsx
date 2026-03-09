
import { useState } from "react";
import { useFilters } from "../../../FilterContext";
import FiltersPanel from "./filters/FiltersPanel";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function FiltersBar() {
  const [activePanel, setActivePanel] = useState(null);
  const { filters } = useFilters();

  const count = filters.bedrooms + filters.bathrooms;

  const btnStyle =
    "flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition";

  return (
    <div className=" hd flex gap-3 p-4 border-b border-gray-200 sticky top-0 bg-white z-20">
      {/* Filters */}
      <button onClick={() => setActivePanel("filters")} className={btnStyle}>
        Filters {count > 0 && `(${count})`}
        <RiArrowDropDownLine size={22} />
      </button>

      {/* Popular */}
      <button onClick={() => setActivePanel("popular")} className={btnStyle}>
        Popular
        <RiArrowDropDownLine size={22} />
      </button>

      {/* Price */}
      <button onClick={() => setActivePanel("price")} className={btnStyle}>
        Price
        <RiArrowDropDownLine size={22} />
      </button>

      {/* Rooms */}
      <button onClick={() => setActivePanel("rooms")} className={btnStyle}>
        Rooms & spaces {count > 0 && `(${count})`}
        <RiArrowDropDownLine size={22} />
      </button>

      {/* Sort */}
      <button onClick={() => setActivePanel("sort")} className={btnStyle}>
        Sort by recommended
        <RiArrowDropDownLine size={22} />
      </button>

      {activePanel && (
        <FiltersPanel type={activePanel} close={() => setActivePanel(null)} />
      )}
    </div>
  );
}
