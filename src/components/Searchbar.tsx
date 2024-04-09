import React from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
type SearchBarTypes = {
    style:string
}

const Searchbar = ({style}:SearchBarTypes) => {
  return (
  <div className={`${style} flex gap-2 items-center`}>
    <input placeholder='search input' required className='up rounded-md h-8 px-2 text-gray-800'></input>
    <button className='outline-none border-none bg-transparent up'><MagnifyingGlass size={24} /></button>
  </div>
  ) 
}


export default Searchbar