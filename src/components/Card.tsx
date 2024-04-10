import React from 'react'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom'
import Stars from './Stars'
import { NewHotelsTypes } from '../types/hotels'
const Card = ({id,name,description,img_url,pernight,riview}:NewHotelsTypes) => {
  return (
    <div className='mb-2 relative flex-wrap grid place-content-center place-items-center  w-full md:w-[400px] h-full border-solid border-black'>
       <img src={img_url?img_url[0]:''} 
       className='w-[90%] rounded-md object-cover'/>
       <div className='ml-4'>
       <h1  className='font-medium text-2xl font-[Poppins,sans-serif]'>
        {name}
      
        </h1>
        <p><Stars/></p>
        <p>{description}</p>
    <div className='flex w-full items-center justify-between '>
      <div>
      <p className='tracking-wider p-2 bg-green-500 text-gray-300 rounded-md'>Rp{pernight}/Pernight</p>
 
      </div>
      <Link to={`/hotel/${id}`}>
     <CustomButtons  title='Detail' customStyle='bg-green-700  text-gray-200 mr-4'/>
      </Link>
    </div>
       </div>
    </div>
  )
}

export default Card