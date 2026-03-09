import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilters = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {

  const [filters, setFilters] = useState({
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    minPrice: 0,
    maxPrice: 1000,
    popular: [],
    sort: "recommended"
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};