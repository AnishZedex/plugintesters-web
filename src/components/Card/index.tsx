import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ PluginCategory = [] }: { PluginCategory: SanityDocument[] }) {
  return (
    <>
      <div className="flex text-[#757575] text-sm font-medium gap-2 my-6">
        <div className="uppercase">featured wordpress plugins</div>
        <button>(View all)</button>
      </div>
      <div className="overflow-hidden break-words lg:grid lg:grid-cols-3 lg:gap-4">
        {PluginCategory.slice(0, 6).map((tutorialblogs) => (
          <div
            key={tutorialblogs._id}
            className=" bg-white block mb-4 p-6 lg:hover:shadow-xl cursor-pointer"
          >
              <div className="flex">
                <Image
                  src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
                  alt="latest post img"
                  width={90}
                  height={148}
                  className="mr-4"
                />
            <Link href={`blog/${tutorialblogs.slug.current}`}>
                <div className="font-bold">
                  {tutorialblogs.title.split(" ").slice(0, 1).join(" ")}
                </div>
            </Link>
              </div>
              <div className="mt-5 line-clamp-3">
                <PortableText value={tutorialblogs.body} />
              </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
