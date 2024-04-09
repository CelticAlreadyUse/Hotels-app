import React, { useState } from 'react'
import Searchbar from './Searchbar'
import { List } from '@phosphor-icons/react'
import { Sidebar } from 'flowbite-react'

const Navigation = () => {
  const [isOpen,setIsopen] = useState<boolean>(false)
  return (
    <>
    <div className='flex fixed top-0 right-0 z-20 up text-white items-center justify-between px-3 py-4 bg-blue-700 w-full'>
      <h1 className='mr-3  titleHover up font-semibold font-sans text-2xl fonts'>Logo</h1>
    <div className=' lg:flex md:scale-75 hidden up'>
      <Searchbar style={'mr-5'}/>
      <div >
        <div>
          <h1>Anemous Slauctha </h1>
          <div className='flex gap-2'>
          <p className='font-sm text-gray-500'>UID:96430410</p>
          <p className='ml-2 font-semibold px-2 py-1 bg-orange-500 text-sm mr-1 rounded-sm'>Admin</p>
          </div>
        </div>
      </div>
      <div className='w-12 h-12 rounded-full bg-white'></div>
    </div>
      <div onClick={()=>setIsopen(!isOpen)} className='block Lefts md:hidden lg:hidden'> 
      <List  size={24} />
      </div>
  </div>

  <Sidebar  className={`${isOpen !=false ?  'block bg-blue-800': 'hidden' } -z-10 bg-blue-800 w-full md:hidden up  lg:hidden`} >
      <Sidebar.Items >
        <Sidebar.ItemGroup>
          <Sidebar.Item  href="#">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#">
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" >
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" >
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" >
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#">
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#">
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </>
  )
}

export default Navigation