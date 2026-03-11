import { useState } from "react";

import { addSpace, updateSpace, deleteSpace } from "../../api/propertiesApi";

export default function SpaceSection({ property, setProperty }) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState(null);

  /* ======================
     ADD SPACE
  ====================== */

  const submitSpace = async () => {
    const formData = new FormData();

    formData.append("title", title);

    if (icon) {
      formData.append("icon", icon);
    }

    const res = await addSpace(property._id, formData);

    setProperty(res.data);

    setTitle("");
    setIcon(null);
  };

  /* ======================
     UPDATE SPACE
  ====================== */

  const updateSpaceItem = async (space) => {
    const formData = new FormData();

    formData.append("title", space.title);

    if (space.newIcon) {
      formData.append("icon", space.newIcon);
    }

    const res = await updateSpace(property._id, space._id, formData);

    setProperty(res.data);
  };

  /* ======================
     DELETE SPACE
  ====================== */

  const removeSpace = async (spaceId) => {
    const res = await deleteSpace(property._id, spaceId);

    setProperty(res.data);
  };

  /* ======================
     CHANGE SPACE FIELD
  ====================== */

  const changeSpace = (index, value) => {
    const updated = [...property.space];

    updated[index].title = value;

    setProperty({
      ...property,
      space: updated,
    });
  };

  const changeIcon = (index, file) => {
    const updated = [...property.space];

    updated[index].newIcon = file;

    setProperty({
      ...property,
      space: updated,
    });
  };

  return (
    <div className="space-y-8">
      {/* EXISTING SPACE */}

      <div className="border p-6 rounded space-y-4">
        <h2 className="font-bold text-lg">Space</h2>

        {property.space?.map((space, i) => (
          <div key={space._id} className="border p-4 rounded space-y-2">
            <input
              className="border p-2 w-full"
              value={space.title}
              onChange={(e) => changeSpace(i, e.target.value)}
            />

            {space.icon && (
              <img src={space.icon} className="w-12 h-12 object-cover" />
            )}

            <input
              type="file"
              onChange={(e) => changeIcon(i, e.target.files[0])}
            />

            <div className="flex gap-3">
              <button
                onClick={() => updateSpaceItem(space)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeSpace(space._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD SPACE */}

      <div className="border p-6 rounded space-y-3">
        <h2 className="font-bold">Add Space</h2>

        <input
          className="border p-2 w-full"
          placeholder="Space Title (Kitchen / Patio / Living Room)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input type="file" onChange={(e) => setIcon(e.target.files[0])} />

        <button
          onClick={submitSpace}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Space
        </button>
      </div>
    </div>
  );
}
