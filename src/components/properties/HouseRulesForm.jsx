import React from "react";

const HouseRulesForm = ({ property, setProperty }) => {
  /* ======================
     META CHANGE
  ====================== */

  const handleMetaChange = (e) => {
    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        [e.target.name]: e.target.value,
      },
    });
  };

  /* ======================
     ADD RULE
  ====================== */

  const addRule = () => {
    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        rule: [
          ...property.houserule.rule,
          {
            title: "",
            description: "",
            icon: "",
          },
        ],
      },
    });
  };

  /* ======================
     CHANGE RULE
  ====================== */

  const changeRule = (index, field, value) => {
    const updated = [...property.houserule.rule];

    updated[index][field] = value;

    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        rule: updated,
      },
    });
  };

  /* ======================
     REMOVE RULE
  ====================== */

  const removeRule = (index) => {
    const updated = property.houserule.rule.filter((_, i) => i !== index);

    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        rule: updated,
      },
    });
  };

  return (
    <div className="border p-6 space-y-6">
      <h2 className="text-lg font-semibold">House Rules</h2>

      {/* ================= META ================= */}

      <div className="space-y-2">
        <input
          className="border p-2 w-full"
          name="checkIn"
          placeholder="Check In Time"
          value={property.houserule.checkIn}
          onChange={handleMetaChange}
        />

        <input
          className="border p-2 w-full"
          name="checkOut"
          placeholder="Check Out Time"
          value={property.houserule.checkOut}
          onChange={handleMetaChange}
        />

        <textarea
          className="border p-2 w-full"
          name="content"
          placeholder="House Rules Description"
          value={property.houserule.content}
          onChange={handleMetaChange}
        />
      </div>

      {/* ================= RULE LIST ================= */}

      <div className="space-y-4">
        <h3 className="font-medium">Rules</h3>

        {property.houserule.rule.map((rule, i) => (
          <div key={i} className="border p-4 rounded space-y-2">
            <input
              className="border p-2 w-full"
              placeholder="Rule Title"
              value={rule.title}
              onChange={(e) => changeRule(i, "title", e.target.value)}
            />

            <input
              className="border p-2 w-full"
              placeholder="Description"
              value={rule.description}
              onChange={(e) => changeRule(i, "description", e.target.value)}
            />

            <input
              type="file"
              onChange={(e) => changeRule(i, "icon", e.target.files[0])}
            />

            <button
              onClick={() => removeRule(i)}
              className="text-red-500 text-sm"
            >
              Remove Rule
            </button>
          </div>
        ))}

        <button onClick={addRule} className="bg-gray-200 px-3 py-1 rounded">
          Add Rule
        </button>
      </div>
    </div>
  );
};

export default HouseRulesForm;
