"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Opinion, customerOpinions } from "@/data/data";
import { RightArrow, LeftArrow } from "../utils/Icons";
import commentIcon from "@/public/assets/icons/customer_comment.svg";

export default function CustomerOpinion() {
  const data: Opinion[] = customerOpinions;
  const [current, setCurrent] = useState<number>(1);

  function previous() {
    current > 0 ? setCurrent(current - 1) : setCurrent(data.length - 1);
  }

  function next() {
    current === data.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  }

  return (
    <div className="py-8 px-4 sm:p-20 bg-raisinblack">
      <p className="customeropinion-heading">Opinions of our customers</p>
      <div className="customeropinion-gridcontainer">
        <div className="p-12 bg-spacecadet rounded-3xl">
          <Image
            src={commentIcon}
            alt={""}
            width={50}
            height={50}
            className="pb-5"
          />
          <p>{data[current-1].text}</p>
          <p className="pt-5">{data[current-1].name}</p>
        </div>
        <div className="hidden md:block p-12 bg-spacecadet rounded-3xl">
          <Image
            src={commentIcon}
            alt={""}
            width={50}
            height={50}
            className="pb-5"
          />
          <p>{data[current].text}</p>
          <p className="pt-5">{data[current].name}</p>
        </div>
        <div className="hidden lg:block p-12 bg-spacecadet rounded-3xl">
          <Image
            src={commentIcon}
            alt={""}
            width={50}
            height={50}
            className="pb-5"
          />
          <p>{data[current+1].text}</p>
          <p className="pt-5">{data[current+1].name}</p>
        </div>
      </div>
      <div className="flex justify-around sm:justify-start">
        <button onClick={previous} disabled={current-1 === 0} className="customeropinion-button mx-4">
          <LeftArrow />
        </button>
        <button onClick={next} disabled={current+1 === data.length-1} className="customeropinion-button mx-4">
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
