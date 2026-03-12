// pages/admin/CreateProperty.jsx

import { useState } from "react";
import axios from "axios";

import OverviewForm from "../../components/properties/OverviewForm";
import HighlightsForm from "../../components/properties/HighlightsForm";
import AmenitiesForm from "../../components/properties/AmenitiesForm";
import AreaForm from "../../components/properties/AreaForm";
import RoomsForm from "../../components/properties/RoomsForm";
import BathroomsForm from "../../components/properties/BathroomsForm";
import SpaceForm from "../../components/properties/SpaceForm";
import HouseRulesForm from "../../components/properties/HouseRulesForm";
import GalleryForm from "../../components/properties/GalleryForm";
// import FeaturesForm from "../../components/properties/FeaturesForm";
// import LocationForm from "../../components/properties/LocationForm";
import IncidentalForm from "../../components/properties/IncidentalForm";
import InformationForm from "../../components/properties/InformationForm";
import PropertyBasicForm from "../../components/properties/PropertyBasicForm";

export default function CreateProperty() {
  const [property, setProperty] = useState({
    overview: {
      title: "",
      subTitle: "",
      landingsubcontent: "",
      description: [],
    },

    slug: "",

    highlights: [],

    aminities: {
      basic: [],
      additional: [],
    },

    area: {
      maplink: "",
      locationname: "",
      relatedactivity: [],
    },

    rooms: [],
    bathrooms: [],
    space: [],

    houserule: {
      checkIn: "",
      checkOut: "",
      content: "",
      rule: [],
    },

    incidental: {
      description: [],
    },

    information: {
      info: [],
    },

    gallery: [],

    price: "",
    rating: 0,
    reviews: 0,
    sleeps: "",
    guest:"",
    distance: "",

    features: [],

    location: {
      lat: "",
      lng: "",
    },

    address: "",
    city: "Victoria Falls",
    country: "Zimbabwe",
  });

  const submit = async () => {
    try {
      const formData = new FormData();

      const cleanProperty = {
        ...property,
        highlights: property.highlights.map((h) => ({
          title: h.title,
          description: h.description,
          icon: "",
        })),
      };

      formData.append("property", JSON.stringify(cleanProperty));

      // highlight icons
      property.highlights.forEach((h) => {
        if (h.icon instanceof File) {
          formData.append("highlightIcons", h.icon);
        }
      });
      // aminity
      property.aminities.basic.forEach((a) => {
        if (a.icon instanceof File) {
          formData.append("amenityIcons", a.icon);
        }
      });

      property.aminities.additional.forEach((a) => {
        if (a.icon instanceof File) {
          formData.append("amenityIcons", a.icon);
        }
      });

      //area explore
      property.area.relatedactivity.forEach((a) => {
        if (a.icon instanceof File) {
          formData.append("activityIcons", a.icon);
        }
      });
      // gallery images
      property.gallery.forEach((g) => {
        if (g.image instanceof File) {
          formData.append("galleryImages", g.image);
        }
      });

      // room icons
      property.rooms.forEach((r) => {
        if (r.icon instanceof File) {
          formData.append("roomIcons", r.icon);
        }
      });

      // bathroom
      property.bathrooms.forEach((bath) => {
        bath.bathdetails.forEach((detail) => {
          if (detail.icon instanceof File) {
            formData.append("bathroomIcons", detail.icon);
          }
        });
      });
      // space
      property.space.forEach((s) => {
        if (s.icon instanceof File) {
          formData.append("spaceIcons", s.icon);
        }
      });
      // house rule
      property.houserule.rule.forEach((r) => {
        if (r.icon instanceof File) {
          formData.append("ruleIcons", r.icon);
        }
      });

      // gallery
      property.gallery.forEach((g) => {
        if (g.image instanceof File) {
          formData.append("galleryImages", g.image);
        }
      });

      await axios.post(
        "http://victoria-fall-backend.manoramaseoservice.com/api/property",
        formData,
      );
      //  await axios.post(
      //   "http://localhost:8001/api/property",
      //   formData,
      // );

      alert("✅ Property created successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to create property. Please try again.");
    }
  };

  return (
    <div className="p-10 space-y-10">
      <OverviewForm property={property} setProperty={setProperty} />
      <HighlightsForm property={property} setProperty={setProperty} />
      <AmenitiesForm property={property} setProperty={setProperty} />
      <AreaForm property={property} setProperty={setProperty} />
      <RoomsForm property={property} setProperty={setProperty} />
      <BathroomsForm property={property} setProperty={setProperty} />
      <SpaceForm property={property} setProperty={setProperty} />
      <HouseRulesForm property={property} setProperty={setProperty} />
      <IncidentalForm property={property} setProperty={setProperty} />
      <InformationForm property={property} setProperty={setProperty} />
      <GalleryForm property={property} setProperty={setProperty} />
      {/* <FeaturesForm property={property} setProperty={setProperty} />
      <LocationForm property={property} setProperty={setProperty} /> */}
      <PropertyBasicForm property={property} setProperty={setProperty} />

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-6 py-3 cursor-pointer rounded"
      >
        Create Property
      </button>
    </div>
  );
}
