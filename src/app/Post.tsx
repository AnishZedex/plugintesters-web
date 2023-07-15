"use client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/client";
import lazyImage from "../../public/images/startablog.png";
import SocialWidget from "@/components/SocialWidget";
import Link from "next/link";

// const builder = imageUrlBuilder(client);

export default function Post({category = [],post,}: {category: SanityDocument[];post: SanityDocument;}) {
  return (
    <main className="overflow-hidden mx-auto pt-10 break-words lg:grid lg:gap-8 lg:grid-cols-[minmax(0,_1fr)_300px]">
      <div className="mb-4 bg-white py-10 px-6 md:px-8 lg:px-12 lg:">
        <p className="text-gray-500 font-bold uppercase mb-5 text-lg">
          {post?.categories}
        </p>
        <h1 className="font-bold text-gray-700 text-2xl mb-6">{post.title}</h1>
        <div className="font-semibold text-gray-700 text-base mb-6">
          <p>by {post.author}</p>
          <p>{new Date(post.publishedAt).toLocaleDateString(
            "en-US",{
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}</p>
        </div>
        {/* {post?.mainImage ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post?.mainImage?.alt}
        />
      ) : null} */}
        <div className="prose">
          {post?.body ? <PortableText value={post.body} /> : null}
        </div>
      </div>
      <div className="lg:flex lg:flex-col">
        <SocialWidget />
        <div className="mb-4 bg-white lg:mb-4 cursor-pointer">
          <a href="/">
            <Image src={lazyImage} alt="image" className="object-fill" />
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
                        <p className="text-primary-3 text-xs">24</p>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
