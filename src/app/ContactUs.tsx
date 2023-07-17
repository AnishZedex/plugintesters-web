"use client"
import SocialWidget from "@/components/SocialWidget";
import React,{ useState } from "react";
import Image from "next/image";
import lazyImage from "../../public/images/startablog.png"

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // console.log(name, email, message);
    // Reset the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="overflow-hidden mx-auto pt-10 break-words lg:grid lg:gap-8 lg:grid-cols-[minmax(0,_1fr)_300px]">
      <div className="mb-4 bg-white py-10 px-6 md:px-8 lg:px-12">
        <h1 className="text-gray-500 font-bold uppercase mb-2 text-lg text-center">
          CONTACT US
        </h1>
        <div className="bg-white py-8 px-6 md:px-8 lg:px-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-black font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm bg-gray-200 h-10 pl-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-black font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 sm:text-sm h-10 pl-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-black font-bold">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 sm:text-sm pl-2 pt-2"
                rows={4}
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
        <div className="lg:flex lg:flex-col">
          <SocialWidget />
          <div className="mb-4 lg:mb-4 cursor-pointer flex justify-center items-center">
            <a href="/">
              <Image
                src={lazyImage}
                alt="image"
                className="object-contain h-[300px] w-[300px]"
              />
            </a>
          </div>
        </div>
    </div>
  );
};

export default ContactUs;