import { useState } from "react";
import {
  addHighlight,
  updateHighlight,
  deleteHighlight
} from "../../api/propertiesApi";

export default function HighlightsSection({ property, setProperty }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState(null);

  /* ========================
     ADD HIGHLIGHT
  ======================== */

  const submit = async () => {

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("icon", icon);

    const res = await addHighlight(property._id, formData);

    setProperty(res.data);

    setTitle("");
    setDescription("");
    setIcon(null);

  };

  /* ========================
     UPDATE HIGHLIGHT
  ======================== */

  const handleUpdate = async (highlight) => {

    const formData = new FormData();

    formData.append("title", highlight.title);
    formData.append("description", highlight.description);

    if (highlight.newIcon) {
      formData.append("icon", highlight.newIcon);
    }

    const res = await updateHighlight(
      property._id,
      highlight._id,
      formData
    );

    setProperty(res.data);

  };

  /* ========================
     DELETE HIGHLIGHT
  ======================== */

  const handleDelete = async (highlightId) => {

    const res = await deleteHighlight(property._id, highlightId);

    setProperty(res.data);

  };

  /* ========================
     CHANGE FIELD
  ======================== */

  const changeHighlight = (index, field, value) => {

    const updated = [...property.highlights];

    updated[index][field] = value;

    setProperty({
      ...property,
      highlights: updated
    });

  };

  const changeIcon = (index, file) => {

    const updated = [...property.highlights];

    updated[index].newIcon = file;

    setProperty({
      ...property,
      highlights: updated
    });

  };

  return (

    <div className="space-y-6">

      {/* EXISTING HIGHLIGHTS */}

      <div className="border p-6 rounded-lg space-y-4">

        <h2 className="font-bold text-lg">
          Existing Highlights
        </h2>

        {property.highlights?.map((highlight, i) => (

          <div
            key={highlight._id}
            className="border p-4 rounded space-y-3"
          >

            <input
              className="border p-2 w-full"
              value={highlight.title}
              onChange={(e) =>
                changeHighlight(i, "title", e.target.value)
              }
            />

            <input
              className="border p-2 w-full"
              value={highlight.description}
              onChange={(e) =>
                changeHighlight(i, "description", e.target.value)
              }
            />

            {highlight.icon && (
              <img
                src={highlight.icon}
                className="w-12 h-12 object-cover"
              />
            )}

            <input
              type="file"
              onChange={(e) =>
                changeIcon(i, e.target.files[0])
              }
            />

            <div className="flex gap-3">

              <button
                onClick={() => handleUpdate(highlight)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => handleDelete(highlight._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* ADD NEW HIGHLIGHT */}

      <div className="border p-6 rounded-lg space-y-3">

        <h2 className="font-bold text-lg">
          Add Highlight
        </h2>

        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setIcon(e.target.files[0])}
        />

        <button
          onClick={submit}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Highlight
        </button>

      </div>

    </div>

  );

}