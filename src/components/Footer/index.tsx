"use client"
import React from 'react'
import { useEffect } from 'react'

const FooterCopywrite = () => {

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const yearElement = document.getElementById('year') as HTMLSpanElement;
    if (yearElement) {
      yearElement.textContent = currentYear.toString(); 
    }
  }, []);

  return (
    <div className='flex-shrink-0'>
    <div className='text-4 py-10 w-full'>
        <div className='flex-wrap text-base text-center mx-auto px-6'>
        <p>Copyright © <span id="year"></span> WPBeginner LLC. All Rights Reserved. WPBeginner® is a registered trademark</p>
        </div>
        </div>
    </div>
  )
}

export default FooterCopywrite