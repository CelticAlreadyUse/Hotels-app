import React from 'react'

type CustomButtonsProps ={
    title?:string,
    customStyle?:string,
    links?:string
}
const CustomButtons = ({title,customStyle,links}:CustomButtonsProps) => {    
  return (
    <>
    <button 
    className={`font-[Poppins,sans-serif] font-medium text-sm
    px-2 py-2 rounded-lg ${customStyle ? customStyle:'bg-blue-500 text-white tracking-wider'}`}>
 {title}
    </button>
    </>
  )
}

export default CustomButtons