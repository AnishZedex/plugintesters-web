"use client";
import SocialWidget from "@/components/SocialWidget";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";
import Link from "next/link";
import lazyImage from "../../public/images/startablog.png";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

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

export default function Tag({ blogs = [], heading, siteConfig }: { blogs: SanityDocument[] , heading: string, siteConfig:SanityDocument}) {
  return (
    <>
      <div className="overflow-hidden mx-auto pt-10 break-words lg:grid lg:gap-8 lg:grid-cols-[minmax(0,_1fr)_300px]">
        <div className="mb-4 bg-white py-10 px-6 md:px-8 lg:px-12 xl:px-14">
          <h1 className="text-gray-500 font-bold uppercase mb-8 text-lg">
            {heading}
          </h1>
          {blogs.map((blog) => (
            <div key={blog._id} className="mb-8 pb-8 border-b">
              <Link href={`/blog/${blog.slug.current}`}>
                <h2 className="text-lg font-semibold text-3 mb-4">
                  {blog.title}
                </h2>
                {blog?.mainImage ? (
                  <Image
                    className="float-left m-0 mr-4 rounded-lg"
                    src={builder.image(blog.mainImage).url()}
                    width={150}
                    height={50}
                    alt={blog?.mainImage?.alt}
                  />
                ) : null}
              </Link>
                <div className="prose text-gray-500 line-clamp-4">
                {blog?.body ? <PortableText value={blog.body} components={ptComponents}/> : null}
                </div>
            </div>
          ))}
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
        </div>
      </div>
    </>
  );
}
