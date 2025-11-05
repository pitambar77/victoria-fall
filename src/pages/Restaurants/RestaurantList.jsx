

import React, { useEffect, useState } from "react";
import { getRestaurants, deleteRestaurant } from "../../api/restaurantApi";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  const loadRestaurants = async () => {
    const res = await getRestaurants();
    setRestaurants(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      await deleteRestaurant(id);
      loadRestaurants();
    }
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Restaurants</h2>
        <Link
          to="/dashbord/restaurants/add"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add New
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {restaurants.map((r) => (
          <div
            key={r._id}
            className="bg-white shadow rounded-lg overflow-hidden border"
          >
            <img
              src={r.bannerImage}
              alt={r.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{r.name}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {r.overview}
              </p>
              <p className="text-gray-600 text-sm">{r.contactNumber}</p>
              <p className="text-gray-600 text-sm">{r.priceperPerson}</p>

              <div className="flex justify-between mt-3">
                <Link
                  to={`/dashbord/restaurants/edit/${r._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(r._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
                            <Link
                to={`/dashbord/restaurants/${r._id}`}
                className="text-blue-600 mt-2 inline-block"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
