import React from 'react'
import Socials from '../Socials'

const Footer = () => {
  return (
    <footer className='pb-10 bg-[#2D2520] text-base text-center lg:hidden'>
        <div className='mx-auto px-6 pb-8 mb-8'>
            <p className="text-center text font-semibold mb-7">About WPBeginner</p>
            <p className='text-[#9D8C81] mb-4 '>WPBeginner is a free WordPress resource site for Beginners. WPBeginner was founded in July 2009 by Syed Balkhi. The main goal of this site is to provide quality tips, tricks, hacks, and other WordPress resources that allows WordPress beginners to improve their sites.</p>
            <p className="text-[#9D8C81] hover:text-3 mb-6">Join us! <a href="/">We are hiring</a></p>
            <Socials/>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <div className=''>
                <p className='text font-semibold mb-6'>SITE LINKS</p>
                <ul className='text-[#9D8C81]'>
                    <li className='mb-3'>About Us</li>
                    <li className='mb-3'>Contact Us</li>
                    <li className='mb-3'>FTC Disclosure</li>
                    <li className='mb-3'>Privacy Policy</li>
                    <li className='mb-3'>Terms of Service</li>
                    <li className='mb-3'>Free Blog Setup</li>
                    <li className='mb-3'>Free Business Tools</li>
                    <li className='mb-3'>Growth Fund</li>
                </ul>
            </div>
            <div>
                <p className='text font-semibold mb-6'>OUR SITES</p>
                <ul className='text-[#9D8C81]'>
                    <li className='mb-3'>OptinMonster</li>
                    <li className='mb-3'>WPForms</li>
                    <li className='mb-3'>MonsterInsights</li>
                    <li className='mb-3'>WP Mail SMTP</li>
                    <li className='mb-3'>All in One SEO</li>
                    <li className='mb-3'>Smash Balloon</li>
                    <li className='mb-3'>SeedProd</li>
                    <li className='mb-3'>Nameboy</li>
                    <li className='mb-3'>RafflePress</li>
                    <li className='mb-3'>PushEngage</li>
                    <li className='mb-3'>Duplicator</li>
                    <li className='mb-3'>AffiliateWP</li>
                    <li className='mb-3'>Easy Digital Downloads</li>
                    <li className='mb-3'>WP Simple Pay</li>
                    <li className='mb-3'>SearchWP</li>
                    <li className='mb-3'>WP Charitable</li>
                    <li className='mb-3'>PushEngage</li>  
                </ul>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer