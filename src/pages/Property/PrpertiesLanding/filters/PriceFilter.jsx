import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useFilters } from "../../../../FilterContext";

export default function PriceFilter() {

  const { filters, setFilters } = useFilters();

  return (
    <div>

      <h2 className="text-xl font-semibold mb-6">
        Price range
      </h2>

      <Slider
        range
        min={0}
        max={1000}
        defaultValue={[filters.minPrice, filters.maxPrice]}
        onChange={(val) =>
          setFilters({
            ...filters,
            minPrice: val[0],
            maxPrice: val[1]
          })
        }
      />

      <div className="flex justify-between mt-4">

        <div className="border p-2 rounded">
          ${filters.minPrice}
        </div>

        <div className="border p-2 rounded">
          ${filters.maxPrice}
        </div>

      </div>

    </div>
  );
}

