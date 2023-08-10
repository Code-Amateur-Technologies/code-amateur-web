"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Service, services } from "@/data/data";
import { RightArrow } from "../utils/Icons";

export default function ServicesSlides() {
  const [index, setIndex] = useState<number>(0);
  const data: Service[] = services;

  return (
    <div className="py-8 px-4 sm:p-20 bg-gray-200">
      <div className="flex flex-col lg:flex-row">
        <Image
          src={data[index].img}
          alt={""}
          width={1200}
          height={900}
          className="lg:w-1/2 mb-10 mr-10 rounded-3xl"
        />
        <div className="text-3xl sm:text-7xl font-medium tracking-tighter text-gunmetal">
          <p>{services[index].service}</p>
          {/* <Link href={""} className="light-button mt-5">
            <p className="mx-2">Ask for a quote</p>
            <RightArrow />
          </Link> */}
        </div>
      </div>
      <div className="pt-5 text-center">
        {data.map((items) => (
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
