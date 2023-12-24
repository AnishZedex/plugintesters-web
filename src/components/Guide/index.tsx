"use client"
import React, { useEffect, useState, useRef } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

function Guide({ posts = [] }: { posts: SanityDocument[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [preventSwipe, setPreventSwipe] = useState(false);
  const SWIPE_THRESHOLD = 50;
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  const handleSwipeStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
    setPreventSwipe(false);
  };

  const handleSwipeEnd = () => {
    if (touchEndX - touchStartX > SWIPE_THRESHOLD && !preventSwipe) {
      setActiveSlide((prevSlide) =>
        prevSlide === 0 ? Math.ceil(posts.length / 6) - 1 : prevSlide - 1
      );
    } else if (touchStartX - touchEndX > SWIPE_THRESHOLD && !preventSwipe) {
      setActiveSlide((prevSlide) => (prevSlide + 1) % Math.ceil(posts.length / 6));
    }
    setTouchStartX(0); 
    setTouchEndX(0);
  };

  const handleTitleClick = () => {
    setPreventSwipe(true);
  };

  const getVisiblePosts = () => {
    const start = activeSlide * 6;
    const end = start + 6;
    return posts.slice(start, end);
  };

  const numOfSlides = Math.max(Math.ceil(posts.length / 6), 1);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    const handleTouchMove = (event: TouchEvent) => {
      if (preventSwipe) {
        event.preventDefault();
      }
    };
    sliderElement?.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      sliderElement?.removeEventListener("touchmove", handleTouchMove);
    };
  }, [preventSwipe]);

  return (
    <div
      className="bg-white py-10 px-6 lg:my-10"
      onTouchStart={handleSwipeStart}
      onTouchMove={(event) => setTouchEndX(event.touches[0].clientX)}
      onTouchEnd={handleSwipeEnd}
      ref={sliderRef}
    >
      <div className="font-bold flex justify-center gap-2 mb-7 lg:text-xl">
        <p className="text-3">Useful</p>
        <p className="text-gray-600">WordPress Guides</p>
      </div>
      <div className="relative duration-1000">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeSlide * (100 / numOfSlides)}%)`,
              width: `${numOfSlides * 100}%`,
            }}
          >
            {Array.from({ length: numOfSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
                style={{
                  transform: `translateX(${(slideIndex - activeSlide) * (100 / numOfSlides)}%)`,
                }}
              >
                {getVisiblePosts().map((post, index) => (
                  <div
                    key={post._id}
                    className="flex gap-2 text-gray-600"
                    onTouchStart={(event) => {
                      if (index !== 0 || activeSlide !== 0) {
                        event.stopPropagation();
                      }
                    }}
                  >
                    <ArrowRightIcon className="w-7 h-7 pb-2" />
                    <Link href={`/blog/${post.slug.current}`}>
                      <p
                        className="lg:hover:text-3 font-semibold"
                        onClick={handleTitleClick}
                      >
                        {post.title}
                      </p>
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
                className={`w-2 h-2 rounded-full bg-gray-400 ${
                  index === activeSlide ? "bg-gray-600" : ""
                }`}
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