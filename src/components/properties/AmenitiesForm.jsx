export default function AmenitiesForm({property,setProperty}){

  const addAmenity = ()=>{

    setProperty({
      ...property,
      aminities:{
        ...property.aminities,
        basic:[
          ...property.aminities.basic,
          {aminityName:""}
        ]
      }
    })

  }

  return(

    <div>

      <h2>Amenities</h2>

      {property.aminities.basic.map((a,i)=>(
        <input key={i} placeholder="Amenity"/>
      ))}

      <button onClick={addAmenity}>
        Add Amenity
      </button>

    </div>

  )

}