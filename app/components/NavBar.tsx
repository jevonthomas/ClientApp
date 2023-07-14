"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Portfolio",
    page: "portfolio",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 sm:px-20 absolute top-0 z-50 bg-transparent">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <div className="container flex items-center space-x-2">
                <Image
                  src="/fesolutions-logo-dark-background.svg"
                  alt="FESolutions logo"
                  width={75}
                  height={18}
                  priority
                />
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-neutral-100 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    href={`/${item.page}`}
                    className={
                      "block lg:inline-block text-neutral-100 hover:text-neutral-200 font-bold"
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href={`/contact`}
                className={
                  "block lg:inline-block text-neutral-100 hover:text-white font-bold"
                }
              >
                <button className="rounded-lg bg-[#F6A472] py-2 px-4 hover:bg-[#ff8300]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
