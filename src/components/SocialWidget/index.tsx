import React from 'react'
import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, VercelLogoIcon, DiscordLogoIcon, TwitterLogoIcon, SketchLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import {IoLogoFacebook} from 'react-icons/io5'
import {IoLogoInstagram} from 'react-icons/io5'
import {IoLogoPinterest} from 'react-icons/io5'
import {FaTelegram} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'

const SocialWidget = () => {
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
                {/* <SketchLogoIcon className="h-7 w-7 text-[#8b8929]" /> */}
                <IoLogoFacebook size={32} color='blue'/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <ImTwitter size={32} color='#1DA1F2'/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <LinkedInLogoIcon className="h-7 w-7 text-[#0A66C2]" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                {/* <GitHubLogoIcon className="h-7 w-7 text-[#000]" /> */}
                <IoLogoPinterest size={40} color='#E60023'/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                {/* <InstagramLogoIcon className="h-7 w-7 text-[#dc3c3c]" /> */}
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