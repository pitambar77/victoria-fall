export default function HighlightsForm({ property, setProperty }) {
  const addHighlight = () => {
    setProperty({
      ...property,
      highlights: [
        ...property.highlights,
        { title: "", description: "", icon: "" },
      ],
    });
  };

  const handleChange = (index, field, value) => {
    const updated = [...property.highlights];

    updated[index][field] = value;

    setProperty({
      ...property,
      highlights: updated,
    });
  };

  const handleIcon = (index, file) => {
    const updated = [...property.highlights];

    updated[index].icon = file;

    setProperty({
      ...property,
      highlights: updated,
    });
  };

  const removeHighlight = (index) => {
    const updated = property.highlights.filter((_, i) => i !== index);

    setProperty({
      ...property,
      highlights: updated,
    });
  };

  return (
    <div className="border p-6 space-y-4">
      <h2 className="text-lg font-semibold">Highlights</h2>

      {property.highlights.map((highlight, i) => (
        <div key={i} className="border p-4 rounded space-y-2">
          <input
            className="border p-2 w-full"
            placeholder="Title"
            value={highlight.title}
            onChange={(e) => handleChange(i, "title", e.target.value)}
          />

          <input
            className="border p-2 w-full"
            placeholder="Description"
            value={highlight.description}
            onChange={(e) => handleChange(i, "description", e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => handleIcon(i, e.target.files[0])}
          />

          <button
            onClick={() => removeHighlight(i)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={addHighlight} className="bg-gray-200 px-3 py-1 rounded">
        Add Highlight
      </button>
    </div>
  );
}
