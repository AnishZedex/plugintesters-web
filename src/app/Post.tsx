"use client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, VercelLogoIcon, DiscordLogoIcon, TwitterLogoIcon, SketchLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { client } from "../../sanity/lib/client";
import lazyImage from '../../public/images/startablog.png'
import lazy1 from '../../public/images/Screenshot 2023-06-28 012459.png'

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <main className='overflow-hidden mx-auto break-words xl:grid xl:gap-8 xl:grid-cols-[minmax(0,_1fr)_300px]'>
      <div className='mb-4 bg-white py-10 px-6 lg:px-12 lg:'>
      <p className="">{post.categories}</p>
      <h1 className="font-bold text-gray-700 text-2xl mb-6">{post.title}</h1>
      <div className="font-semibold text-gray-700 text-base mb-6"><p>by {post.author}</p>{post.publishedAt}</div>
      {/* {post?.mainImage ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post?.mainImage?.alt}
        />
      ) : null} */}
      {post?.body ? <PortableText value={post.body} /> : null}
      </div>
      <div className='lg:flex lg:flex-col'>
          <div className='mb-4 p-6 bg-white lg:p-6 lg:mb-4'>
            <div className='mb-4 text-center'>
              <p className='text-xl'>Over <strong>1,320,000+</strong> Readers</p>
              <p className='text-sm'>Get fresh Content from WPBeginner</p>
            </div>
            <div className='pl-5 grid grid-cols-4 gap-4'>
              <SketchLogoIcon className='h-7 w-7 text-[#8b8929]'/>
              <TwitterLogoIcon className='h-7 w-7 text-[#33f1fe]'/>
              <LinkedInLogoIcon className='h-7 w-7 text-[#4194f3]'/>
              <GitHubLogoIcon className='h-7 w-7 text-[#000]'/>
              <InstagramLogoIcon className='h-7 w-7 text-[#dc3c3c]'/>
              <VercelLogoIcon className='h-7 w-7 text-[#000]'/>
              <DiscordLogoIcon className='h-7 w-7 text-[#3551a4]'/>
              <EnvelopeClosedIcon className='h-7 w-7 text-[#4ff378]'/>
            </div>
          </div>
        <div className='mb-4 bg-white lg:mb-4 cursor-pointer'>
            <a href="/">
            <Image
            src={lazyImage}
            alt='image'
            className='object-fill'
            />
            </a>
          </div>
          <div className='mb-4 lg:mb-4 cursor-pointer'>
            <Image
            src={lazy1}
            alt='image'
            className='object-contain'
            />
          </div>
        </div>
    </main>
  );
}
