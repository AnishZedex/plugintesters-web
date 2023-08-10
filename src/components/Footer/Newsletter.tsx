import React from "react";

import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import {IoLogoFacebook} from 'react-icons/io5'

const Newsletter = () => {
  return (
    <div className="bg-[#2D2520] px-20 pb-20 w-full">
      <div className="text-[#9D8C81] lg:mx-40">
        <div className="flex flex-col lg:flex-row text-lg gap-8 py-5">
          <div className="text font-sans font-extrabold">About WPBeginner<sup>®</sup></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex flex-col gap-6 basis-1/2">
            
            <p className=" font-sans">
            WPBeginner is a free WordPress resource site for Beginners. WPBeginner was founded in July 2009 by Syed Balkhi. The main goal of this site is to provide quality tips, tricks, hacks, and other WordPress resources that allows WordPress beginners to improve their sites.
            </p>
            <p className="font-sans hover:text-3">Join our team: We are Hiring!</p>
            <div className="flex gap-5 my-auto ">
                <IoLogoFacebook size={22}/>
                <InstagramLogoIcon className="hover:text-3 h-5 w-5" />
                <LinkedInLogoIcon className="hover:text-3 h-5 w-5" />
                <TwitterLogoIcon className="hover:text-3 h-5 w-5" />
            </div>
          </div>
          <div className="flex gap-8 basis-1/3 font-sans text-sm">
            <div className="flex flex-col gap-5 basis-2/3 ">
              <p className="hover:text-3">About Us</p>
              <p className="hover:text-3">Contact Us</p>
              <p className="hover:text-3">About Us</p>
              <p className="hover:text-3">About Us</p>
            </div>
            <div className="flex flex-col gap-5 basis-2/3 ">
              <p className="hover:text-3">Smash Balloon</p>
              <p className="hover:text-3">About Us</p>
              <p className="hover:text-3">FTC Disclosure</p>
              <p className="hover:text-3">About Us</p>
            </div>
            <div className="flex flex-col gap-5 basis-2/3">
              <p className="hover:text-3">RafflePress</p>
              <p className="hover:text-3">About Us</p>
              <p className="hover:text-3">Growth Fund</p>
              <p className="hover:text-3">About Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
