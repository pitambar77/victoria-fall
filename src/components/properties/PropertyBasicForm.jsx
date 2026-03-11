import React from "react";
import MapPicker from "../../pages/Property/PrpertiesLanding/MapPicker";

export default function PropertyBasicForm({ property, setProperty }) {
  /* =========================
     BASIC FIELD CHANGE
  ========================= */

  const handleChange = (field, value) => {
    setProperty({
      ...property,
      [field]: value,
    });
  };

  /* =========================
     LOCATION CHANGE
  ========================= */

  const handleLocation = (field, value) => {
    setProperty({
      ...property,
      location: {
        ...property.location,
        [field]: value,
      },
    });
  };

  /* =========================
     FEATURES
  ========================= */

  const addFeature = () => {
    setProperty({
      ...property,
      features: [...property.features, ""],
    });
  };

  const changeFeature = (index, value) => {
    const updated = [...property.features];

    updated[index] = value;

    setProperty({
      ...property,
      features: updated,
    });
  };

  const removeFeature = (index) => {
    const updated = property.features.filter((_, i) => i !== index);

    setProperty({
      ...property,
      features: updated,
    });
  };

  return (
    <div className="border p-6 space-y-6">
      <h2 className="text-lg font-semibold">Property Details</h2>

      {/* PRICE */}
      <input
        className="border p-2 w-full"
        placeholder="Price"
        value={property.price}
        onChange={(e) => handleChange("price", e.target.value)}
      />

      {/* CATEGORY */}
      <select
        className="border p-2 w-full"
        value={property.category}
        onChange={(e) => handleChange("category", e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Villa">Villa</option>
        <option value="Apartment">Apartment</option>
        <option value="Lodge">Lodge</option>
        <option value="Hotel">Hotel</option>
      </select>

      {/* RATING */}
      <input
        className="border p-2 w-full"
        placeholder="Rating"
        value={property.rating}
        onChange={(e) => handleChange("rating", e.target.value)}
      />

      {/* REVIEWS */}
      <input
        className="border p-2 w-full"
        placeholder="Reviews"
        value={property.reviews}
        onChange={(e) => handleChange("reviews", e.target.value)}
      />

      {/* SLEEPS */}
      <input
        className="border p-2 w-full"
        placeholder="Sleeps"
        value={property.sleeps}
        onChange={(e) => handleChange("sleeps", e.target.value)}
      />

      {/* DISTANCE */}
      <input
        className="border p-2 w-full"
        placeholder="Distance from city"
        value={property.distance}
        onChange={(e) => handleChange("distance", e.target.value)}
      />

      {/* FEATURES */}
      <div className="space-y-3">
        <h3 className="font-semibold">Features</h3>

        {property.features.map((feature, i) => (
          <div key={i} className="flex gap-2">
            <input
              className="border p-2 w-full"
              placeholder="Feature"
              value={feature}
              onChange={(e) => changeFeature(i, e.target.value)}
            />

            <button onClick={() => removeFeature(i)} className="text-red-500">
              Remove
            </button>
          </div>
        ))}

        <button onClick={addFeature} className="bg-gray-200 px-3 py-1 rounded">
          Add Feature
        </button>
      </div>

      {/* LOCATION */}
      <div className="space-y-3">
        <h3 className="font-semibold">Location Coordinates</h3>

        <input
          className="border p-2 w-full"
          placeholder="Latitude"
          value={property.location?.lat || ""}
          onChange={(e) => handleLocation("lat", Number(e.target.value))}
        />

        <input
          className="border p-2 w-full"
          placeholder="Longitude"
          value={property.location?.lng || ""}
          onChange={(e) => handleLocation("lng", Number(e.target.value))}
        />
      </div>

      {/* ADDRESS */}
      <input
        className="border p-2 w-full"
        placeholder="Address"
        value={property.address}
        onChange={(e) => handleChange("address", e.target.value)}
      />

      {/* CITY */}
      <input
        className="border p-2 w-full"
        placeholder="City"
        value={property.city}
        onChange={(e) => handleChange("city", e.target.value)}
      />

      {/* COUNTRY */}
      <input
        className="border p-2 w-full"
        placeholder="Country"
        value={property.country}
        onChange={(e) => handleChange("country", e.target.value)}
      />

      {/* MAP PICKER */}
      <MapPicker property={property} setProperty={setProperty} />
    </div>
  );
}
