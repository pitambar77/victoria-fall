import PriceFilter from "./PriceFilter";
import RoomsFilter from "./RoomsFilter";
import PopularFilter from "./PopularFilter";
import SortFilter from "./SortFilter";

export default function FiltersPanel({ type, close }) {

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-start pt-24">

      <div className="bg-white w-[500px] rounded-xl shadow-xl p-6">

        {type === "price" && <PriceFilter />}
        {type === "rooms" && <RoomsFilter />}
        {type === "popular" && <PopularFilter />}
         {type === "sort" && <SortFilter close={close} />}

        <button
          onClick={close}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Done
        </button>

      </div>

    </div>
  );
}