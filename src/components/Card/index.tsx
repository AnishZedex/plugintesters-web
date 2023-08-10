import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import React from "react";
import { PluginBlogs } from "../../../queries";

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

function Card({ PluginCategory = [] }: { PluginCategory: SanityDocument[] }) {
  return (
    <>
      <div className="flex text-[#757575] text-sm font-medium gap-2 my-6">
        <div className="uppercase">featured wordpress plugins</div>
        <Link href={"/blog/category/plugins"}><button>(View all)</button></Link>
      </div>
      <div className="overflow-hidden break-words lg:grid lg:grid-cols-3 lg:gap-4">
        {PluginCategory.slice(0, 6).map((pluginblogs) => (
          <div key={pluginblogs._id} className=" bg-white block mb-4 p-6 lg:hover:shadow-xl cursor-pointer">
              <div className="flex">
              <Image
                      src={builder.image(pluginblogs.mainImage).url()}
                      alt="image"
                      width={90}
                      height={150}
                      className="mr-4"
                    />
            <Link  href={`blog/${pluginblogs.slug.current}`}>
                <div className="font-bold line-clamp-2">
                  {pluginblogs.title}
                  {/* {tutorialblogs.title.split(" ").slice(0, 1).join(" ")} */}
                </div>
        </Link>
              </div>
              <div className="mt-5 line-clamp-3">
                {/* {pluginblogs?.body ? <PortableText value={pluginblogs.body} components={ptComponents}/> : null} */}
                {pluginblogs?.postDesc}
              </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
