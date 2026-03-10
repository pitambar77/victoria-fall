import { useState } from "react";
import { addGalleryImage } from "../../api/propertiesApi.js";

export default function GallerySection({property}){

  const [file,setFile] = useState(null);
  const [name,setName] = useState("");

  const upload = async ()=>{

    const formData = new FormData();

    formData.append("image",file);
    formData.append("imageName",name);

    await addGalleryImage(property._id,formData);

    alert("Image uploaded")

  }

  return(

    <div className="border p-6">

      <h2 className="font-bold mb-4">
        Gallery
      </h2>

      <input
        placeholder="Image Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="file"
        onChange={(e)=>setFile(e.target.files[0])}
      />

      <button onClick={upload}>
        Upload
      </button>

    </div>

  )

}