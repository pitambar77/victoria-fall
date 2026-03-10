import { useEffect, useState } from "react";
import { getProperties } from "../../api/propertiesApi.js";
import { Link } from "react-router-dom";

export default function PropertiesList() {

  const [properties,setProperties] = useState([]);

  useEffect(()=>{
    loadProperties();
  },[])

  const loadProperties = async ()=>{
    const res = await getProperties();
    setProperties(res.data);
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Properties
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {properties.map((p)=>(
          <div
            key={p._id}
            className="border rounded-lg p-4"
          >

            <h2 className="font-semibold">
              {p.overview?.title}
            </h2>

            <p className="text-sm text-gray-500">
              {p.city}
            </p>

            <Link
              to={`/admin/properties/${p._id}`}
              className="text-blue-600 text-sm"
            >
              Edit
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}