// import React, { useState, useEffect } from "react";
// import { getActivities, deleteActivity } from "../../api/activityApi";
// import { useNavigate } from "react-router-dom";

// const ActivityList = () => {
//   const [activities, setActivities] = useState([]);
//   const navigate = useNavigate();

//   const fetchActivities = async () => {
//     try {
//       const res = await getActivities();
//       setActivities(res.data);
//     } catch (err) {
//       console.error("Error fetching activities:", err);
//     }
//   };

//   useEffect(() => {
//     fetchActivities();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this activity?")) return;
//     try {
//       await deleteActivity(id);
//       fetchActivities();
//     } catch (err) {
//       console.error("Error deleting activity:", err);
//     }
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto ">
//       <div className=" flex justify-between">
//  <h2 className="text-2xl font-bold mb-4">All Activities</h2>
//       <button
//         onClick={() => navigate("/dashbord/activities/add")}
//         className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         + Create Activity
//       </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {activities.map((activity) => (
//           <div key={activity._id} className="border border-gray-300 rounded-md rounded p-4 shadow hover:shadow-lg transition">
//             <img
//               src={activity.banner[0].bannerImage}
//               alt={activity.activityName}
//               className="w-full h-40 object-cover rounded mb-2"
//             />
//             <h3 className="text-lg font-semibold">{activity.activityName}</h3>
//             <p className="text-sm text-gray-600">Price: ₹{activity.pricePerPerson}</p>
//             <div className="flex justify-between mt-2">
//               <button
//                 onClick={() => navigate(`/dashbord/activities/${activity._id}`)}
//                 className="text-blue-600 hover:underline"
//               >
//                 View
//               </button>
//               <button
//                 onClick={() => navigate(`/dashbord/activities/edit/${activity._id}`)}
//                 className="text-green-600 hover:underline"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(activity._id)}
//                 className="text-red-600 hover:underline"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ActivityList;

import { useEffect, useState } from "react";
import { getActivities, deleteActivity } from "../../api/activityApi";
import { Link, useNavigate } from "react-router-dom";

export default function ActivityList() {
  const [activities, setActivities] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const itemsPerPage = 5;

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    const res = await getActivities();
    setActivities(res.data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this activity?");
    if (!confirmDelete) return;

    await deleteActivity(id);

    setActivities(activities.filter((a) => a._id !== id));
  };

  /* ======================
     SEARCH FILTER
  ====================== */

  const filtered = activities.filter((a) =>
    a.activityName?.toLowerCase().includes(search.toLowerCase()),
  );

  /* ======================
     PAGINATION
  ====================== */

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentData = filtered.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Activities</h1>

        <div className="flex gap-4">
          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search Activities"
            className="border border-gray-300 p-2 rounded w-[250px]"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />

          <button
            onClick={() => navigate("/dashbord/activities/add")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Create Activity
          </button>
        </div>
      </div>

      {/* TABLE */}

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-400 bg-gray-50 text-left text-sm text-gray-600">
            <tr>
              <th className="p-4">Photo</th>
              <th className="p-4">Activity</th>
              <th className="p-4">Destination</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((activity) => (
              <tr
                key={activity._id}
                className="border-b border-gray-300 hover:bg-gray-50"
              >
                {/* PHOTO */}

                <td className="p-4">
                  <img
                    src={activity.banner?.[0]?.bannerImage}
                    className="w-28 h-20 object-cover rounded"
                  />
                </td>

                {/* ACTIVITY INFO */}

                <td className="p-4">
                  <h2 className="font-semibold text-lg">
                    {activity.activityName}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {activity.shortDescription?.slice(0, 60)}...
                  </p>
                </td>

                {/* DESTINATION */}

                <td className="p-4 text-gray-600">
                  {activity.destination?.name || "Unknown"}
                </td>

                {/* PRICE */}

                <td className="p-4 text-green-600 font-semibold">
                  ₹{activity.pricePerPerson}
                </td>

                {/* ACTIONS */}

                <td className="p-4">
                  <div className="flex gap-4 text-sm">
                    {/* <Link
                      to={`/dashbord/activities/${activity._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </Link> */}

                    <Link
                      to={`/dashbord/activities/edit/${activity._id}`}
                      className="text-green-600 hover:underline"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(activity._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}

      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-600">
          Showing {indexOfFirst + 1} - {Math.min(indexOfLast, filtered.length)}{" "}
          of {filtered.length}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-[#ab8c51] text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
