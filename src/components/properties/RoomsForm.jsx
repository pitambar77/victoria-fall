export default function RoomsForm({property,setProperty}){

  const addRoom = ()=>{

    setProperty({
      ...property,
      rooms:[
        ...property.rooms,
        {bedroomName:"",bed:""}
      ]
    })

  }

  return(

    <div>

      <h2>Rooms</h2>

      {property.rooms.map((room,i)=>(
        <div key={i}>

          <input placeholder="Bedroom Name"/>
          <input placeholder="Bed Type"/>

        </div>
      ))}

      <button onClick={addRoom}>
        Add Room
      </button>

    </div>

  )

}