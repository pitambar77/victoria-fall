// // src/context/DataContext.js
// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [properties, setProperties] = useState([]);
// //   const [activities, setActivities] = useState([]);
// //   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch all APIs in parallel
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const [propertiesRes] = await Promise.all([
//           axios.get("http://localhost:8000/api/properties"),
//         //   axios.get("http://localhost:8000/api/activities"),
//         //   axios.get("http://localhost:8000/api/restaurants"),
//         ]);

//         setProperties(propertiesRes.data.items);
//         // setActivities(activitiesRes.data);
//         // setRestaurants(restaurantsRes.data);
//       } catch (error) {
//         console.error("Error fetching API data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <DataContext.Provider value={{ properties, loading }}>
//       {children}
//     </DataContext.Provider>
//   );
// };
