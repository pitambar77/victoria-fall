import { useState } from "react";
import {
  updateArea,
  addActivity,
  updateActivity,
  deleteActivity
} from "../../api/propertiesApi";

export default function AreaSection({ property, setProperty }) {

  const [locationname, setLocationName] = useState(
    property.area?.locationname || ""
  );

  const [maplink, setMaplink] = useState(
    property.area?.maplink || ""
  );

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [icon, setIcon] = useState(null);

  /* ======================
     UPDATE AREA META
  ====================== */

  const saveArea = async () => {

    const res = await updateArea(property._id, {
      locationname,
      maplink
    });

    setProperty(res.data);

    alert("Area updated");

  };

  /* ======================
     ADD ACTIVITY
  ====================== */

  const submitActivity = async () => {

    const formData = new FormData();

    formData.append("title", title);
    formData.append("shortDescription", shortDescription);
    formData.append("icon", icon);

    const res = await addActivity(property._id, formData);

    setProperty(res.data);

    setTitle("");
    setShortDescription("");
    setIcon(null);

  };

  /* ======================
     UPDATE ACTIVITY
  ====================== */

  const updateActivityItem = async (activity) => {

    const formData = new FormData();

    formData.append("title", activity.title);
    formData.append("shortDescription", activity.shortDescription);

    if (activity.newIcon) {
      formData.append("icon", activity.newIcon);
    }

    const res = await updateActivity(
      property._id,
      activity._id,
      formData
    );

    setProperty(res.data);

  };

  /* ======================
     DELETE ACTIVITY
  ====================== */

  const removeActivity = async (id) => {

    const res = await deleteActivity(property._id, id);

    setProperty(res.data);

  };

  /* ======================
     CHANGE ACTIVITY
  ====================== */

  const changeActivity = (index, field, value) => {

    const updated = [...property.area.relatedactivity];

    updated[index][field] = value;

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: updated
      }
    });

  };

  const changeIcon = (index, file) => {

    const updated = [...property.area.relatedactivity];

    updated[index].newIcon = file;

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: updated
      }
    });

  };

  return (

    <div className="space-y-8">

      {/* AREA META */}

      <div className="border p-6 rounded space-y-4">

        <h2 className="font-bold text-lg">
          Area Information
        </h2>

        <input
          className="border p-2 w-full"
          value={locationname}
          placeholder="Location Name"
          onChange={(e) => setLocationName(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          value={maplink}
          placeholder="Google Map Link"
          onChange={(e) => setMaplink(e.target.value)}
        />

        <button
          onClick={saveArea}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Area
        </button>

      </div>

      {/* EXISTING ACTIVITIES */}

      <div className="border p-6 rounded space-y-4">

        <h2 className="font-bold text-lg">
          Related Activities
        </h2>

        {property.area?.relatedactivity?.map((activity, i) => (

          <div key={activity._id} className="border p-3 rounded space-y-2">

            <input
              className="border p-2 w-full"
              value={activity.title}
              onChange={(e) =>
                changeActivity(i, "title", e.target.value)
              }
            />

            <input
              className="border p-2 w-full"
              value={activity.shortDescription}
              onChange={(e) =>
                changeActivity(i, "shortDescription", e.target.value)
              }
            />

            {activity.icon && (
              <img src={activity.icon} className="w-10 h-10" />
            )}

            <input
              type="file"
              onChange={(e) =>
                changeIcon(i, e.target.files[0])
              }
            />

            <div className="flex gap-3">

              <button
                onClick={() => updateActivityItem(activity)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeActivity(activity._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* ADD ACTIVITY */}

      <div className="border p-6 rounded space-y-3">

        <h2 className="font-bold">
          Add Activity
        </h2>

        <input
          className="border p-2 w-full"
          placeholder="Activity Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Short Description"
          value={shortDescription}
          onChange={(e) =>
            setShortDescription(e.target.value)
          }
        />

        <input
          type="file"
          onChange={(e) => setIcon(e.target.files[0])}
        />

        <button
          onClick={submitActivity}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Activity
        </button>

      </div>

    </div>

  );

}