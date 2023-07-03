import React from 'react'
import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, VercelLogoIcon, DiscordLogoIcon, TwitterLogoIcon, SketchLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

const Socials = () => {
  return (
    <div className='pl-5 grid grid-cols-4 gap-4'>
        <SketchLogoIcon className='h-7 w-7 text-[#8b8929]'/>
        <TwitterLogoIcon className='h-7 w-7 text-[#33f1fe]'/>
        <LinkedInLogoIcon className='h-7 w-7 text-[#4194f3]'/>
        <GitHubLogoIcon className='h-7 w-7 text-[#000]'/>
        <InstagramLogoIcon className='h-7 w-7 text-[#dc3c3c]'/>
        <VercelLogoIcon className='h-7 w-7 text-[#000]'/>
        <DiscordLogoIcon className='h-7 w-7 text-[#3551a4]'/>
        <EnvelopeClosedIcon className='h-7 w-7 text-[#4ff378]'/>
    </div>
  )
}

export default Socials