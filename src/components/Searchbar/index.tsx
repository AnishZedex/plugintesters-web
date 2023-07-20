"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React, { useCallback, useEffect, useState } from "react";
import { cachedClient } from "../../../sanity/lib/client";
import { SanityDocument, groq } from "next-sanity";
import Link from "next/link";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SanityDocument[]>([]);
  // const [searchClicked, setSearchClicked] = useState(false);


  // const handleSearchSubmit = async (event: any) => {
  //   event.preventDefault();
  //   console.log("Search Query:", searchQuery);
  //   try {
  //     // Perform search logic using the searchQuery state
  //     const response = await cachedClient(
  //       `*[_type == "post" && (title match $query || categories[]->title match $query || tags[]->label match $query)]`,
  //       { query: `*${searchQuery}`}
  //     );
  //     setSearchResults(response);
  //     setSearchClicked(true);
  //     console.log("Search Results:", response);
  //   } catch (error) {
  //     console.error("Error occurred while searching:", error);
  //     // Handle any errors and set searchResults to an empty array
  //     setSearchResults([]);
  //   }
  //   // Reset the search query
  //   setSearchQuery("");
  // };

  const handleSearch = useCallback(async () => {
    const searchResultsQuery = groq`
      *[
        _type == "post" &&
        (
          title match $searchQuery ||
          tags[]->label match $searchQuery
        )
      ]{
        _id,
        title,
        slug,
        "author": author->name,
        "category": categories[]->title
      }`;
  
    try {
      const results = await cachedClient(searchResultsQuery, {
        searchQuery: `*${searchQuery}*`, 
      });
  
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  }, [searchQuery]);
  
  useEffect(() => {
    handleSearch();
  }, [searchQuery, handleSearch]);

  // const handleSearchChange = (event: any) => {
  //   setSearchQuery(event.target.value);
  // };

  return (
    <>
      <div className="relative mt-8 bg-white">
        <h1 className="hidden lg:block absolute mx-8 my-6 font-semibold text-gray-500">
          I need help with...
        </h1>
        <MagnifyingGlassIcon className="absolute text-gray-500 mx-8 my-6 w-5 h-5 lg:w-7 lg:h-7 lg:mx-52" />
        <div
          
          className="rounded-lg shadow-md border-gray-800 py-6 pr-3 pl-16 w-[100%] md:w-full lg:pr-20 lg:pl-60 lg:w-full  focus:outline-3"
        >
          <input
            type="text"
            value={searchQuery}
            placeholder="Enter your keywords and search WPBeginner..."
            className="w-full focus:outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="hidden md:block absolute top-4 right-3 py-2 px-3 text font-semibold text-lg bg-3 hover:bg-orange-800"
          >
            Search
          </button>
        </div>
      </div>
      <div className="bg-white text-black rounded-lg shadow-md">
      {searchResults.length > 0 && searchQuery.length > 0 && (  
          searchResults.map((post) => (
            <ul key={post._id} className="p-4 border-b">
              <Link href={`/blog/${post.slug.current}`}>
                <li>{post.title}</li>
              </Link>
            </ul>
          )))}
      {searchResults.length === 0 && searchQuery.length > 0 && (
        <div className="p-4 border-b">
          No Results Found
      </div>
      )}
      </div>
    </>
  );
};

export default Searchbar;
