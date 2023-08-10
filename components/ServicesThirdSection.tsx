"use client";
import Image from "next/image";
import { RightArrow, LeftArrow } from "../utils/Icons";
import { useState } from "react";

export default function ServicesThirdSection() {
  const [index, setIndex] = useState(0);
  const data = [
    {
      id: 1,
      text: "Smart solutions are at the core of all that we do at Code Amateur Technologies.",
    },
    {
      id: 2,
      text: "Our main goal is finding smart ways of using technology that will help build a better tomorrow for everyone, everywhere.",
    },
    {
      id: 3,
      text: "Get in touch to set up a meeting with one of our representatives.",
    },
  ];

  function previous() {
    index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
  }
  function next() {
    index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  return (
    <div className="services-thirdsection">
      <div className="lg:w-1/2 h-full flex flex-col">
          <p className="my-4 text-2xl sm:text-5xl">{data[index].text}</p>
        <div className="flex justify-around sm:justify-center lg:justify-start">
          <button onClick={previous} className="services-button sm:mx-4">
            <LeftArrow />
          </button>
          <button onClick={next} className="services-button mx-4">
            <RightArrow />
          </button>
        </div>
      </div>
      <Image
        src={"/assets/images/services_3.png"}
        alt={""}
        width={780}
        height={745}
        className="lg:w-5/12 rounded-3xl"
      />
    </div>
  );
}
