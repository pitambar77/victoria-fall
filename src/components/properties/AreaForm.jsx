import React from "react";

const AreaForm = ({ property, setProperty }) => {
  /* =====================
     BASIC AREA FIELDS
  ===================== */

  const handleChange = (e) => {
    setProperty({
      ...property,
      area: {
        ...property.area,
        [e.target.name]: e.target.value,
      },
    });
  };

  /* =====================
     RELATED ACTIVITIES
  ===================== */

  const addActivity = () => {
    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: [
          ...property.area.relatedactivity,
          {
            title: "",
            shortDescription: "",
            icon: "",
          },
        ],
      },
    });
  };

  const changeActivity = (index, field, value) => {
    const updated = [...property.area.relatedactivity];

    updated[index][field] = value;

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: updated,
      },
    });
  };

  const removeActivity = (index) => {
    const updated = property.area.relatedactivity.filter((_, i) => i !== index);

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: updated,
      },
    });
  };

  return (
    <div className="border p-6 space-y-6">
      <h2 className="text-lg font-semibold">Area Information</h2>

      {/* LOCATION NAME */}

      <input
        className="border p-2 w-full"
        name="locationname"
        placeholder="Location Name"
        value={property.area.locationname}
        onChange={handleChange}
      />

      {/* MAP LINK */}

      <input
        className="border p-2 w-full"
        name="maplink"
        placeholder="Google Map Link"
        value={property.area.maplink}
        onChange={handleChange}
      />

      {/* RELATED ACTIVITIES */}

      <div className="space-y-4">
        <h3 className="font-medium">Related Activities</h3>

        {property.area.relatedactivity.map((activity, i) => (
          <div key={i} className="border p-4 rounded space-y-2">
            <input
              className="border p-2 w-full"
              placeholder="Activity Title"
              value={activity.title}
              onChange={(e) => changeActivity(i, "title", e.target.value)}
            />

            <input
              className="border p-2 w-full"
              placeholder="Short Description"
              value={activity.shortDescription}
              onChange={(e) =>
                changeActivity(i, "shortDescription", e.target.value)
              }
            />

            <input
              type="file"
              onChange={(e) => changeActivity(i, "icon", e.target.files[0])}
            />

            <button
              onClick={() => removeActivity(i)}
              className="text-red-500 text-sm"
            >
              Remove Activity
            </button>
          </div>
        ))}

        <button onClick={addActivity} className="bg-gray-200 px-3 py-1 rounded">
          Add Activity
        </button>
      </div>
    </div>
  );
};

export default AreaForm;
