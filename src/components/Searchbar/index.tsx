"use client"
import React, { useState } from "react";
import { cachedClient } from "../../../sanity/lib/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

// const Searchbar = () => {
  function Searchbar({ trendingPosts = [] }: { trendingPosts: SanityDocument[] }) {
    
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SanityDocument[]>([]);
  const [showNoResults, setShowNoResults] = useState(false); // Add state for showing "No Results Found" message

  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    try {
      // Perform search logic using the searchQuery state
      const response = await cachedClient(
        `*[_type == "post" && (title match "*${searchQuery}*"
        || categories[]->title match "*${searchQuery}*"
        || tags[]->label match "*${searchQuery}*")]`
      );
      
      if (response.length === 0) {
        setShowNoResults(true); // Show "No Results Found" message if search results are empty
      } else {
        setShowNoResults(false);
        setSearchResults(response);
      }

      console.log("Search Results:", response);
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
    // Reset the search query
    setSearchQuery("");
  };

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
    setShowNoResults(false); // Hide "No Results Found" message when search query changes
    if (event.target.value === "") {
      // Hide search results when the search query is empty
      setSearchResults([]);
    }
  };

  const handleBlur = () => {
    // Close the search input and search results box when the input loses focus
    setSearchResults([]);
    setSearchQuery("");
  };

  return (
    <>
      <div className="relative mt-8 bg-white">
      <h1 className="hidden lg:block absolute mx-8 my-6 font-semibold text-gray-500">
          I need help with...
        </h1>
        <MagnifyingGlassIcon className="absolute text-gray-500 mx-8 my-6 w-5 h-5 lg:w-7 lg:h-7 lg:mx-52" />
        <form
          onSubmit={handleSearchSubmit}
          className="rounded-lg shadow-md border-gray-800 py-6 pr-3 pl-16 w-[100%] md:w-full lg:pr-20 lg:pl-60 lg:w-full  focus:outline-3"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Enter your keywords and search WPBeginner..."
            className="w-full focus:outline-none"
            onBlur={handleBlur}
          />
          <button
            type="submit"
            className="hidden md:block absolute top-4 right-3 py-2 px-3 text font-semibold text-lg bg-3 hover:bg-orange-800"
          >
            Search
          </button>
        </form>
      </div>
      {/* Show "No Results Found" message */}
      {showNoResults && (
        <div className="bg-white text-black rounded-lg shadow-md">
          <p className="p-4 border-b text-center">No Results Found</p>
          <p className="p-4 text-3 font-semibold">
            Suggested Trending Posts 
          </p>
          {trendingPosts.slice(0,3).map((trendposts)=>(
            <ul key={trendposts._id} className="p-4 border-b">
              <Link  href={`blog/${trendposts.slug.current}`}>
              <li>{trendposts.title}</li>
              </Link>
            </ul>
          ))}
        </div>
      )}
      {/* Display search results */}
      {!showNoResults && (
        <div className="bg-white text-black rounded-lg shadow-md">
          {searchResults.map((post) => (
            <ul key={post._id} className="p-4 border-b">
              <Link href={`/blog/${post.slug.current}`}>
                <li>{post.title}</li>
              </Link>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default Searchbar;