"use client"
import { ChevronRightIcon, HamburgerMenuIcon, HomeIcon, MagnifyingGlassIcon, Cross1Icon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, VercelLogoIcon, DiscordLogoIcon, TwitterLogoIcon, SketchLogoIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import {FacebookIcon, TwitterIcon} from 'next-share'

const SmNavbar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const navOpen = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div className='lg:hidden bg-2 flex flex-wrap justify-between pl-5 mx-auto w-full py-2'>
        <div className='float-left py-3 block'>
            <p className='italic text text-xl font-extrabold'>wpbeginner</p>
        </div>
        <div className='Header-Toggles py-3 pr-4 flex gap-4'>
          <button className='Search Toggle '>
          <MagnifyingGlassIcon className='w-6 h-6 text'/>
          </button>
          {!isOpen?(
            <button className='Hamburger Menu' onClick={navOpen}>
              <HamburgerMenuIcon className='w-6 h-6 text' />
            </button>
          ):(
            <button className='Close Icon' onClick={navOpen}>
              <Cross1Icon className='w-6 h-6 text'/>
            </button>
          )}
        </div>
    </div>
    {isOpen &&(
    <div className='z-50 bg-2 absolute h-full w-full'>
      <ul className='text p-8 flex flex-col gap-4 font-thin divide-y divide-gray-700'>
        <div className="flex justify-between">
          <li className='text-lg font-bold'>Blog</li>
          <button><ChevronRightIcon/></button>
        </div>
        <div className="flex justify-between">
          <li className='text-lg font-bold mt-4'>Start Here</li>
          <button className='mt-4'><ChevronRightIcon/></button>
        </div>
        <div className="flex justify-between">
          <li className='text-lg font-bold mt-4'>Deals</li>
          <button className='mt-4'><ChevronRightIcon/></button>
        </div>
        <div className="flex justify-between">
          <li className='text-lg font-bold mt-4'>Products</li>
          <button className='mt-4'><ChevronRightIcon/></button>
        </div>
        <div className="flex justify-between">
          <li className='text-lg font-bold mt-4'>#Trending</li>
          <button className='mt-4'><ChevronRightIcon/></button>
        </div>
      </ul>
      <div className='header-socials py-7 pl-28'>
          <p className='text pl-9'>Follow Us</p>
          <div className='inline-grid grid-cols-4 gap-4 mt-5'>
            <SketchLogoIcon className='h-6 w-6 text'/>
            <TwitterLogoIcon className='h-6 w-6 text'/>
            <LinkedInLogoIcon className='h-6 w-6 text'/>
            <GitHubLogoIcon className='h-6 w-6 text'/>
            <InstagramLogoIcon className='h-6 w-6 text'/>
            <VercelLogoIcon className='h-6 w-6 text'/>
            <DiscordLogoIcon className='h-6 w-6 text'/>
            <HomeIcon className='h-6 w-6 text'/>
          </div>
      </div>
    </div>)}
    </>
  )
}

export default SmNavbar