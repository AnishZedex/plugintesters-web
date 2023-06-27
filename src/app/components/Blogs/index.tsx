import React from 'react'
import Image from 'next/image'
import lazyImage from '../../../../public/images/startablog.png'
import lazy1 from '../../../../public/images/Screenshot 2023-06-28 012459.png'
import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, VercelLogoIcon, DiscordLogoIcon, TwitterLogoIcon, SketchLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'


const Blogs = () => {
  return (
    <div className='overflow-hidden mx-auto break-words xl:grid xl:gap-8 xl:grid-cols-[minmax(0,_1fr)_300px]'>
        <div className='mb-4 bg-white py-10 px-6 lg:px-12 lg:'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate augue vel dolor euismod iaculis. Donec sed ligula at lectus rutrum ullamcorper. Nunc molestie mauris sit amet nisi accumsan, ut sollicitudin felis mollis. Morbi sit amet aliquet mi, ut rhoncus turpis. Sed efficitur sit amet enim sed eleifend. Nullam rutrum sapien eget nisi placerat ullamcorper. Nunc condimentum gravida lorem, nec hendrerit diam vestibulum in.
        Nunc faucibus ex odio, sed posuere risus sagittis id. Quisque in posuere massa. Nam vel ullamcorper purus. Aliquam ut lobortis urna. Praesent a sapien ex. Integer euismod lobortis nisi, vel semper lorem sollicitudin quis. Ut a turpis sit amet ligula iaculis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eu nisi diam. Donec in est mollis lacus bibendum volutpat eget feugiat metus. Sed non interdum nulla, sed tincidunt mauris. Aliquam fermentum dui tortor, pretium posuere ipsum semper at. Maecenas et ullamcorper mauris. Duis non erat luctus, facilisis magna ac, malesuada sapien. Proin congue elementum ultricies.
        Phasellus ac malesuada ex. Phasellus a est sed nisi mollis viverra. Fusce vel tempus urna. Nulla ultricies vehicula arcu, ac egestas purus aliquam eu. Cras sed fermentum elit, nec commodo purus. Sed aliquet est aliquam sodales posuere. Duis nec risus porta, tempus ex vel, rutrum justo. Nunc a nisi elementum, facilisis libero vel, scelerisque nisl. Vivamus vitae leo vel lorem faucibus posuere. In pulvinar tortor ut pellentesque euismod.
        Suspendisse aliquet ligula nec ante luctus venenatis. Nullam mauris quam, blandit eget bibendum at, efficitur sit amet justo. Pellentesque ornare augue vitae aliquet posuere. Curabitur blandit, neque sit amet pellentesque vehicula, nulla enim blandit urna, et imperdiet felis purus eget sapien. Sed ut lacus sit amet libero venenatis sagittis eu nec ante. Quisque dapibus, neque ut placerat mollis, arcu augue tincidunt sapien, nec tristique mauris lorem a sem. Maecenas commodo quam id sapien tempus egestas. Quisque nunc lectus, dapibus a lobortis id, varius eget erat. Quisque egestas bibendum magna at cursus.
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