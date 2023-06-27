import { CameraIcon, DesktopIcon, EnvelopeOpenIcon, LapTimerIcon, Pencil2Icon, PersonIcon } from '@radix-ui/react-icons'
import React from 'react'

const SearchPillar = () => {
  return (
    <>
    <div className='flex'>
    <div className='hidden lg:block text-sm break-words my-10'>
        Popular Searches:
    </div>
    <div className='w-full grid grid-cols-3 gap-8 mx-auto my-8 md:gap-4'>
    <div className='flex flex-col gap-1 lg:flex-row lg:gap-3'>
        <Pencil2Icon className='text-green-600 w-7 h-7 mb-2 ml-4 md:w-5 md:h-5 md:mb-0'/>
        <h1 className='text-center text-sm hover:text-orange-600 font-medium'>Starting a blog</h1>
    </div>
    <div className='flex flex-col gap-1 lg:flex-row lg:gap-3'>
        <CameraIcon className='text-cyan-600 w-7 h-7 mb-2 ml-4 md:w-5 md:h-5 md:mb-0'/>
        <h1 className='text-center text-sm hover:text-orange-600 font-medium'>WordPress SEO</h1>
    </div>
    <div className='flex flex-col gap-1 lg:flex-row lg:gap-3'>
        <EnvelopeOpenIcon className='text-red-600 w-7 h-7 mb-2 ml-4 md:w-5 md:h-5 md:mb-0'/>
        <h1 className='text-center text-sm hover:text-orange-600 font-medium'>WordPress Performance</h1>
    </div>
    <div className='flex flex-col gap-1 lg:flex-row lg:gap-3'>
        <LapTimerIcon className='text-yellow-400 w-7 h-7 mb-2 ml-4 md:w-5 md:h-5 md:mb-0'/>
        <h1 className='text-center text-sm hover:text-orange-600 font-medium'>WordPress Errors</h1>
    </div>
    <div className='flex flex-col gap-1 lg:flex-row lg:gap-3'>
        <PersonIcon className='text-cyan-600 w-7 h-7 mb-2 ml-4 md:w-5 md:h-5 md:mb-0'/>
        <h1 className='text-center text-sm hover:text-orange-600 font-medium'>WordPress Security</h1>
    </div>
    <div className='flex flex-col gap-1 lg:flex-row lg:gap-3'>
        <DesktopIcon className='text-green-600 w-7 h-7 mb-2 ml-4 md:w-5 md:h-5 md:mb-0'/>
        <h1 className='text-center text-sm hover:text-orange-600 font-medium'>Building an Online Store</h1>
    </div>
    </div>
    </div>
    </>
  )
}

export default SearchPillar