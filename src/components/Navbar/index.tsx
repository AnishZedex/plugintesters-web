"use client";
import {
  ChevronRightIcon,
  HamburgerMenuIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  Cross1Icon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  VercelLogoIcon,
  DiscordLogoIcon,
  TwitterLogoIcon,
  SketchLogoIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { SanityDocument } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

function Navbar({
  category = [],
  PlugCategory = [],
  TutCategory = [],
  siteConfig,
}: {
  category: SanityDocument[];
  PlugCategory: SanityDocument[];
  TutCategory: SanityDocument[];
  siteConfig: SanityDocument;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const navOpen = () => {
    setIsOpen(!isOpen);
  };

  const [isCategory, setIsCategory] = useState(false);
  const catOpen = () => {
    setIsCategory(!isCategory);
  };

  const [isPlugin, setIsPlugin] = useState(false);
  const plugOpen = () => {
    setIsPlugin(!isPlugin);
  };

  useEffect(() => {
    if (isOpen) {
      // Add 'overflow-hidden' class to body when menu is open
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove 'overflow-hidden' class from body when menu is closed
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      // Check if the viewport width is larger than or equal to 'lg' breakpoint (e.g., 1024px)
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    // Add the resize event listener
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <nav className="">
      <NavigationMenu.Root className="relative z-[1] flex bg-2 justify-between lg:justify-around items-center py-2 w-full mx-auto px-4 text lg:px-10">
        <Link href="/">
        <Image
          src={builder.image(siteConfig?.mainLogo).url()}
          alt="logo"
          width={200}
          height={200}
        />
        </Link>

        <NavigationMenu.List className="hidden lg:flex m-0 list-none gap-4">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text hover:bg-2 group flex select-none items-center justify-between gap-[2px] rounded-[4px]  py-2 text-base leading-none outline-none focus:shadow-[0_0_0_2px] font-bold">
              Blogs{" "}
              <CaretDownIcon
                className="text relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute w-full sm:w-auto bg-white">
              <ul className="m-0 p-6 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li className="text-gray-500 font-semibold uppercase mb-2 text-sm">
                  categories
                </li>
                {category.map((category) => (
                  <li
                    key={category._id}
                    className="flex items-center text-black font-medium p-3"
                  >
                    <Link href={`/blog/category/${category.slug.current}`}>
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text hover:bg-2 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-base font-bold leading-none outline-none focus:shadow-[0_0_0_2px]">
              Plugins{" "}
              <CaretDownIcon
                className="text relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute w-full sm:w-auto bg-white">
              <ul className="m-0 p-6 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li className="text-gray-500 font-semibold uppercase mb-2 text-sm">
                  posts
                </li>
                {PlugCategory.map((post) => (
                  <div key={post._id}>
                    <li className="flex items-center text-black font-medium p-3">
                      <Link href={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text hover:bg-2 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-base font-bold leading-none outline-none focus:shadow-[0_0_0_2px]">
              Tutorials{" "}
              <CaretDownIcon
                className="text relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute w-full sm:w-auto bg-white">
              <ul className="m-0 p-6 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <li className="text-gray-500 font-semibold uppercase mb-2 text-sm">
                  posts
                </li>
                {TutCategory.map((post) => (
                  <div key={post._id}>
                    <li className="flex items-center text-black font-medium p-3">
                      <Link href={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="text hover:bg-2 group flex select-none items-center justify-between gap-[2px] rounded-[4px] py-2 text-base font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]">
            <Link href="/contact">Contact Us</Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-[12px] w-[12px] rotate-[45deg] rounded-tl-[2px] bg-white" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
        <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
          <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[-6px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>

        <div className="hidden lg:flex">
          <div className="py-3">
            <MagnifyingGlassIcon className="w-6 h-6 text-2" />
          </div>
        </div>
        <div className="py-3 pr-4 flex gap-4 lg:hidden">
          {/* <button className="">
            <MagnifyingGlassIcon className="w-6 h-6 text" />
          </button> */}
          {!isOpen ? (
            <button className="Hamburger Menu" onClick={navOpen}>
              <HamburgerMenuIcon className="w-6 h-6 text" />
            </button>
          ) : (
            <button className="Close Icon" onClick={navOpen}>
              <Cross1Icon className="w-6 h-6 text" />
            </button>
          )}
        </div>
        {isOpen && (
          <div className="fixed bg-2 top-14 z-10 left-0 h-full w-[100%] lg:hidden">
            <ul className="text p-8 flex flex-col gap-6 font-thin">
              <li className="text-lg font-bold flex justify-between items-center">
                <button onClick={catOpen}>Blogs</button>
                {!isCategory ? (
                  <button onClick={catOpen}>
                    <ChevronRightIcon />
                  </button>
                ) : (
                  <button onClick={catOpen}>
                    <ChevronDownIcon />
                  </button>
                )}
              </li>
              {isCategory && (
                <ul className="font-medium list-disc pl-4">
                  {category.map((category) => (
                    <li key={category._id} className="pb-2">
                      <Link href={`/blog/category/${category.slug.current}`}>
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <li className="text-lg font-bold flex justify-between items-center">
                <button onClick={plugOpen}>Plugins</button>
                {!isPlugin ? (
                  <button onClick={plugOpen}>
                    <ChevronRightIcon />
                  </button>
                ) : (
                  <button onClick={plugOpen}>
                    <ChevronDownIcon />
                  </button>
                )}
              </li>
              {isPlugin && (
                <ul className="font-medium list-disc pl-4">
                  {PlugCategory.map((post) => (
                    <li key={post._id} className="pb-2">
                      <Link href={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <Link href={`/contact`}>
                <div className="flex justify-between">
                  <li className="text-lg font-bold">Contact Us</li>
                </div>
              </Link>
            </ul>
            <div className="py-10 pr-4 pl-6">
              <p className="text text-center mb-5">Follow Us</p>
              <div className="flex flex-wrap mb-4 justify-around mx-auto">
                <a href="/" className="items-center justify-center">
                  <SketchLogoIcon className="h-7 w-7 text" />
                </a>
                <TwitterLogoIcon className="h-7 w-7 text" />
                <LinkedInLogoIcon className="h-7 w-7 text" />
                <GitHubLogoIcon className="h-7 w-7 text" />
              </div>
              <div className="flex flex-wrap justify-around mx-auto">
                <InstagramLogoIcon className="h-7 w-7 text" />
                <VercelLogoIcon className="h-7 w-7 text" />
                <DiscordLogoIcon className="h-7 w-7 text" />
                <HomeIcon className="h-7 w-7 text" />
              </div>
            </div>
          </div>
        )}
      </NavigationMenu.Root>
    </nav>
  );
}

export default Navbar;
