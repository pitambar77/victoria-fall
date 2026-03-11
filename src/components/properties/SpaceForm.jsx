import React from "react";

const SpaceForm = ({ property, setProperty }) => {
  /* =====================
     ADD SPACE
  ===================== */

  const addSpace = () => {
    setProperty({
      ...property,
      space: [
        ...property.space,
        {
          title: "",
          icon: "",
        },
      ],
    });
  };

  /* =====================
     HANDLE CHANGE
  ===================== */

  const handleChange = (index, field, value) => {
    const updated = [...property.space];

    updated[index][field] = value;

    setProperty({
      ...property,
      space: updated,
    });
  };

  /* =====================
     REMOVE SPACE
  ===================== */

  const removeSpace = (index) => {
    const updated = property.space.filter((_, i) => i !== index);

    setProperty({
      ...property,
      space: updated,
    });
  };

  return (
    <div className="border p-6 space-y-4">
      <h2 className="text-lg font-semibold">Space</h2>

      {property.space.map((item, i) => (
        <div key={i} className="border p-4 rounded space-y-2">
          <input
            className="border p-2 w-full"
            placeholder="Space Title (Living Room / Kitchen / Patio)"
            value={item.title}
            onChange={(e) => handleChange(i, "title", e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => handleChange(i, "icon", e.target.files[0])}
          />

          <button
            onClick={() => removeSpace(i)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={addSpace} className="bg-gray-200 px-3 py-1 rounded">
        Add Space
      </button>
    </div>
  );
};

export default SpaceForm;
