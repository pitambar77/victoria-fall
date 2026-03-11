import { useState, useEffect } from "react";
import axios from "axios";
import { updateOverviewMeta } from "../../api/propertiesApi.js";
import { updateOverview } from "../../api/propertiesApi";
import { deleteOverviewBlock } from "../../api/propertiesApi";

export default function OverviewSection({ property, setProperty }) {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    landingsubcontent: "",
    description: [],
  });

  /* =========================
     PREFILL FORM WHEN PROPERTY LOADS
  ========================= */

  useEffect(() => {
    if (!property) return;

    setForm({
      title: property.overview?.title ?? "",
      subTitle: property.overview?.subTitle ?? "",
      landingsubcontent: property.overview?.landingsubcontent ?? "",
      description: property.overview?.description ?? [],
    });
  }, [property]);

  /* =========================
     HANDLE INPUT CHANGE
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     ADD PARAGRAPH
  ========================= */

  const addParagraph = () => {
    setForm((prev) => ({
      ...prev,
      description: [...prev.description, { type: "paragraph", content: "" }],
    }));
  };

  /* =========================
     UPDATE PARAGRAPH
  ========================= */

  const updateParagraph = (index, value) => {
    setForm((prev) => {
      const updated = [...prev.description];
      updated[index].content = value;

      return {
        ...prev,
        description: updated,
      };
    });
  };

  /* =========================
     DELETE PARAGRAPH
  ========================= */

  const deleteParagraph = async (block, index) => {
    try {
      if (block._id) {
        await deleteOverviewBlock(property._id, block._id);
      }

      setForm((prev) => ({
        ...prev,
        description: prev.description.filter((_, i) => i !== index),
      }));
    } catch (err) {
      console.error(err);
    }
  };

  /* =========================
     SAVE OVERVIEW
  ========================= */

  const saveOverview = async () => {
    try {
      await updateOverviewMeta(property._id, {
        title: form.title,
        subTitle: form.subTitle,
        landingsubcontent: form.landingsubcontent,
      });

      // await axios.put(`/api/property/${property._id}/overview`, {
      //   overview: {
      //     ...property.overview,
      //     description: form.description
      //   }
      // });
      await updateOverview(property._id, {
        overview: {
          ...property.overview,
          description: form.description,
        },
      });

      setProperty((prev) => ({
        ...prev,
        overview: form,
      }));

      alert("Overview updated ✅");
    } catch (err) {
      console.error(err);
    }
  };

  if (!property) return null;

  return (
    <div className="border p-6 rounded-lg space-y-4">
      <h2 className="font-bold text-lg">Overview</h2>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 w-full"
      />

      <input
        name="subTitle"
        value={form.subTitle}
        onChange={handleChange}
        placeholder="Subtitle"
        className="border p-2 w-full"
      />

      <textarea
        name="landingsubcontent"
        value={form.landingsubcontent}
        onChange={handleChange}
        placeholder="Landing Content"
        className="border p-2 w-full"
      />

      <button onClick={addParagraph} className="bg-gray-200 px-3 py-1">
        Add Paragraph
      </button>

      {form.description.map((block, index) => (
        <div key={block._id || index} className="space-y-2">
          <textarea
            value={block.content}
            placeholder="Paragraph"
            className="border p-2 w-full"
            onChange={(e) => updateParagraph(index, e.target.value)}
          />

          <button
            onClick={() => deleteParagraph(block, index)}
            className="text-red-500 text-sm"
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={saveOverview}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Overview
      </button>
    </div>
  );
}
