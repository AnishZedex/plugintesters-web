"use client"
import React, { useState } from 'react'
import { ChevronRightIcon, HamburgerMenuIcon, HomeIcon, MagnifyingGlassIcon, Cross1Icon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, VercelLogoIcon, DiscordLogoIcon, TwitterLogoIcon, SketchLogoIcon, ArrowDownIcon, ChevronDownIcon } from '@radix-ui/react-icons'

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const navOpen = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <nav className=''>
      <div className='flex bg-2 justify-between md:justify-around items-center py-2 w-full mx-auto px-4 text md:px-14'>
        <a href='/'className='italic text-xl font-extrabold'>wpbeginner</a>
        <ul className='hidden md:flex py-3 gap-6 font-semibold'>
          <div className='flex gap-1'>
            <li>Blog</li>
            <button><ChevronDownIcon/></button>
          </div>
          <div className='flex gap-1'>
            <li>Start Here</li>
            <button><ChevronDownIcon/></button>
          </div>
          <div className='flex gap-1'>
            <li>Deals</li>
            <button><ChevronDownIcon/></button>
          </div>
          <div className='flex gap-1'>
            <li>Products</li>
            <button><ChevronDownIcon/></button>
          </div>
          <div className='flex gap-1'>
            <li>#Trending</li>
            <button><ChevronDownIcon/></button>
          </div>
        </ul>
        <div className='hidden md:flex'>
          <button className='Search Toggle py-3'>
            <MagnifyingGlassIcon className='w-6 h-6 text'/>
          </button>
        </div>
        <div className='Header-Toggles py-3 pr-4 flex gap-4 md:hidden'>
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
        {isOpen &&(
        <div className='fixed bg-2 top-12 z-10 left-0 h-full w-[100%] md:hidden'>
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
          <div className='header-socials '>
            <p className='text text-center'>Follow Us</p>
            <div className='flex gap-2 mt-5 ml-10'>
            <SketchLogoIcon className='h-7 w-7 text'/>
            <TwitterLogoIcon className='h-7 w-7 text'/>
            <LinkedInLogoIcon className='h-7 w-7 text'/>
            <GitHubLogoIcon className='h-7 w-7 text'/>
            <InstagramLogoIcon className='h-7 w-7 text'/>
            <VercelLogoIcon className='h-7 w-7 text'/>
            <DiscordLogoIcon className='h-7 w-7 text'/>
            <HomeIcon className='h-7 w-7 text'/>
            </div>
        </div>
        </div>)}
      </div>
    </nav>
  )
}

export default Navbar