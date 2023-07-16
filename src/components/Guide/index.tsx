"use client";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

function Guide({ posts = [] }: { posts: SanityDocument[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  const handleSwipeStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleSwipeEnd = () => {
    if (touchEndX - touchStartX > 50) {
      // Swiped right
      setActiveSlide((prevSlide) => (prevSlide === 0 ? Math.ceil(posts.length / 6) - 1 : prevSlide - 1));
    } else if (touchStartX - touchEndX > 50) {
      // Swiped left
      setActiveSlide((prevSlide) => (prevSlide + 1) % Math.ceil(posts.length / 6));
    }
  };

  const getVisiblePosts = () => {
    const start = activeSlide * 6;
    const end = start + 6;
    return posts.slice(start, end);
  };

  const numOfSlides = Math.max(Math.ceil(posts.length / 6), 1);

  //   useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveSlide((prevSlide) => (prevSlide + 1) % Math.ceil(posts.length / 6));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [posts.length]);

  return (
    <div className="bg-white py-10 px-6 lg:my-10" onTouchStart={handleSwipeStart}
      onTouchMove={(event) => setTouchEndX(event.touches[0].clientX)}
      onTouchEnd={handleSwipeEnd}>
      <div className="font-bold flex justify-center gap-2 mb-7 lg:text-xl">
        <p className="text-3">Useful</p>
        <p className="text-gray-600">WordPress Guides</p>
      </div>
      <div className="relative duration-1000">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeSlide * (100 / numOfSlides)}%)`,
              width: `${numOfSlides * 100}%`,
            }}
          >
            {Array.from({ length: numOfSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
                style={{ transform: `translateX(${(slideIndex - activeSlide) * (100 / numOfSlides)}%)` }}
              >
                {getVisiblePosts().map((post) => (
                  <div key={post._id} className="flex gap-2 text-gray-600">
                    <ArrowRightIcon className="w-7 h-7 pb-2" />
                    <Link href={`/blog/${post.slug.current}`}>
                      <p className="lg:hover:text-3 font-semibold">{post.title}</p>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {numOfSlides > 1 && (
          <ul className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex gap-2 mt-4">
            {Array.from({ length: numOfSlides }).map((_, index) => (
              <li
                key={index}
                className={`w-2 h-2 rounded-full bg-gray-400 ${index === activeSlide ? "bg-gray-600" : ""}`}
                onClick={() => handleDotClick(index)}
              ></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Guide;