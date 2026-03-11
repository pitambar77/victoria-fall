import { useState } from "react";
import { addRoom, updateRoom, deleteRoom } from "../../api/propertiesApi";

export default function RoomsSection({ property, setProperty }) {

  const [bedroomName, setBedroomName] = useState("");
  const [bed, setBed] = useState("");
  const [icon, setIcon] = useState(null);

  /* ======================
     ADD ROOM
  ====================== */

  const submitRoom = async () => {

    const formData = new FormData();

    formData.append("bedroomName", bedroomName);
    formData.append("bed", bed);
    formData.append("icon", icon);

    const res = await addRoom(property._id, formData);

    setProperty(res.data);

    setBedroomName("");
    setBed("");
    setIcon(null);

  };

  /* ======================
     UPDATE ROOM
  ====================== */

  const updateRoomItem = async (room) => {

    const formData = new FormData();

    formData.append("bedroomName", room.bedroomName);
    formData.append("bed", room.bed);

    if (room.newIcon) {
      formData.append("icon", room.newIcon);
    }

    const res = await updateRoom(
      property._id,
      room._id,
      formData
    );

    setProperty(res.data);

  };

  /* ======================
     DELETE ROOM
  ====================== */

  const removeRoom = async (roomId) => {

    const res = await deleteRoom(property._id, roomId);

    setProperty(res.data);

  };

  /* ======================
     CHANGE ROOM FIELD
  ====================== */

  const changeRoom = (index, field, value) => {

    const updated = [...property.rooms];

    updated[index][field] = value;

    setProperty({
      ...property,
      rooms: updated
    });

  };

  const changeIcon = (index, file) => {

    const updated = [...property.rooms];

    updated[index].newIcon = file;

    setProperty({
      ...property,
      rooms: updated
    });

  };

  return (

    <div className="space-y-8">

      {/* EXISTING ROOMS */}

      <div className="border p-6 rounded space-y-4">

        <h2 className="font-bold text-lg">
          Rooms
        </h2>

        {property.rooms?.map((room, i) => (

          <div key={room._id} className="border p-4 rounded space-y-2">

            <input
              className="border p-2 w-full"
              value={room.bedroomName}
              onChange={(e) =>
                changeRoom(i, "bedroomName", e.target.value)
              }
            />

            <input
              className="border p-2 w-full"
              value={room.bed}
              onChange={(e) =>
                changeRoom(i, "bed", e.target.value)
              }
            />

            {room.icon && (
              <img
                src={room.icon}
                className="w-12 h-12 object-cover"
              />
            )}

            <input
              type="file"
              onChange={(e) =>
                changeIcon(i, e.target.files[0])
              }
            />

            <div className="flex gap-3">

              <button
                onClick={() => updateRoomItem(room)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeRoom(room._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* ADD ROOM */}

      <div className="border p-6 rounded space-y-3">

        <h2 className="font-bold">
          Add Room
        </h2>

        <input
          className="border p-2 w-full"
          placeholder="Bedroom Name"
          value={bedroomName}
          onChange={(e) => setBedroomName(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Bed Type (King / Queen / Twin)"
          value={bed}
          onChange={(e) => setBed(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setIcon(e.target.files[0])}
        />

        <button
          onClick={submitRoom}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Room
        </button>

      </div>

    </div>

  );

}