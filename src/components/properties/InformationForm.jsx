import React from "react";

const InformationForm = ({ property, setProperty }) => {

  const addBlock = () => {

    setProperty({
      ...property,
      information: {
        ...property.information,
        info: [
          ...property.information.info,
          {
            type: "paragraph",
            content: ""
          }
        ]
      }
    });

  };


  const changeBlock = (index, field, value) => {

    const updated = [...property.information.info];

    updated[index][field] = value;

    setProperty({
      ...property,
      information: {
        ...property.information,
        info: updated
      }
    });

  };


  const removeBlock = (index) => {

    const updated = property.information.info.filter((_, i) => i !== index);

    setProperty({
      ...property,
      information: {
        ...property.information,
        info: updated
      }
    });

  };


  return (
    <div className="border p-6 space-y-4">

      <h2 className="text-lg font-semibold">
        Information
      </h2>

      {property.information.info.map((block, i) => (

        <div key={i} className="border p-4 space-y-2">

          <select
            value={block.type}
            onChange={(e) =>
              changeBlock(i, "type", e.target.value)
            }
          >
            <option value="header">Header</option>
            <option value="paragraph">Paragraph</option>
            <option value="list">List</option>
          </select>

          {block.type === "list" ? (

            <textarea
              className="border p-2 w-full"
              placeholder="Enter list items separated by comma"
              value={block.content}
              onChange={(e) =>
                changeBlock(i, "content", e.target.value.split(","))
              }
            />

          ) : (

            <textarea
              className="border p-2 w-full"
              placeholder="Content"
              value={block.content}
              onChange={(e) =>
                changeBlock(i, "content", e.target.value)
              }
            />

          )}

          <button
            onClick={() => removeBlock(i)}
            className="text-red-500"
          >
            Remove
          </button>

        </div>

      ))}

      <button
        onClick={addBlock}
        className="bg-gray-200 px-3 py-1 rounded"
      >
        Add Block
      </button>

    </div>
  );
};

export default InformationForm;