
export default function AmenitiesForm({ property, setProperty }) {

  /* ======================
     BASIC AMENITIES
  ====================== */

  const addBasicAmenity = () => {
    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: [
          ...property.aminities.basic,
          { aminityName: "", icon: "" }
        ]
      }
    });
  };

  const changeBasic = (index, field, value) => {
    const updated = [...property.aminities.basic];

    updated[index][field] = value;

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: updated
      }
    });
  };

  const removeBasic = (index) => {
    const updated = property.aminities.basic.filter((_, i) => i !== index);

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: updated
      }
    });
  };

  /* ======================
     ADDITIONAL AMENITIES
  ====================== */

  const addAdditionalAmenity = () => {
    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: [
          ...property.aminities.additional,
          { aminityName: "", icon: "" }
        ]
      }
    });
  };

  const changeAdditional = (index, field, value) => {
    const updated = [...property.aminities.additional];

    updated[index][field] = value;

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: updated
      }
    });
  };

  const removeAdditional = (index) => {
    const updated = property.aminities.additional.filter((_, i) => i !== index);

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: updated
      }
    });
  };

  return (
    <div className="border p-6 space-y-6">

      {/* ================= BASIC ================= */}

      <div>

        <h2 className="text-lg font-semibold mb-3">
          Basic Amenities
        </h2>

        {property.aminities.basic.map((amenity, i) => (
          <div key={i} className="flex gap-3 mb-2">

            <input
              className="border p-2 flex-1"
              placeholder="Amenity Name"
              value={amenity.aminityName}
              onChange={(e) =>
                changeBasic(i, "aminityName", e.target.value)
              }
            />

            <input
              type="file"
              onChange={(e) =>
                changeBasic(i, "icon", e.target.files[0])
              }
            />

            <button
              onClick={() => removeBasic(i)}
              className="text-red-500"
            >
              Remove
            </button>

          </div>
        ))}

        <button
          onClick={addBasicAmenity}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          Add Basic Amenity
        </button>

      </div>

      {/* ================= ADDITIONAL ================= */}

      <div>

        <h2 className="text-lg font-semibold mb-3">
          Additional Amenities
        </h2>

        {property.aminities.additional.map((amenity, i) => (
          <div key={i} className="flex gap-3 mb-2">

            <input
              className="border p-2 flex-1"
              placeholder="Amenity Name"
              value={amenity.aminityName}
              onChange={(e) =>
                changeAdditional(i, "aminityName", e.target.value)
              }
            />

            <input
              type="file"
              onChange={(e) =>
                changeAdditional(i, "icon", e.target.files[0])
              }
            />

            <button
              onClick={() => removeAdditional(i)}
              className="text-red-500"
            >
              Remove
            </button>

          </div>
        ))}

        <button
          onClick={addAdditionalAmenity}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          Add Additional Amenity
        </button>

      </div>

    </div>
  );
}
