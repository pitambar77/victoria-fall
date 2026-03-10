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
import FeaturesForm from "../../components/properties/FeaturesForm";
import LocationForm from "../../components/properties/LocationForm";

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
      description: "",
    },

    information: {
      info: [],
    },

    gallery: [],

    price: "",
    rating: 0,
    reviews: 0,
    sleeps: "",
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

    const dataToSend = {
      ...property,
      highlights: [],
      aminities: { basic: [], additional: [] },
      rooms: [],
      bathrooms: [],
      space: [],
      gallery: [],
    };

    const res = await axios.post(
      "http://localhost:8001/api/property",
      dataToSend
    );

    console.log(res.data);
    alert("Property Created");

  } catch (err) {
    console.log(err.response?.data);
  }
};

  // const submit = async () => {
  //   const formData = new FormData();

  //   formData.append("property", JSON.stringify(property));

  //   property.highlights.forEach((h, i) => {
  //     if (h.icon) {
  //       formData.append("icon", h.icon);
  //     }
  //   });

  //   await axios.post("http://localhost:8001/api/property", formData);
  // };

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
      <GalleryForm property={property} setProperty={setProperty} />
      <FeaturesForm property={property} setProperty={setProperty} />
      <LocationForm property={property} setProperty={setProperty} />

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Create Property
      </button>
    </div>
  );
}
