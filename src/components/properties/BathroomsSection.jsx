import { useState } from "react";

import {
  addBathroom,
  deleteBathroom,
  addBathroomDetail,
  updateBathroomDetail,
  deleteBathroomDetail
} from "../../api/propertiesApi";

export default function BathroomsSection({ property, setProperty }) {

  const [bathName, setBathName] = useState("");

  const [detailName, setDetailName] = useState("");
  const [detailIcon, setDetailIcon] = useState(null);

  const [selectedBathroom, setSelectedBathroom] = useState("");

  /* ======================
     ADD BATHROOM
  ====================== */

  const submitBathroom = async () => {

    const res = await addBathroom(property._id, {
      bathName
    });

    setProperty(res.data);
    setBathName("");

  };

  /* ======================
     UPDATE BATH NAME
  ====================== */

  const updateBathroomItem = async (bathroom) => {

    const res = await addBathroom(property._id, {
      bathName: bathroom.bathName
    });

    setProperty(res.data);

  };

  /* ======================
     DELETE BATHROOM
  ====================== */

  const removeBathroomItem = async (bathroomId) => {

    const res = await deleteBathroom(property._id, bathroomId);

    setProperty(res.data);

  };

  /* ======================
     CHANGE BATH NAME
  ====================== */

  const changeBathroom = (index, value) => {

    const updated = [...property.bathrooms];

    updated[index].bathName = value;

    setProperty({
      ...property,
      bathrooms: updated
    });

  };

  /* ======================
     ADD DETAIL
  ====================== */

  const submitDetail = async () => {

    const formData = new FormData();

    formData.append("name", detailName);

    if (detailIcon) {
      formData.append("icon", detailIcon);
    }

    const res = await addBathroomDetail(
      property._id,
      selectedBathroom,
      formData
    );

    setProperty(res.data);

    setDetailName("");
    setDetailIcon(null);

  };

  /* ======================
     UPDATE DETAIL
  ====================== */

  const updateDetailItem = async (bathroomId, detail) => {

    const formData = new FormData();

    formData.append("name", detail.name);

    if (detail.newIcon) {
      formData.append("icon", detail.newIcon);
    }

    const res = await updateBathroomDetail(
      property._id,
      bathroomId,
      detail._id,
      formData
    );

    setProperty(res.data);

  };

  /* ======================
     DELETE DETAIL
  ====================== */

  const removeDetailItem = async (bathroomId, detailId) => {

    const res = await deleteBathroomDetail(
      property._id,
      bathroomId,
      detailId
    );

    setProperty(res.data);

  };

  /* ======================
     CHANGE DETAIL FIELD
  ====================== */

  const changeDetail = (bathIndex, detailIndex, field, value) => {

    const updated = [...property.bathrooms];

    updated[bathIndex].bathdetails[detailIndex][field] = value;

    setProperty({
      ...property,
      bathrooms: updated
    });

  };

  const changeDetailIcon = (bathIndex, detailIndex, file) => {

    const updated = [...property.bathrooms];

    updated[bathIndex].bathdetails[detailIndex].newIcon = file;

    setProperty({
      ...property,
      bathrooms: updated
    });

  };

  return (

    <div className="space-y-8">

      {/* EXISTING BATHROOMS */}

      <div className="border p-6 rounded space-y-6">

        <h2 className="font-bold text-lg">
          Bathrooms
        </h2>

        {property.bathrooms?.map((bathroom, i) => (

          <div key={bathroom._id} className="border p-4 rounded space-y-4">

            <input
              className="border p-2 w-full"
              value={bathroom.bathName}
              onChange={(e) =>
                changeBathroom(i, e.target.value)
              }
            />

            <div className="flex gap-3">

              <button
                onClick={() => updateBathroomItem(bathroom)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeBathroomItem(bathroom._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

            {/* DETAILS */}

            <div className="space-y-3">

              {bathroom.bathdetails?.map((detail, j) => (

                <div key={detail._id} className="flex gap-3 items-center">

                  <input
                    className="border p-2 flex-1"
                    value={detail.name}
                    onChange={(e) =>
                      changeDetail(i, j, "name", e.target.value)
                    }
                  />

                  {detail.icon && (
                    <img
                      src={detail.icon}
                      className="w-10 h-10 object-cover"
                    />
                  )}

                  <input
                    type="file"
                    onChange={(e) =>
                      changeDetailIcon(i, j, e.target.files[0])
                    }
                  />

                  <button
                    onClick={() =>
                      updateDetailItem(bathroom._id, detail)
                    }
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Update
                  </button>

                  <button
                    onClick={() =>
                      removeDetailItem(bathroom._id, detail._id)
                    }
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>

                </div>

              ))}

            </div>

            <button
              onClick={() => setSelectedBathroom(bathroom._id)}
              className="text-sm text-blue-600"
            >
              Add Detail Below
            </button>

          </div>

        ))}

      </div>

      {/* ADD BATHROOM */}

      <div className="border p-6 rounded space-y-3">

        <h2 className="font-bold">
          Add Bathroom
        </h2>

        <input
          className="border p-2 w-full"
          placeholder="Bathroom Name"
          value={bathName}
          onChange={(e) => setBathName(e.target.value)}
        />

        <button
          onClick={submitBathroom}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Bathroom
        </button>

      </div>

      {/* ADD DETAIL */}

      {selectedBathroom && (

        <div className="border p-6 rounded space-y-3">

          <h2 className="font-bold">
            Add Bathroom Detail
          </h2>

          <input
            className="border p-2 w-full"
            placeholder="Detail Name"
            value={detailName}
            onChange={(e) => setDetailName(e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => setDetailIcon(e.target.files[0])}
          />

          <button
            onClick={submitDetail}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Detail
          </button>

        </div>

      )}

    </div>

  );

}