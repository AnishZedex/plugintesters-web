import React from 'react'
import Socials from '../Socials'


const Footerpress = () => {
  return (
    <div className='bg-[#2D2520] pt-12 pb-9 mt-10 text-center text-[#9D8C81]'>
        <div className='flex-wrap mx-auto px-6'>
            <p className='font-normal mb-5'>FEATURED IN</p>
            <div className="flex-wrap items-center">
            <Socials/>
            </div>
        </div>
    </div>
  )
}

export default Footerpress