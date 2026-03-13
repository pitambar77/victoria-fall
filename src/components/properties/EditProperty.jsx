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
    <div className="p-4 space-y-6 bg-[#f8f7f4]">
      {/* HEADER */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Edit Property</h1>

          <p className="text-gray-500">{property.overview?.title}</p>
        </div>

        <Link to="/dashbord/propt" className="text-sm text-blue-600">
          ← Back to Properties
        </Link>
      </div>

      {/* TABS */}

      <div className="flex gap-6 bg-white rounded-md p-4 ">
        <button
          onClick={() => setTab("overview")}
          className={`pb-2 cursor-pointer ${tab === "overview" ? "border-b-2 cursor-pointer border-[#ab8c52] font-semibold" : ""}`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("highlights")}
          className={`pb-2 cursor-pointer ${tab === "highlights" ? "border-b-2 cursor-pointer border-[#ab8c52] font-semibold" : ""}`}
        >
          Highlights
        </button>

        <button
          onClick={() => setTab("amenities")}
          className={`pb-2 cursor-pointer ${tab === "amenities" ? "border-b-2 border-[#ab8c52] font-semibold" : ""}`}
        >
          Amenities
        </button>
        <button
          onClick={() => setTab("areasec")}
          className={`pb-2 cursor-pointer ${tab === "areasec" ? "border-b-2 border-[#ab8c52] font-semibold" : ""}`}
        >
          Explore Area
        </button>

        <button
          onClick={() => setTab("rooms")}
          className={`pb-2 cursor-pointer ${tab === "rooms" ? "border-b-2 border-[#ab8c52] font-semibold" : ""}`}
        >
          Rooms
        </button>
        <button
          onClick={() => setTab("bathrooms")}
          className={`pb-2 cursor-pointer ${tab === "bathrooms" ? "border-b-2 border-[#ab8c52] font-semibold" : ""}`}
        >
          Bath Rooms
        </button>

        <button
          onClick={() => setTab("space")}
          className={`pb-2 cursor-pointer ${tab === "space" ? "border-b-2 border-[#ab8c52] font-semibold" : ""}`}
        >
          Space
        </button>

        <button
          onClick={() => setTab("rule")}
          className={`pb-2 cursor-pointer ${tab === "rule" ? "border-b-2 border-[#ab8c52] font-semibold" : ""}`}
        >
          House rule
        </button>

        <button
          onClick={() => setTab("insidental")}
          className={`pb-2 cursor-pointer ${tab === "insidental" ? "border-b-2 border-[#ab8c52] font-semibold" : ""}`}
        >
          Insidental
        </button>

        <button
          onClick={() => setTab("information")}
          className={`pb-2 cursor-pointer ${tab === "information" ? "border-b-2 border-[#ab8c52] font-semibold" : ""}`}
        >
         Information 
        </button>

        <button
          onClick={() => setTab("gallery")}
          className={`pb-2 cursor-pointer ${tab === "gallery" ? "border-b-2 border-[#ab8c52] font-semibold" : ""}`}
        >
          Gallery
        </button>
         <button
          onClick={() => setTab("basics")}
          className={`pb-2 cursor-pointer ${tab === "basics" ? "border-b-2 border-[#ab8c52] font-semibold" : ""}`}
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
