"use client"; // this is a client component
import React from "react";
import Image from "next/image";

interface Props {
  imgSrc: string;
  imgDescription: string;
  header: string;
  subheader: string;
}

export default function ServiceCard(props: Props) {
  const { imgSrc, header, subheader, imgDescription } = props;

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow flex grow flex-col justify-between m-1"
      style={{ maxWidth: "210px" }}
    >
      <Image className="rounded-t-lg" src={imgSrc} alt={imgDescription} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {header}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{subheader}</p>
      </div>
    </div>
  );
}
