import { useState } from "react";
import { updateOverviewMeta } from "../../api/propertiesApi.js";

export default function OverviewSection({property}){

  const [form,setForm] = useState({
    title: property.overview?.title || "",
    subTitle: property.overview?.subTitle || "",
    landingsubcontent: property.overview?.landingsubcontent || ""
  })

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async ()=>{

    await updateOverviewMeta(property._id,form);

    alert("Updated")

  }

  return(
    <div className="border p-6 rounded-lg">

      <h2 className="font-bold mb-4">
        Overview
      </h2>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="input"
      />

      <input
        name="subTitle"
        value={form.subTitle}
        onChange={handleChange}
        placeholder="Subtitle"
        className="input"
      />

      <textarea
        name="landingsubcontent"
        value={form.landingsubcontent}
        onChange={handleChange}
        placeholder="Landing content"
        className="input"
      />

      <button
        onClick={handleSubmit}
        className="btn"
      >
        Save
      </button>

    </div>
  )
}


