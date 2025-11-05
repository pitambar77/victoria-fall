import React, { useState } from "react";

const FacilityManager = ({ facilities, setFacilities }) => {
  const [facility, setFacility] = useState({ facilityName: "", icon: "" });

  const addFacility = () => {
    if (!facility.facilityName.trim()) return;
    setFacilities([...facilities, facility]);
    setFacility({ facilityName: "", icon: "" });
  };

  const removeFacility = (index) => {
    setFacilities(facilities.filter((_, i) => i !== index));
  };

  return (
    <div className="border p-4 rounded mt-4">
      <h3 className="text-lg font-semibold mb-2">Facilities</h3>

      <div className="flex gap-2 mb-2">
        <input
          type="text"
          placeholder="Facility Name"
          value={facility.facilityName}
          onChange={(e) =>
            setFacility({ ...facility, facilityName: e.target.value })
          }
          className="border p-2 flex-1 rounded"
        />
        <input
          type="text"
          placeholder="Icon (optional)"
          value={facility.icon}
          onChange={(e) => setFacility({ ...facility, icon: e.target.value })}
          className="border p-2 flex-1 rounded"
        />
        <button
          type="button"
          onClick={addFacility}
          className="bg-blue-600 text-white px-3 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-1">
        {facilities.map((f, i) => (
          <li
            key={i}
            className="flex justify-between bg-gray-100 p-2 rounded items-center"
          >
            <span>
              {f.icon && <i className={`mr-2 ${f.icon}`}></i>}
              {f.facilityName}
            </span>
            <button
              type="button"
              onClick={() => removeFacility(i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacilityManager;
