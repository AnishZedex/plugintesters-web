"use client"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

const LgNavbar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const navOpen = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
        <div className=" bg-2 flex flex-wrap sm:justify-between lg:justify-around pl-5 mx-auto w-full py-2 ">
            <div className='float-left py-3 block'>
                <p className='italic text text-xl font-extrabold'>wpbeginner</p>
            </div>
            <ul className='text flex py-3 gap-6'>
                <li className='font-semibold'>Blog</li>
                <li className='font-semibold'>Start Here</li>
                <li className='font-semibold'>Deals</li>
                <li className='font-semibold'>Products</li>
                <li className='font-semibold'>#Trending</li>
            </ul>
            <div>
            <button className='Search Toggle py-3'>
                <MagnifyingGlassIcon className='w-6 h-6 text'/>
            </button>
            </div>
            </div>
    </>
  )
}

export default LgNavbar