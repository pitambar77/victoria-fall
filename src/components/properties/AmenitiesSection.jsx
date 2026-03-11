import { useState } from "react";
import {
  addBasicAmenity,
  updateBasicAmenity,
  deleteBasicAmenity,
  addAdditionalAmenity,
  updateAdditionalAmenity,
  deleteAdditionalAmenity
} from "../../api/propertiesApi";

export default function AmenitiesSection({ property, setProperty }) {

  const [basicName, setBasicName] = useState("");
  const [basicIcon, setBasicIcon] = useState(null);

  const [additionalName, setAdditionalName] = useState("");
  const [additionalIcon, setAdditionalIcon] = useState(null);

  /* =====================
     ADD BASIC
  ===================== */

  const submitBasic = async () => {

    const formData = new FormData();

    formData.append("aminityName", basicName);
    formData.append("icon", basicIcon);

    const res = await addBasicAmenity(property._id, formData);

    setProperty(res.data);

    setBasicName("");
    setBasicIcon(null);

  };

  /* =====================
     UPDATE BASIC
  ===================== */

  const updateBasic = async (amenity) => {

    const formData = new FormData();

    formData.append("aminityName", amenity.aminityName);

    if (amenity.newIcon) {
      formData.append("icon", amenity.newIcon);
    }

    const res = await updateBasicAmenity(
      property._id,
      amenity._id,
      formData
    );

    setProperty(res.data);

  };

  /* =====================
     DELETE BASIC
  ===================== */

  const removeBasic = async (id) => {

    const res = await deleteBasicAmenity(property._id, id);

    setProperty(res.data);

  };

  /* =====================
     CHANGE BASIC
  ===================== */

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

  const changeBasicIcon = (index, file) => {

    const updated = [...property.aminities.basic];

    updated[index].newIcon = file;

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: updated
      }
    });

  };

  /* =====================
     ADDITIONAL AMENITY
  ===================== */

  const submitAdditional = async () => {

    const formData = new FormData();

    formData.append("aminityName", additionalName);
    formData.append("icon", additionalIcon);

    const res = await addAdditionalAmenity(property._id, formData);

    setProperty(res.data);

    setAdditionalName("");
    setAdditionalIcon(null);

  };

  const updateAdditional = async (amenity) => {

    const formData = new FormData();

    formData.append("aminityName", amenity.aminityName);

    if (amenity.newIcon) {
      formData.append("icon", amenity.newIcon);
    }

    const res = await updateAdditionalAmenity(
      property._id,
      amenity._id,
      formData
    );

    setProperty(res.data);

  };

  const removeAdditional = async (id) => {

    const res = await deleteAdditionalAmenity(property._id, id);

    setProperty(res.data);

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

  const changeAdditionalIcon = (index, file) => {

    const updated = [...property.aminities.additional];

    updated[index].newIcon = file;

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: updated
      }
    });

  };

  return (

    <div className="space-y-8">

      {/* BASIC AMENITIES */}

      <div className="border p-6 rounded space-y-4">

        <h2 className="font-bold text-lg">
          Basic Amenities
        </h2>

        {property.aminities?.basic?.map((amenity, i) => (

          <div key={amenity._id} className="space-y-2 border p-3 rounded">

            <input
              className="border p-2 w-full"
              value={amenity.aminityName}
              onChange={(e) =>
                changeBasic(i, "aminityName", e.target.value)
              }
            />

            {amenity.icon && (
              <img src={amenity.icon} className="w-10 h-10" />
            )}

            <input
              type="file"
              onChange={(e) =>
                changeBasicIcon(i, e.target.files[0])
              }
            />

            <div className="flex gap-3">

              <button
                onClick={() => updateBasic(amenity)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeBasic(amenity._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

        {/* ADD BASIC */}

        <input
          placeholder="Amenity name"
          className="border p-2 w-full"
          value={basicName}
          onChange={(e) => setBasicName(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setBasicIcon(e.target.files[0])}
        />

        <button
          onClick={submitBasic}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Basic Amenity
        </button>

      </div>

      {/* ADDITIONAL AMENITIES */}

      <div className="border p-6 rounded space-y-4">

        <h2 className="font-bold text-lg">
          Additional Amenities
        </h2>

        {property.aminities?.additional?.map((amenity, i) => (

          <div key={amenity._id} className="space-y-2 border p-3 rounded">

            <input
              className="border p-2 w-full"
              value={amenity.aminityName}
              onChange={(e) =>
                changeAdditional(i, "aminityName", e.target.value)
              }
            />

            {amenity.icon && (
              <img src={amenity.icon} className="w-10 h-10" />
            )}

            <input
              type="file"
              onChange={(e) =>
                changeAdditionalIcon(i, e.target.files[0])
              }
            />

            <div className="flex gap-3">

              <button
                onClick={() => updateAdditional(amenity)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeAdditional(amenity._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

        <input
          placeholder="Amenity name"
          className="border p-2 w-full"
          value={additionalName}
          onChange={(e) => setAdditionalName(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setAdditionalIcon(e.target.files[0])}
        />

        <button
          onClick={submitAdditional}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Additional Amenity
        </button>

      </div>

    </div>

  );

}