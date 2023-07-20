import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import React from "react";

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

function TrendingCard({ trendingPosts = [] }: { trendingPosts: SanityDocument[] }) {
  return (
    <>
      <div className="flex text-[#757575] text-sm font-medium gap-2 my-6">
        <span className="uppercase">Trending Blogs</span>
        {/* <Link href={"/blog/category/plugins"}><button>(View all)</button></Link> */}
      </div>
      <div className="overflow-hidden break-words lg:grid lg:grid-cols-3 lg:gap-4">
        {trendingPosts.slice(0, 6).map((trendblogs) => (
          <div key={trendblogs._id} className=" bg-white block mb-4 p-6 lg:hover:shadow-xl cursor-pointer">
              <div className="flex">
              <Image
                      src={builder.image(trendblogs.mainImage).url()}
                      alt="image"
                      width={90}
                      height={150}
                      className="mr-4"
                    />
            <Link  href={`blog/${trendblogs.slug.current}`}>
                <div className="font-bold line-clamp-2">
                  {trendblogs.title}
                </div>
        </Link>
              </div>
              <div className="mt-5 line-clamp-3">
                {trendblogs?.body ? <PortableText value={trendblogs.body} components={ptComponents}/> : null}
              </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TrendingCard;
