/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FBIcon from "/public/images/icons/fb-icon.png";
import IgIcon from "/public/images/icons/ig-icon.png";
import XIcon from "/public/images/icons/x-icon.png";
import VimeoIcon from "/public/images/icons/vimeo-icon.png";

export default function PreHeader() {
  return (
    <div className="w-full py-2 bg-zinc-900">
      <div className="max-w-[1728px] w-full xl:px-[126px] px-6 mx-auto">
        <div className="w-full self-stretch justify-end items-center gap-8 inline-flex">
          <div className="justify-center items-center gap-8 flex">
            <div
              onClick={() =>
                window.open("https://www.facebook.com/caldwellentertainmentau")
              }
              className="w-5 h-5 relative cursor-pointer"
            >
              <img src={FBIcon.src} alt="..." />
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.instagram.com/caldwellentertainmentau/?hl=en"
                )
              }
              className="w-5 h-5 relative cursor-pointer"
            >
              <img src={IgIcon.src} alt="..." />
            </div>
            <div
              onClick={() => window.open("https://twitter.com/caldwellentau")}
              className="w-5 h-5 relative cursor-pointer"
            >
              <img src={XIcon.src} alt="..." />
            </div>
            <div
              onClick={() =>
                window.open("https://vimeo.com/caldwellentertainment")
              }
              className="w-5 h-[17.42px] relative cursor-pointer"
            >
              <img src={VimeoIcon.src} alt="..." />
            </div>
          </div>
          <div className="w-[1px] h-full bg-white"></div>
          <Link
            href="tel:0410 835 683"
            className="text-white text-lg font-normal font-poppins tracking-wide"
          >
            0410 835 683
          </Link>
        </div>
      </div>
    </div>
  );
}
