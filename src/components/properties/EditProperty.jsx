import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { getProperty } from "../../api/propertiesApi";

import OverviewSection from "../../components/properties/OverviewSection";
import AmenitiesSection from "../../components/properties/AmenitiesSection";
import RoomsSection from "../../components/properties/RoomsSection";
import GallerySection from "../../components/properties/GallerySection";
import HighlightsSection from "./HighlightsSection";
import AreaSection from "./AreaSection";
import BathroomsSection from "./BathroomsSection";
import SpaceSection from "./SpaceSection";
import HouseRulesSection from "./HouseRulesSection";
import IncidentalSection from "./IncidentalSection";
import InformationSection from "./InformationSection";
import PropertyBasicSection from "./PropertyBasicSection";

export default function EditProperty() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [tab, setTab] = useState("overview");

  useEffect(() => {
    const fetchProperty = async () => {
      const res = await getProperty(id);
      setProperty(res.data);
    };

    fetchProperty();
  }, [id]);

  if (!property) return <div className="p-10">Loading property...</div>;

  return (
    <div className="p-8 space-y-6">
      {/* HEADER */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Edit Property</h1>

          <p className="text-gray-500">{property.overview?.title}</p>
        </div>

        <Link to="/propt" className="text-sm text-blue-600">
          ← Back to Properties
        </Link>
      </div>

      {/* TABS */}

      <div className="flex gap-6 border-b">
        <button
          onClick={() => setTab("overview")}
          className={`pb-2 ${tab === "overview" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("highlights")}
          className={`pb-2 ${tab === "highlights" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          Highlights
        </button>

        <button
          onClick={() => setTab("amenities")}
          className={`pb-2 ${tab === "amenities" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          Amenities
        </button>
        <button
          onClick={() => setTab("areasec")}
          className={`pb-2 ${tab === "areasec" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          Explore Area
        </button>

        <button
          onClick={() => setTab("rooms")}
          className={`pb-2 ${tab === "rooms" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          Rooms
        </button>
        <button
          onClick={() => setTab("bathrooms")}
          className={`pb-2 ${tab === "bathrooms" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          Bath Rooms
        </button>

        <button
          onClick={() => setTab("space")}
          className={`pb-2 ${tab === "space" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          Space
        </button>

        <button
          onClick={() => setTab("rule")}
          className={`pb-2 ${tab === "rule" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          House rule
        </button>

        <button
          onClick={() => setTab("insidental")}
          className={`pb-2 ${tab === "insidental" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          Insidental
        </button>

        <button
          onClick={() => setTab("information")}
          className={`pb-2 ${tab === "information" ? "border-b-2 border-black font-semibold" : ""}`}
        >
         Information 
        </button>

        <button
          onClick={() => setTab("gallery")}
          className={`pb-2 ${tab === "gallery" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          Gallery
        </button>
         <button
          onClick={() => setTab("basics")}
          className={`pb-2 ${tab === "basics" ? "border-b-2 border-black font-semibold" : ""}`}
        >
          Basic 
        </button>
      </div>

      {/* TAB CONTENT */}

      <div className="pt-4">
        {tab === "overview" && (
          <OverviewSection property={property} setProperty={setProperty} />
        )}
        {tab === "highlights" && (
          <HighlightsSection property={property} setProperty={setProperty} />
        )}
        {tab === "amenities" && (
          <AmenitiesSection property={property} setProperty={setProperty} />
        )}
        {tab === "areasec" && (
          <AreaSection property={property} setProperty={setProperty} />
        )}

        {tab === "rooms" && (
          <RoomsSection property={property} setProperty={setProperty} />
        )}
        {tab === "bathrooms" && (
          <BathroomsSection property={property} setProperty={setProperty} />
        )}
        {tab === "space" && (
          <SpaceSection property={property} setProperty={setProperty} />
        )}

        {tab === "rule" && (
          <HouseRulesSection property={property} setProperty={setProperty} />
        )}

        {tab === "insidental" && (
          <IncidentalSection property={property} setProperty={setProperty} />
        )}
        {tab === "information" && (
          <InformationSection property={property} setProperty={setProperty} />
        )}


        {tab === "gallery" && (
          <GallerySection property={property} setProperty={setProperty} />
        )}
        {tab === "basics" && (
          <PropertyBasicSection property={property} setProperty={setProperty} />
        )}
      </div>
    </div>
  );
}
