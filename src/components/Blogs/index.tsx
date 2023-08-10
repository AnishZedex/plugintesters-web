"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import lazyImage from "../../../public/images/startablog.png";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import SocialWidget from "../SocialWidget";

const builder = imageUrlBuilder(client);

interface ImageProps {
  value?: {
    asset?: {
      _ref?: string;
    };
    alt?: string;
  };
}
const ImageComponent: React.FC<ImageProps> = ({ value }) => {
  if (!value?.asset?._ref) {
    return null;
  }
  return null;
};

const ptComponents = {
  types: {
    image: ImageComponent,
  },
};

function Blogs({category = [],posts = [],latestBlogs=[], siteConfig}: {category: SanityDocument[];posts: SanityDocument[];latestBlogs:SanityDocument[];siteConfig:SanityDocument}) {
  // const [randomPost, setRandomPost] = useState<SanityDocument | null>(null);

  // useEffect(() => {
  //   if (posts.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * posts.length);
  //     setRandomPost(posts[randomIndex]);
  //   }
  // }, [posts]);

  return (
    <div className="overflow-hidden mx-auto pt-10 break-words lg:grid lg:gap-8 lg:grid-cols-[minmax(0,_1fr)_300px]">
      <div className="mb-4 bg-white py-10 px-6 md:px-8 lg:px-12">
        <p className="text-gray-500 font-semibold uppercase mb-2 text-sm">
          new on blog
        </p>
        {latestBlogs.slice(0,1).map((latestBlogs)=> {
          return(
            <div key={latestBlogs._id} className="mb-8 pb-12">
              <div>
                <Link href={`blog/${latestBlogs.slug.current}`}>
                  <h1 className="font-bold text-gray-700 text-2xl mb-6 hover:text-3">
                    {latestBlogs.title}
                  </h1>
                </Link>
                {latestBlogs?.mainImage ? (
                <Image
                  className="float-left m-0 w-1/3 mr-4 rounded-lg"
                  src={builder
                    .image(latestBlogs.mainImage)
                    .width(300)
                    .height(200)
                    .url()}
                  alt={latestBlogs?.mainImage?.alt}
                  width={500}
                  height={500}
                />
                ) : null}
                <div className="line-clamp-6">
                {latestBlogs?.body ? <PortableText value={latestBlogs.body} components={ptComponents}/> : null}
                </div>
              </div>
            </div>
          )})}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            {latestBlogs.slice(0, 6).reverse().map((post) => {
              return (
                <div key={post._id}>
                  <div className="flex gap-4">
                    <div className="w-full min-h-[80px]">
                      <Image
                        src={builder.image(post.mainImage).url()}
                        alt="image"
                        width={200}
                        height={200}
                      />
                    </div>
                    <Link href={`blog/${post.slug.current}`}>
                      <h1 className="font-bold text-gray-700 text-base mb-6 hover:text-3">
                        {post.title}
                      </h1>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
      <div className="lg:flex lg:flex-col">
        <SocialWidget siteConfig={siteConfig}/>
        <div className="mb-4 lg:mb-4 cursor-pointer flex justify-center items-center">
          <a href="/">
            <Image
              src={lazyImage}
              alt="image"
              className="object-contain h-[300px] w-[300px]"
            />
          </a>
        </div>
        <div className="container mx-auto">
          <div className="bg-white py-5 gap-6 px-10 flex flex-col">
            <h1 className="font-bold border-b pb-5">Categories</h1>
            <div>
              <ul className="flex flex-col gap-3">
                {category.map((category) => {
                  return (
                    <Link
                      href={`/blog/category/${category.slug.current}`}
                      key={category._id}
                    >
                      <li className="flex justify-between cursor-pointer">
                        <h4 className="text-gray-500  hover:text-primary-3">
                          {category.title}
                        </h4>
                        <p className="text-primary-3 text-xs">{category.numberOfBlogs}</p>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
