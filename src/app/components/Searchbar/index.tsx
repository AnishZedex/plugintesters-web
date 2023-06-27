import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

const Searchbar = () => {
  return (
    <>
      <div className="relative">
        <h1 className="hidden lg:block absolute mx-8 my-6 font-semibold text-gray-500">I need help with...</h1>
        <MagnifyingGlassIcon className="absolute text-gray-500 mx-8 my-6 w-5 h-5 lg:w-7 lg:h-7 lg:mx-52" /> 
        <input
          type="search"
          placeholder="Enter your keywords and search WPBeginner..."
          className="rounded-lg shadow-md border-gray-800 py-6 pr-3 pl-16 w-[100%] md:w-full lg:pr-20 lg:pl-60 lg:w-full"
        />
        <button className=" hidden md:block absolute top-4 right-3 py-2 px-3 text font-semibold text-lg bg-3 hover:bg-orange-800">Search</button>
      </div>
    </>
  );
};

export default Searchbar;