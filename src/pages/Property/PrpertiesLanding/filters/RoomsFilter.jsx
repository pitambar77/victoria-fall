import { useFilters } from "../../../../FilterContext";

export default function RoomsFilter() {

  const { filters, setFilters } = useFilters();

  const change = (key, val) => {
    setFilters({
      ...filters,
      [key]: Math.max(0, filters[key] + val)
    });
  };

  return (
    <div>

      <h2 className="text-xl font-semibold mb-6">
        Rooms & spaces
      </h2>

      {["bedrooms","beds","bathrooms"].map((item) => (

        <div
          key={item}
          className="flex justify-between items-center mb-4"
        >

          <p>Minimum {item}</p>

          <div className="flex items-center gap-3">

            <button
              onClick={() => change(item,-1)}
              className="border rounded-full w-8 h-8"
            >
              -
            </button>

            {filters[item]}

            <button
              onClick={() => change(item,1)}
              className="border rounded-full w-8 h-8"
            >
              +
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}