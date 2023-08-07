"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RightArrow } from "./Icons";

export default function ServicesSlides() {
  const [index, setIndex] = useState<number>(0);
  const services = [
    { id: 1, text: "Product Strategy", img: "/assets/slideshow/img1.png" },
    { id: 2, text: "UX and UI", img: "/assets/slideshow/img2.png" },
    { id: 3, text: "Front-End", img: "/assets/slideshow/img3.png" },
    { id: 4, text: "Back-End", img: "/assets/slideshow/img4.png" },
  ];

  return (
    <div className="py-8 px-4 sm:p-20 bg-gray-200">
      <div className="flex flex-col lg:flex-row">
        <Image
          src={services[index].img}
          alt={""}
          width={1200}
          height={900}
          className="lg:w-1/2 mb-10 mr-10 rounded-3xl"
        />
        <div className="text-3xl sm:text-7xl font-medium tracking-tighter text-gunmetal">
          <p>{services[index].text}</p>
          <Link href={""} className="light-button mt-5">
            <p className="mx-2">Ask for a quote</p>
            <RightArrow />
          </Link>
        </div>
      </div>
      <div className="pt-5 text-center">
        {services.map((items) => (
          <span
            className={
              index === items.id - 1
                ? "bg-celestialblue services-dot"
                : "bg-white services-dot"
            }
            onClick={() => setIndex(items.id - 1)}
            key={items.id}
          />
        ))}
      </div>
    </div>
  );
}
