import React from 'react'
import Image from 'next/image'
import sVimage from '../../../../public/images/7-best-wordpress-backup-plugins-compared-pros-and-cons-thumb.png'
import lazyImage from '../../../../public/images/startablog.png'
import lazy1 from '../../../../public/images/Screenshot 2023-06-28 012459.png'
import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, VercelLogoIcon, DiscordLogoIcon, TwitterLogoIcon, SketchLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'


const Blogs = () => {
  return (
    <div className='overflow-hidden mx-auto break-words xl:grid xl:gap-8 xl:grid-cols-[minmax(0,_1fr)_300px]'>
        <div className='mb-4 bg-white py-10 px-6 lg:px-12 lg:'>
        <p className='text-gray-500 font-semibold uppercase mb-2 text-sm'>new on blog</p>
        <h1 className='font-bold text-gray-700 text-2xl mb-6 hover:text-3'><a href="/">7 Best WordPress Backup Plugins Compared (Pros and Cons)</a></h1>
        <div className="flex gap-4 mb-6">
          <Image 
          src={sVimage} 
          alt=''
          className='h-[180px] w-[180px]'
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium modi harum sapiente? Quibusdam expedita nesciunt tenetur illo, nulla ex? Expedita minus reiciendis eligendi distinctio, quidem voluptatem est doloremque quia exercitationem amet, consectetur rerum excepturi voluptatibus voluptatum porro, neque dolorem ratione harum? Labore enim quis illum voluptatum repellendus cupiditate eos.
          </p>
        </div>
        <div className="flex gap-4 mb-6">
          <Image 
          src={sVimage} 
          alt=''
          className='h-[180px] w-[180px]'
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium modi harum sapiente? Quibusdam expedita nesciunt tenetur illo, nulla ex? Expedita minus reiciendis eligendi distinctio, quidem voluptatem est doloremque quia exercitationem amet, consectetur rerum excepturi voluptatibus voluptatum porro, neque dolorem ratione harum? Labore enim quis illum voluptatum repellendus cupiditate eos.
          </p>
        </div>
        <div className="flex gap-4">
          <Image 
          src={sVimage} 
          alt=''
          className='h-[180px] w-[180px]'
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium modi harum sapiente? Quibusdam expedita nesciunt tenetur illo, nulla ex? Expedita minus reiciendis eligendi distinctio, quidem voluptatem est doloremque quia exercitationem amet, consectetur rerum excepturi voluptatibus voluptatum porro, neque dolorem ratione harum? Labore enim quis illum voluptatum repellendus cupiditate eos.
          </p>
        </div>
        </div>
        <div className='lg:flex lg:flex-col'>
          <div className='mb-4 p-6 bg-white lg:p-6 lg:mb-4'>
            <div className='mb-4 text-center'>
              <p className='text-xl'>Over <strong>1,320,000+</strong> Readers</p>
              <p className='text-sm'>Get fresh Content from WPBeginner</p>
            </div>
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
          </div>
          <div className='mb-4 bg-white lg:mb-4 cursor-pointer'>
            <a href="/">
            <Image
            src={lazyImage}
            alt='image'
            className='object-fill'
            />
            </a>
          </div>
          <div className='mb-4 lg:mb-4 cursor-pointer'>
            <Image
            src={lazy1}
            alt='image'
            className='object-contain'
            />
          </div>
        </div>
        
    </div>
  )
}

export default Blogs