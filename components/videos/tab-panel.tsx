/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useState } from "react";
import clsx from "clsx";

export default function TabPanel() {
  const [current, setCurrent] = useState("");

  const data = [
    { name: "FEATURED" },
    { name: "MUSIC VIDEOS" },
    { name: "COMMERCIALS" },
    { name: "CORPORATE" },
    { name: "EXPLAINER" },
    { name: "PROMOTIONAL" },
    { name: "LIVE EVENTS" },
  ];

  return (
    <div className="w-full py-8 px-6 relative bg-white border-b border-neutral-200 overflow-x-auto overflow-y-hidden no-scrollbar">
      <div className="relative w-[1408px] mx-auto justify-between items-center flex">
        {data.map((d, idx) => (
          <>
            <div
              onMouseOver={() => setCurrent(d.name)}
              onMouseOut={() => setCurrent("")}
              className="relative text-zinc-600 text-base font-medium font-guntur leading-relaxed cursor-pointer hover:opacity-80"
            >
              {d.name}
              <div
                className={clsx({
                  ["h-px bg-zinc-400 absolute left-0 -bottom-2 transition-all duration-300 ease-in-out"]:
                    true,
                  ["w-full"]: current === d.name,
                  ["w-0"]: current !== d.name,
                })}
              />
            </div>
            <div
              className={clsx({
                ["w-px h-3 bg-stone-300"]: true,
                ["hidden"]: idx === data.length - 1,
              })}
            />
          </>
        ))}
      </div>
    </div>
  );
}
