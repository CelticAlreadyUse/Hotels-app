import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Filters from './components/Filter'
import { firestore, hotelsCollection } from './libs/controller'
import { collection, getDocs } from 'firebase/firestore'
import { NewHotelsTypes } from './types/hotels' 
const Home =  () => {
  const [hotels,setHotels]= useState<NewHotelsTypes[]>([])
  useEffect(()=>{
    const fetchHotels = async()=>{
      const hotelsCollection = await collection(firestore,'hotels')
      const data = await getDocs(hotelsCollection);
      setHotels(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    fetchHotels()
  },[])
  console.log(hotels)

  return (
    <div className='mt-[75px]'>
    <Filters/>
    <div className='flex flex-wrap justify-start '>
    {hotels.map((hotel)=>(
      <Card key={hotel.id} 
      id={hotel.id}
      description={hotel.description}
      feature={hotel.feature}
      img_url={hotel.img_url}
      name={hotel.name}
      pernight={hotel.pernight}
      riview={hotel.riview}
      />
      ))}
      </div>
    </div>
  )
}

export default Home