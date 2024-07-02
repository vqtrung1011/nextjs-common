/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import Frame1 from "/public/images/home/S - Film 1.png";
import Frame2 from "/public/images/home/S - Film 2.png";
import Frame3 from "/public/images/home/S - Film 3.png";
import Frame4 from "/public/images/home/S - Film 4.png";
import Frame5 from "/public/images/home/S - Film 5.png";
import Frame6 from "/public/images/home/S - Film 6.png";
import Frame7 from "/public/images/home/S - Film 7.png";
import Frame8 from "/public/images/home/S - Film 8.png";
import Frame9 from "/public/images/home/S - Film 9.png";
import Frame10 from "/public/images/home/S - Film 10.png";
import Frame11 from "/public/images/home/S - Film 11.png";
import Frame12 from "/public/images/home/S - Film 12.png";
import Frame13 from "/public/images/home/S - Film 13.png";
import Frame14 from "/public/images/home/S - Film 14.png";
import Frame15 from "/public/images/home/S - Film 15.png";

export default function Featured() {
  const data = [
    { img: Frame1.src },
    { img: Frame2.src },
    { img: Frame3.src },
    { img: Frame4.src },
    { img: Frame5.src },
    { img: Frame6.src },
    { img: Frame7.src },
    { img: Frame8.src },
    { img: Frame9.src },
    { img: Frame10.src },
    { img: Frame11.src },
    { img: Frame12.src },
    { img: Frame13.src },
    { img: Frame14.src },
    { img: Frame15.src },
  ];

  return (
    <div className="w-full flex xl:px-20 px-6 relative justify-center">
      <div className="max-w-[1728px] mx-auto w-full pt-14 pb-28 justify-center items-center inline-flex">
        <div className="w-full self-stretch flex-col justify-start items-center gap-20 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-14 flex">
            <div className="w-full text-center text-zinc-700 text-[32px] font-light font-poppins leading-[80px] tracking-widest">
              Featured
            </div>

            <div className="w-full justify-between items-start gap-6 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
              {data.map((d, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center w-full"
                >
                  <img className="object-cover" src={d.img} alt="..." />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
