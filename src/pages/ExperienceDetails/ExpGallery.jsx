// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import Gallery from '../../components/Gallery'

// export default function ModalGallery() {
// const [activity, setActivity] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/api/activities/${id}`)
//       .then((res) => setActivity(res.data))
//       .catch(console.error);
//   }, [id]);

//   if (!activity) return <p className="p-6">Loading...</p>;
//   if (!activity.galleryImages || activity.galleryImages.length === 0)
//     return <p className="p-6">No images available.</p>;

//   const images = activity.galleryImages; // ✅ use backend images

//   console.log(images);

 

//   return (
   
//     <div>
//       <Gallery
//       title={activity.activityName}
//         images={images}
//         buttonText="VIEW ACCOMMODATION →"
//         showButton={true}
//       />
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Gallery from "../../components/Gallery";

const BASE_URL = "http://localhost:8000";

export default function ModalGallery() {
  const { slug } = useParams();
  const [activity, setActivity] = useState(null);

  console.log("Route ID:", slug);

  useEffect(() => {
    if (!slug) return;

    axios
      .get(`http://localhost:8000/api/activities/slug/${slug}`)
      .then((res) => {
        console.log("API Response:", res.data);
        setActivity(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, [slug]);

  if (!activity) return <p className="p-6">Loading...</p>;

  if (!activity.galleryImages?.length)
    return <p className="p-6">No images available.</p>;

  const images = activity.galleryImages.map((img) =>
    img.startsWith("http") ? img : `${BASE_URL}/${img}`
  );

  return (
    <Gallery
      title={activity.activityName}
      images={images}
      buttonText="VIEW ACCOMMODATION →"
      showButton
    />
  );
}
