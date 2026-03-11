import React from "react";

const BathroomsForm = ({ property, setProperty }) => {
  /* ======================
     ADD BATHROOM
  ====================== */

  const addBathroom = () => {
    setProperty({
      ...property,
      bathrooms: [
        ...property.bathrooms,
        {
          bathName: "",
          bathdetails: [],
        },
      ],
    });
  };

  /* ======================
     CHANGE BATH NAME
  ====================== */

  const changeBathName = (index, value) => {
    const updated = [...property.bathrooms];

    updated[index].bathName = value;

    setProperty({
      ...property,
      bathrooms: updated,
    });
  };

  /* ======================
     REMOVE BATHROOM
  ====================== */

  const removeBathroom = (index) => {
    const updated = property.bathrooms.filter((_, i) => i !== index);

    setProperty({
      ...property,
      bathrooms: updated,
    });
  };

  /* ======================
     ADD BATH DETAIL
  ====================== */

  const addDetail = (bathIndex) => {
    const updated = [...property.bathrooms];

    updated[bathIndex].bathdetails.push({
      name: "",
      icon: "",
    });

    setProperty({
      ...property,
      bathrooms: updated,
    });
  };

  /* ======================
     CHANGE DETAIL
  ====================== */

  const changeDetail = (bathIndex, detailIndex, field, value) => {
    const updated = [...property.bathrooms];

    updated[bathIndex].bathdetails[detailIndex][field] = value;

    setProperty({
      ...property,
      bathrooms: updated,
    });
  };

  /* ======================
     REMOVE DETAIL
  ====================== */

  const removeDetail = (bathIndex, detailIndex) => {
    const updated = [...property.bathrooms];

    updated[bathIndex].bathdetails = updated[bathIndex].bathdetails.filter(
      (_, i) => i !== detailIndex,
    );

    setProperty({
      ...property,
      bathrooms: updated,
    });
  };

  return (
    <div className="border p-6 space-y-6">
      <h2 className="text-lg font-semibold">Bathrooms</h2>

      {property.bathrooms.map((bathroom, i) => (
        <div key={i} className="border p-4 rounded space-y-4">
          {/* Bathroom Name */}

          <input
            className="border p-2 w-full"
            placeholder="Bathroom Name"
            value={bathroom.bathName}
            onChange={(e) => changeBathName(i, e.target.value)}
          />

          {/* Bathroom Details */}

          <div className="space-y-3">
            {bathroom.bathdetails.map((detail, j) => (
              <div key={j} className="flex gap-3 items-center">
                <input
                  className="border p-2 flex-1"
                  placeholder="Detail Name (Shower / Bathtub / Sink)"
                  value={detail.name}
                  onChange={(e) => changeDetail(i, j, "name", e.target.value)}
                />

                <input
                  type="file"
                  onChange={(e) =>
                    changeDetail(i, j, "icon", e.target.files[0])
                  }
                />

                <button
                  onClick={() => removeDetail(i, j)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              onClick={() => addDetail(i)}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              Add Detail
            </button>
          </div>

          <button
            onClick={() => removeBathroom(i)}
            className="text-red-600 text-sm"
          >
            Remove Bathroom
          </button>
        </div>
      ))}

      <button onClick={addBathroom} className="bg-gray-300 px-3 py-1 rounded">
        Add Bathroom
      </button>
    </div>
  );
};

export default BathroomsForm;
