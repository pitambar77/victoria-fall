import { useState } from "react";

import {
  updatePropertyBasic,
  updateLocation,
  updateAddress,
  addFeature,
  updateFeature,
  deleteFeature
} from "../../api/propertiesApi";

import MapPicker from "../../pages/Property/PrpertiesLanding/MapPicker";

export default function PropertyBasicSection({ property, setProperty }) {

  const [form, setForm] = useState({
    price: property.price || "",
    category: property.category || "",
    rating: property.rating || "",
    reviews: property.reviews || "",
    sleeps: property.sleeps || "",
    distance: property.distance || ""
  });

  /* ======================
     BASIC FIELD CHANGE
  ====================== */

  const handleChange = (field, value) => {

    setForm({
      ...form,
      [field]: value
    });

  };

  /* ======================
     SAVE BASIC INFO
  ====================== */

  const saveBasic = async () => {

    const res = await updatePropertyBasic(property._id, form);

    setProperty(res.data);

    alert("Property basic info updated");

  };

  /* ======================
     LOCATION
  ====================== */

  const saveLocation = async () => {

    const res = await updateLocation(
      property._id,
      property.location
    );

    setProperty(res.data);

  };

  /* ======================
     ADDRESS
  ====================== */

  const saveAddress = async () => {

    const res = await updateAddress(property._id, {
      address: property.address,
      city: property.city,
      country: property.country
    });

    setProperty(res.data);

  };

  /* ======================
     FEATURES
  ====================== */

  const addNewFeature = async () => {

    const feature = prompt("Enter feature");

    if (!feature) return;

    const res = await addFeature(property._id, { feature });

    setProperty(res.data);

  };

  const updateFeatureItem = async (oldFeature, newFeature) => {

    const res = await updateFeature(property._id, {
      oldFeature,
      newFeature
    });

    setProperty(res.data);

  };

  const removeFeature = async (feature) => {

    const res = await deleteFeature(property._id, {
      feature
    });

    setProperty(res.data);

  };

  return (

    <div className="space-y-8">

      {/* BASIC DETAILS */}

      <div className="border p-6 rounded space-y-4">

        <h2 className="font-bold text-lg">
          Property Details
        </h2>

        <input
          className="border p-2 w-full"
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            handleChange("price", e.target.value)
          }
        />

        <select
          className="border p-2 w-full"
          value={form.category}
          onChange={(e) =>
            handleChange("category", e.target.value)
          }
        >
          <option value="">Select Category</option>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Lodge">Lodge</option>
          <option value="Hotel">Hotel</option>
        </select>

        <input
          className="border p-2 w-full"
          placeholder="Rating"
          value={form.rating}
          onChange={(e) =>
            handleChange("rating", e.target.value)
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Reviews"
          value={form.reviews}
          onChange={(e) =>
            handleChange("reviews", e.target.value)
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Sleeps"
          value={form.sleeps}
          onChange={(e) =>
            handleChange("sleeps", e.target.value)
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Distance"
          value={form.distance}
          onChange={(e) =>
            handleChange("distance", e.target.value)
          }
        />

        <button
          onClick={saveBasic}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Basic Info
        </button>

      </div>

      {/* FEATURES */}

      <div className="border p-6 rounded space-y-4">

        <h2 className="font-bold">
          Features
        </h2>

        {property.features?.map((feature, i) => (

          <div key={i} className="flex gap-3">

            <input
              className="border p-2 flex-1"
              value={feature}
              onChange={(e) =>
                updateFeatureItem(feature, e.target.value)
              }
            />

            <button
              onClick={() => removeFeature(feature)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>

          </div>

        ))}

        <button
          onClick={addNewFeature}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          Add Feature
        </button>

      </div>

      {/* LOCATION */}

      <div className="border p-6 rounded space-y-4">

        <h2 className="font-bold">
          Location
        </h2>

        <input
          className="border p-2 w-full"
          placeholder="Latitude"
          value={property.location?.lat || ""}
          onChange={(e) =>
            setProperty({
              ...property,
              location: {
                ...property.location,
                lat: Number(e.target.value)
              }
            })
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Longitude"
          value={property.location?.lng || ""}
          onChange={(e) =>
            setProperty({
              ...property,
              location: {
                ...property.location,
                lng: Number(e.target.value)
              }
            })
          }
        />

        <button
          onClick={saveLocation}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Save Location
        </button>

        <MapPicker property={property} setProperty={setProperty} />

      </div>

      {/* ADDRESS */}

      <div className="border p-6 rounded space-y-4">

        <h2 className="font-bold">
          Address
        </h2>

        <input
          className="border p-2 w-full"
          placeholder="Address"
          value={property.address}
          onChange={(e) =>
            setProperty({
              ...property,
              address: e.target.value
            })
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="City"
          value={property.city}
          onChange={(e) =>
            setProperty({
              ...property,
              city: e.target.value
            })
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Country"
          value={property.country}
          onChange={(e) =>
            setProperty({
              ...property,
              country: e.target.value
            })
          }
        />

        <button
          onClick={saveAddress}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Save Address
        </button>

      </div>

    </div>

  );

}