import React from 'react'
import Socials from '../Socials'
import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, VercelLogoIcon, DiscordLogoIcon, TwitterLogoIcon, SketchLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'


const Footersocial = () => {
  return (
    <div className='bg-[#2D2520] pt-12 pb-9 mt-10 text-center text-[#9D8C81] '>
        <div className='flex-wrap mx-auto px-6'>
            <p className='font-normal mb-5'>FEATURED IN</p>
            <div className="flex-wrap items-center">
            <div className='pl-8 grid grid-cols-4 gap-4 md:flex md:flex-wrap md:justify-center md:gap-16 lg:gap-24 xl:gap-32'>
              <SketchLogoIcon className='h-7 w-7 text-[#8b8929]'/>
              <TwitterLogoIcon className='h-7 w-7 text-[#33f1fe]'/>
              <LinkedInLogoIcon className='h-7 w-7 text-[#4194f3]'/>
              <GitHubLogoIcon className='h-7 w-7 text-[#000]'/>
              <InstagramLogoIcon className='h-7 w-7 text-[#dc3c3c]'/>
              <VercelLogoIcon className='h-7 w-7 text-[#000]'/>
              <DiscordLogoIcon className='h-7 w-7 text-[#3551a4]'/>
              <EnvelopeClosedIcon className='h-7 w-7 text-[#4ff378]'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footersocial