"use client"
import { ArrowRightIcon } from '@radix-ui/react-icons'
import classNames from 'classnames';
import React, { useState } from 'react'

const OrangeRibbon = () => {
    const [isOpen , setIsOpen] = useState(false);
    const RibbonOpen = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div className='bg-3 w-full py-5 mb-8 cursor-pointer block'>
        <div className="flex flex-col gap-2 text md:hidden">
            <button onClick={RibbonOpen}>
            <span className='text-center font-bold text-lg'>Beginners Guide for WordPress</span>
            <div className='flex gap-2 items-center justify-center'>
                <span>Start your WordPress Blog in minutes</span>
                <ArrowRightIcon/>
            </div>
            </button>
        </div>
        {isOpen&&(
            <div>Hello</div>
        )}
        <div className="hidden md:flex text gap-4 justify-center">
            <span className='text-center font-bold text-xl'>Beginners Guide for WordPress</span>
            <span className='text-center font-bold text-xl'>/</span>
            <div className='flex gap-2 items-center justify-center'>
                <span>Start your WordPress Blog in minutes</span>
                <ArrowRightIcon/>
            </div>
        </div>
    </div>
  )
}

export default OrangeRibbon