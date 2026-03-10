import { useState } from "react";
import { addHighlight } from "../../api/propertiesApi.js";

export default function HighlightsSection({property}){

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [icon,setIcon] = useState(null);

  const submit = async ()=>{

    const formData = new FormData();

    formData.append("title",title);
    formData.append("description",description);
    formData.append("icon",icon);

    await addHighlight(property._id,formData);

    alert("Highlight added");

  }

  return(
    <div className="border p-6">

      <h2 className="font-bold mb-4">
        Highlights
      </h2>

      <input
        placeholder="Title"
        onChange={(e)=>setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        onChange={(e)=>setDescription(e.target.value)}
      />

      <input
        type="file"
        onChange={(e)=>setIcon(e.target.files[0])}
      />

      <button onClick={submit}>
        Add Highlight
      </button>

    </div>
  )
}