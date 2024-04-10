import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from './libs/controller'
import { NewHotelsTypes } from './types/hotels'


const Detail = ({}) => {
  const [hotel,setHotels] = useState<NewHotelsTypes[]>([])
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
    <div className='mt-[80px] ml'>Detail {id}
    <img src={hotel[0]?.img_url?hotel[0].img_url[0]:''}></img>
    </div>
  )
}

export default Detail