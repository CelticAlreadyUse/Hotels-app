import { Funnel } from '@phosphor-icons/react'
import { Label, Select, TextInput } from 'flowbite-react'
import React, { useState } from 'react'

const Filter = () => {
    const [rangeValue,setRangeValue] = useState<number>(0)
    const [isOpen,setIsopen] = useState<boolean>(false)
  return (
    <>
    <div className='flex w-full justify-end mr-4'>
        <button onClick={()=>setIsopen(!isOpen)}>
    <Funnel className='mr-3 mt-2' color='#042459'weight='bold' size={24} />
            </button>
    </div>
    <div className={`ml-4  mb-2 ${isOpen !== false ? 'block up' : 'hidden'}`}> 
        <h1 className='font-bold'>Filters</h1> 
            <Label>Region</Label>
        <Select>
            <option>Indonesia</option>
        </Select>
        <div className='grid'>
            <h1 className='font-medium'>Prices</h1>
            <div>
      <span>Rp</span>
       <input className='' type='number' value={rangeValue}  onChange={(e)=>setRangeValue(e.currentTarget.valueAsNumber)}></input>
            <span>000,00</span>
            </div>
            <input className='w-72 rounded-none ' type='range'min={0}  max={5000} value={rangeValue} onChange={(e)=>setRangeValue(e.currentTarget.valueAsNumber)}></input>
            </div>
        </div>
    </>
  )
}

export default Filter