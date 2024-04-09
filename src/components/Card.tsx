import React from 'react'
import CustomButtons from './CustomButtons'

const Card = () => {
  return (
    <div className='relative flex-wrap grid place-content-center place-items-center   w-full h-full border-solid border-black'>
       <img src="/assets/adobestock-539646437.jpg" 
       className='w-[90%] rounded-md object-cover'/>
       <div className='ml-4'>
       <h1  className='font-medium text-2xl font-[Poppins,sans-serif]'>
            name
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quod ducimus qui ipsa. Corrupti optio nemo facere magni ipsam ab eum dignissimos</p>
    <div className='flex w-full justify-end '>
     <CustomButtons  title='Detail' customStyle='bg-green-700 text-gray-200 mr-4'/>
    </div>
       </div>
    </div>
  )
}

export default Card