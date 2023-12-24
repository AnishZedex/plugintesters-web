import React from 'react'
import Image from 'next/image'
import amazon from '../../../public/images/as1.png'


const Footersocial = () => {
  return (
    <div className='hidden sm:hidden md:hidden lg:block bg-[#2D2520] pt-12 mt-10 text-center text-[#9D8C81]'>
      <p className='font-normal text-center'>FEATURED IN</p>
      <div className='flex items-center justify-center mx-auto px-6'>
        <div className='flex space-x-4'>
          <Image src={amazon} alt='amazon logo' width={200} />
          <Image src={amazon} alt='amazon logo' width={200} />
          <Image src={amazon} alt='amazon logo' width={200} />
          <Image src={amazon} alt='amazon logo' width={200} />
          <Image src={amazon} alt='amazon logo' width={200} />
        </div>
      </div>
    </div>
  );
};



//     <div className='bg-[#2D2520] pt-12 mt-10 text-center text-[#9D8C81] '>
//     <p className='font-normal text-center'>FEATURED IN</p>
//     <div className='flex justify-center mx-auto px-6'>
//         <div className='flex justify-center'>
//             <Image src={amazon} alt='amazon logo' width={200}/>
//             <Image src={amazon} alt='amazon logo' width={200}/>
//         </div>
//         <div className='flex justify-center'>
//             <Image src={amazon} alt='amazon logo' width={200}/>
//             <Image src={amazon} alt='amazon logo' width={200}/>
//         </div>
//         <div className='flex justify-center'>
//             <Image src={amazon} alt='amazon logo' width={200}/>
//         </div>
//     </div>
// </div>

export default Footersocial