"use client"
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const guidetitles = [
  [
    "1 Proven ways to Make Money Online Blogging with WordPress",
    "2 Proven ways to Make Money Online Blogging with WordPress",
    "3 Proven ways to Make Money Online Blogging with WordPress",
    "4 Proven ways to Make Money Online Blogging with WordPress",
    "5 Proven ways to Make Money Online Blogging with WordPress",
    "6 Proven ways to Make Money Online Blogging with WordPress",
  ],
  [
    "7 Proven ways to Make Money Online Blogging with WordPress",
    "8 Proven ways to Make Money Online Blogging with WordPress",
    "9 Proven ways to Make Money Online Blogging with WordPress",
    "10 Proven ways to Make Money Online Blogging with WordPress",
    "11 Proven ways to Make Money Online Blogging with WordPress",
    "12 Proven ways to Make Money Online Blogging with WordPress",
  ],
  [
    "13 Proven ways to Make Money Online Blogging with WordPress",
    "14 Proven ways to Make Money Online Blogging with WordPress",
    "15 Proven ways to Make Money Online Blogging with WordPress",
    "16 Proven ways to Make Money Online Blogging with WordPress",
    "17 Proven ways to Make Money Online Blogging with WordPress",
    "18 Proven ways to Make Money Online Blogging with WordPress",
  ],
  [
    "19 Proven ways to Make Money Online Blogging with WordPress",
    "20 Proven ways to Make Money Online Blogging with WordPress",
    "21 Proven ways to Make Money Online Blogging with WordPress",
    "22 Proven ways to Make Money Online Blogging with WordPress",
    "23 Proven ways to Make Money Online Blogging with WordPress",
    "24 Proven ways to Make Money Online Blogging with WordPress",
  ],
];

const Guide = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % guidetitles.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setActiveSlide(index);
  };

  return (
    <div className="bg-white py-10 px-6 lg:my-10">
      <div className="font-bold flex justify-center gap-2 mb-7 lg:text-xl">
        <p className="text-3">Useful</p>
        <p className="text-gray-600">WordPress Guides</p>
      </div>
      <div className="relative duration-1000">
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6 overflow-x-auto ">
          {guidetitles[activeSlide].map((g, i) => (
            <div key={i} className="flex gap-2 text-gray-600">
              <ArrowRightIcon className="w-7 h-7 pb-2" />
              <p className="lg:hover:text-3 font-semibold">{g}</p>
            </div>
          ))}
        </div>
        <ul className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex gap-2 mt-4">
          {guidetitles.map((_, index) => (
            <li
              key={index}
              className={`w-2 h-2 rounded-full bg-gray-400 ${
                index === activeSlide ? "bg-gray-600" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Guide;
