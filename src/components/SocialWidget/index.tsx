import React from 'react'
import { SanityDocument } from "next-sanity";
import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, VercelLogoIcon, DiscordLogoIcon, TwitterLogoIcon, SketchLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import {IoLogoFacebook} from 'react-icons/io5'
import {IoLogoInstagram} from 'react-icons/io5'
import {IoLogoPinterest} from 'react-icons/io5'
import {FaTelegram} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'
import Link from 'next/link'

function SocialWidget({
  siteConfig,
}: {
  siteConfig: SanityDocument;
}){
  return (
    <>
        <div className="mb-4 p-6 bg-white lg:p-6 lg:mb-4">
          <div className="mb-4 text-center">
            <p className="text-xl">
              Over <strong>2,000,000+</strong> Readers
            </p>
            <p className="text-sm">Get fresh Content from WPBeginner</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex justify-center items-center">
              <div>
                <Link href={`${siteConfig?.socials[0].link}`}>
                <IoLogoFacebook size={32} color='blue'/>
                </Link>              
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <ImTwitter size={32} color='#1DA1F2'/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
              <Link href={`${siteConfig?.socials[1].link}`}>
                <LinkedInLogoIcon className="h-8 w-8 text-[#0A66C2]" />
                </Link> 
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <IoLogoPinterest size={40} color='#E60023'/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <IoLogoInstagram size={32} color='#C13584'/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <FaTelegram size={32} color="#0088CC"/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <DiscordLogoIcon className="h-7 w-7 text-[#3551a4]" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
              <EnvelopeClosedIcon className="h-7 w-7 text-[#000]" />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SocialWidget