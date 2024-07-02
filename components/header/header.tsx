"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

import Logo from "/public/images/icons/logo.png";

import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const path = usePathname();
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div className="w-full h-[88px] relative bg-white border-b border-neutral-200">
      <div className="max-w-[1728px] h-full w-full xl:px-20 px-6 flex items-center justify-between mx-auto">
        <Link
          href="/"
          className="w-[53px] h-auto justify-center items-center inline-flex"
        >
          <Image
            className="flex w-[53px] h-auto flex-shrink-0 transition-all duration-300 ease-in-out"
            src={Logo}
            alt="Logo"
          />
        </Link>
        <div className="h-full justify-center items-center gap-8 inline-flex">
          <div className="h-full justify-start items-center gap-14 flex">
            <Link
              href="/services"
              className="text-gray-800 text-lg font-normal hover:opacity-80 font-poppins tracking-wide"
            >
              SERVICES
            </Link>
            <Link
              href="/blogs"
              className="text-gray-800 text-lg font-normal hover:opacity-80 font-poppins tracking-wide"
            >
              BLOGS
            </Link>
            <Link
              href="videos"
              className="text-gray-800 text-lg font-normal hover:opacity-80 font-poppins tracking-wide"
            >
              VIDEOS
            </Link>
            <div
              onMouseOver={() => setIsDropdown(true)}
              onMouseOut={() => setIsDropdown(false)}
              className="flex h-full relative"
            >
              <div className="justify-center items-center gap-2 flex cursor-pointer">
                <div className="text-gray-800 text-lg font-normal hover:opacity-80 font-poppins tracking-wide">
                  ABOUT CE
                </div>
                <ChevronDownIcon className="text-[#2D303B] w-5" />
              </div>

              <div
                onMouseOver={() => setIsDropdown(true)}
                onMouseOut={() => setIsDropdown(false)}
                className={clsx({
                  ["absolute -bottom-28 z-[99] w-[171px] p-6 bg-white shadow border border-neutral-200 flex-col justify-start items-start gap-2.5 fade-in-top-500-animation"]:
                    true,
                  ["flex"]: isDropdown,
                  ["hidden"]: !isDropdown,
                })}
              >
                <div className="flex-col justify-end items-end gap-8 flex">
                  <Link
                    href="/about/meet-our-crew"
                    className="w-full text-gray-800 text-lg text-right font-normal font-poppins tracking-wide hover:opacity-80"
                  >
                    CREW
                  </Link>
                  <Link
                    href="/about/in-the-media"
                    className="w-full text-gray-800 text-lg text-right font-normal font-poppins tracking-wide hover:opacity-80"
                  >
                    IN THE MEDIA
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-px h-[31px] bg-neutral-400" />

          <Link
            href="/contact"
            className="justify-center items-center gap-6 flex hover:opacity-80"
          >
            <div className="text-gray-800 text-lg font-semibold font-poppins">
              GET IN TOUCH
            </div>
            <ArrowRightIcon className="text-[#2D303B] w-5" />
          </Link>
        </div>
      </div>

      {/* {isMenuOpen && (
        <div
          id="drawer-example"
          className={`overflow-visible top-0 right-0 absolute w-full max-w-full bg-white h-full transform transition-transform ease-in-out duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {isMenuOpen && <MenuMobile onClose={onClose} />}
        </div>
      )} */}
    </div>
  );
}
