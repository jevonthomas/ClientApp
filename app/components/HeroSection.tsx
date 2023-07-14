"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  header: string;
  subheader: string;
  image: string;
  imageDescription: string;
  reverse: boolean;
  callToAction?: string;
  ctaLink?: string;
}

export default function HeroSection(props: Props) {
  const {
    id,
    header,
    subheader,
    callToAction,
    image,
    imageDescription,
    ctaLink,
    reverse,
  } = props;

  return (
    <section id={id} className="w-full bg-[#2f2c98]">
      <div className="relative isolate">
        <div
          className={`mx-auto py-32 px-4 sm:px-20 flex flex-col lg:flex-row lg:justify-center justify-between align-middle items-center ${
            reverse && "flex-row-reverse"
          }`}
        >
          <div className="lg:text-left text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
              {header}
            </h1>
            <p className="mt-6 text-2xl leading-8 text-neutral-300">
              {subheader}
            </p>
            {callToAction && (
              <Link
                href={ctaLink || "#"}
                className={
                  "block lg:inline-block text-neutral-100 hover:text-white font-bold mt-8"
                }
              >
                <button className="rounded-lg bg-[#F6A472] py-2 px-4 hover:bg-[#ff8300]">
                  {callToAction}
                </button>
              </Link>
            )}
          </div>
          <Image
            className="mt-8 lg:mt-0"
            src={image}
            alt={imageDescription}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
