"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function OfferingsSlides() {
  const [index, setIndex] = useState<number>(0);
  const offers = [
    { id: 1, text: "Product", img: "/assets/slideshow/img_1.jpg" },
    { id: 2, text: "UX and UI", img: "/assets/slideshow/img_2.jpg" },
    { id: 3, text: "Front-End", img: "/assets/slideshow/img_3.jpg" },
    { id: 4, text: "Back-End", img: "/assets/slideshow/img_4.jpg" },
  ];
  const dots = [1, 2, 3, 4];

  return (
    <div className="py-8 px-4 sm:p-20 bg-gray-200">
      <div className="flex flex-col lg:flex-row">
        <Image
          src={offers[index].img}
          alt={""}
          width={1200}
          height={900}
          className="lg:w-1/2 mb-10 mr-10 rounded-3xl"
        />
        <div className="text-3xl sm:text-7xl font-medium tracking-tighter text-gunmetal">
          <p>{offers[index].text}</p>
          <div className="light-button mt-5">
            <Link href={""}>Ask for a quote</Link>
          </div>
        </div>
      </div>
      <div className="pt-5 text-center">
        {dots.map((items) => (
          <span
            className="offer-dot"
            onClick={() => setIndex(items - 1)}
            key={items}
          />
        ))}
      </div>
    </div>
  );
}
