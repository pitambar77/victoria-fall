import React, { useState } from "react";
import PropertyList from "./PropertyList";
import MapView from "./MapView";
import FiltersBar from "./FiltersBar";
import TestimonialSection from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useFilters } from "../../../FilterContext";

const properties = [
  {
    id: "1",
    title: "Spacious Home Pool Victoria Falls",
    price: 500,
    rating: 10,
    reviews: 4,
    distance: "0.6 mi (1 km)",
    bedrooms: 2,
    bathrooms: 4,
    sleeps: 10,
    features: ["House", "Pool", "Parking"],
    lat: -14.9243,
    lng: 18.856,
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
  },
  {
    id: "2",
    title: "Luxury Pool Villa",
    price: 600,
    rating: 9,
    reviews: 2,
    distance: "10 mi (1 km)",
    bedrooms: 1,
    bathrooms: 3,
    sleeps: 8,
    features: ["House", "Hot tub", "King bed"],
    lat: -19.92,
    lng: 18.85,
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
  },
  {
    id: "3",
    title: "Budget Pool House",
    price: 200,
    rating: 10,
    reviews: 4,
    distance: "10 mi (5 km)",
    bedrooms: 8,
    bathrooms: 4,
    sleeps: 10,
    features: ["House", "Pool"],
    lat: -21.9243,
    lng: 22.856,
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
  },
  {
    id: "4",
    title: "Luxury Villa",
    price: 600,
    rating: 9,
    reviews: 2,
    distance: "0.6 mi (1 km) to Victora Falls",
    bedrooms: 3,
    bathrooms: 3,
    sleeps: 8,
    features: ["House", "Parking"],
    lat: -20.92,
    lng: 24.85,
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
  },
  {
    id: "5",
    title: "Pool Retreat",
    price: 300,
    rating: 10,
    reviews: 4,
    bedrooms: 2,
    bathrooms: 4,
    sleeps: 10,
    features: ["Pool", "Parking"],
    lat: -17.9243,
    lng: 25.856,
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
  },
  {
    id: "6",
    title: "Luxury King Suite Villa",
    price: 620,
    rating: 9,
    reviews: 2,
    distance: "0.6 mi (1 km) to Victora Falls",
    bedrooms: 4,
    bathrooms: 3,
    sleeps: 8,
    features: ["House", "King bed"],
    lat: -19.32,
    lng: 23.15,
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
  },
  {
    id: "7",
    title: "Spacious Victoria Falls",
    price: 500,
    rating: 10,
    reviews: 4,
    bedrooms: 2,
    bathrooms: 4,
    sleeps: 10,
    features: ["House", "Pool", "Parking"],
    lat: -17.9243,
    lng: 23.856,
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
  },
  {
    id: "8",
    title: "Pool Villa",
    price: 600,
    rating: 9,
    reviews: 2,
    distance: "0.6 mi (1 km) to Victora Falls",
    bedrooms: 1,
    bathrooms: 3,
    sleeps: 8,
    features: ["House", "Hot tub", "King bed"],
    lat: -18.92,
    lng: 19.85,
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
  },
  {
    id: "9",
    title: "Budget Pool ",
    price: 200,
    rating: 10,
    reviews: 4,
    bedrooms: 8,
    bathrooms: 4,
    sleeps: 10,
    features: ["House", "Pool"],
    lat: -16.9243,
    lng: 26.856,
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
  },
  {
    id: "10",
    title: "Luxury bhhg Villa",
    price: 800,
    rating: 9,
    distance: "0.6 mi (1 km) to Victora Falls",
    reviews: 2,
    bedrooms: 3,
    bathrooms: 3,
    sleeps: 8,
    features: ["House", "Parking"],
    lat: -16.92,
    lng: 21.85,
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
  },
  {
    id: "11",
    title: "Pool Retreat",
    price: 300,
    rating: 10,
    reviews: 4,
    bedrooms: 2,
    bathrooms: 4,
    sleeps: 10,
    features: ["Pool", "Parking"],
    lat: -18.9243,
    lng: 23.56,
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
  },
  {
    id: "12",
    title: "Luxury  Suite Villa",
    price: 628,
    rating: 9,
    reviews: 2,
    bedrooms: 9,
    bathrooms: 13,
    sleeps: 8,
    features: ["House", "King bed"],
    lat: -16.92,
    lng: 27.85,
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
  },
];

const ListingsPage = () => {
  const { filters } = useFilters();

  //map hover
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [visibleProperties, setVisibleProperties] = useState(properties);

  // FILTER
  let filtered = properties.filter((p) => {
    if (p.price < filters.minPrice) return false;
    if (p.price > filters.maxPrice) return false;

    if (p.bedrooms < filters.bedrooms) return false;
    if (p.bathrooms < filters.bathrooms) return false;

    if (
      filters.popular.length > 0 &&
      !filters.popular.every((f) => p.features.includes(f))
    ) {
      return false;
    }

    return true;
  });

  // SORT
  if (filters.sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (filters.sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (filters.sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filters.sort === "reviews") {
    filtered.sort((a, b) => b.reviews - a.reviews);
  }

  return (
    <>
      <Header />

      <div className="h-screen max-w-[1140px] mx-auto mt-2 pb-20 px-4 sm:px-6 lg:px-0 flex flex-col">
        <FiltersBar />

        <div className="grid grid-cols-12 h-full py-4">
          {/* LEFT LIST */}
          <div className="col-span-7 overflow-y-auto pr-4">
            <PropertyList
              properties={filtered}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              selectedId={selectedId}
            />
          </div>

          {/* RIGHT MAP */}
          <div className="col-span-5">
            <MapView
              properties={filtered}
              hoveredId={hoveredId}
              setSelectedId={setSelectedId}
              setVisibleProperties={setVisibleProperties}
            />
          </div>
        </div>
      </div>

      <TestimonialSection />
      <Awards />
      <Footer />
    </>
  );
};

export default ListingsPage;
