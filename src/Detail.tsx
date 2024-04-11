import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from './libs/controller'
import { NewHotelsTypes } from './types/hotels'
import { Carousel } from 'flowbite-react'


const Detail = ({}) => {
  const [hotel,setHotels] = useState<NewHotelsTypes[] >([])
    const {id} = useParams()
    const getHotelsId = async()=>{
        const hotelsCollection = collection(firestore,'hotels')
      const  docRef = doc(hotelsCollection,id)
      const docSnap = await getDoc(docRef)
      setHotels([docSnap.data() as NewHotelsTypes])
      console.log(hotel)
    }
    useEffect(()=>{
      getHotelsId()
    },[])
    return (
    <div className='mt-[80px]'>
      <Carousel>
    {hotel.map((hotel) => (
      Array.isArray(hotel.img_url) ? 
        hotel.img_url.map((url) =>
        <>
        <img className='w-full' width={2500} height={2500} key={url} src={url}></img>
        </>
        )  :
        <img src={hotel.img_url}></img>
    ))}
    </Carousel>
    {hotel.map((hotel)=>(
      <>
              <p>{hotel.name}</p>
        <p>{hotel.pernight}</p>
        <p>{hotel.location}</p>
        <p>{hotel.description}</p>
        <p>{hotel.feature}</p>
        <p>{hotel.region}</p>
        <p>{hotel.website}</p>
        <p>{hotel.riview}</p>
        </>
    ))}

    </div>
  )
}

export default Detail