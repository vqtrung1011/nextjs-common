"use client";

import Link from "next/link";
import Logo from "/public/images/icons/logo.png";

function Footer() {
  return (
    <div className="w-full xl:px-20 px-6 py-14 flex">
      <div className="max-w-[1728px] w-full mx-auto flex-col justify-center items-center gap-20 inline-flex">
        <div className="grid grid-cols-[1fr,53px,1fr] w-full justify-between items-center gap-12">
          <div className="w-full h-[0px] border border-neutral-300" />
          <img className="w-[53px] h-14" src={Logo.src} alt="..." />
          <div className="w-full h-[0px] border border-neutral-300" />
        </div>

        <div className="max-w-[397px] w-full mx-auto flex-col justify-center items-center gap-4 inline-flex">
          <div className="text-zinc-600 text-base font-normal font-guntur uppercase leading-relaxed">
            © Copyright 2024 Caldwell Entertainment Pty Ltd.
          </div>
          <div className="h-px w-full bg-zinc-400" />
          <Link
            href="https://www.tekx.com.au"
            className="text-zinc-600 text-base font-normal font-guntur uppercase leading-relaxed"
          >
            WEBSITE BY TEKX
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
