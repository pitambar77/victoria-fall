export default function RoomsForm({ property, setProperty }) {
  /* =====================
     ADD ROOM
  ===================== */

  const addRoom = () => {
    setProperty({
      ...property,
      rooms: [
        ...property.rooms,
        {
          bedroomName: "",
          bed: "",
          icon: "",
        },
      ],
    });
  };

  /* =====================
     HANDLE CHANGE
  ===================== */

  const handleChange = (index, field, value) => {
    const updated = [...property.rooms];

    updated[index][field] = value;

    setProperty({
      ...property,
      rooms: updated,
    });
  };

  /* =====================
     REMOVE ROOM
  ===================== */

  const removeRoom = (index) => {
    const updated = property.rooms.filter((_, i) => i !== index);

    setProperty({
      ...property,
      rooms: updated,
    });
  };

  return (
    <div className="border p-6 space-y-4">
      <h2 className="text-lg font-semibold">Rooms</h2>

      {property.rooms.map((room, i) => (
        <div key={i} className="border p-4 rounded space-y-2">
          <input
            className="border p-2 w-full"
            placeholder="Bedroom Name"
            value={room.bedroomName}
            onChange={(e) => handleChange(i, "bedroomName", e.target.value)}
          />

          <input
            className="border p-2 w-full"
            placeholder="Bed Type (King / Queen / Twin)"
            value={room.bed}
            onChange={(e) => handleChange(i, "bed", e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => handleChange(i, "icon", e.target.files[0])}
          />

          <button
            onClick={() => removeRoom(i)}
            className="text-red-500 text-sm"
          >
            Remove Room
          </button>
        </div>
      ))}

      <button onClick={addRoom} className="bg-gray-200 px-3 py-1 rounded">
        Add Room
      </button>
    </div>
  );
}
