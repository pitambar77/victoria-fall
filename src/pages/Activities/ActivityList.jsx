import React, { useState, useEffect } from "react";
import { getActivities, deleteActivity } from "../../api/activityApi";
import { useNavigate } from "react-router-dom";

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  const fetchActivities = async () => {
    try {
      const res = await getActivities();
      setActivities(res.data);
    } catch (err) {
      console.error("Error fetching activities:", err);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this activity?")) return;
    try {
      await deleteActivity(id);
      fetchActivities();
    } catch (err) {
      console.error("Error deleting activity:", err);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto ">
      <div className=" flex justify-between">
 <h2 className="text-2xl font-bold mb-4">All Activities</h2>
      <button
        onClick={() => navigate("/dashbord/activities/add")}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Create Activity
      </button>
      </div>
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((activity) => (
          <div key={activity._id} className="border rounded p-4 shadow hover:shadow-lg transition">
            <img
              src={activity.bannerImage}
              alt={activity.activityName}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-semibold">{activity.activityName}</h3>
            <p className="text-sm text-gray-600">Price: ₹{activity.pricePerPerson}</p>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => navigate(`/dashbord/activities/${activity._id}`)}
                className="text-blue-600 hover:underline"
              >
                View
              </button>
              <button
                onClick={() => navigate(`/dashbord/activities/edit/${activity._id}`)}
                className="text-green-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(activity._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
