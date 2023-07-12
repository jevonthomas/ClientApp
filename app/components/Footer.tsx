import Link from "next/link"
import React from "react"
import {
  AiFillInstagram,
} from "react-icons/ai"
import {
    FaFacebook,
    FaTiktok
} from "react-icons/fa"
import Image from 'next/image'


interface NavItem {
    label: string
    page: string
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
    {
      label: "Contact Us",
      page: "contact",
    },
  ]

const Footer = () => {
  return (
    <footer className="mx-auto bg-[#191E6A]">
      <hr className="w-full h-0.5 mx-auto bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-100">
        <Link href='/'>
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
        </div>
        <div className="items-center justify-center space-y-4 m-6 md:flex md:space-x-6 md:space-y-0">
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
                )
              })}
            </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://www.facebook.com/profile.php?id=100063959925773"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.instagram.com/fesoln"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.tiktok.com/@fesoln"
            rel="noreferrer"
            target="_blank"
          >
            <FaTiktok
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer