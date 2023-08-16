"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { customerOpinion, customerOpinions } from "@/data/data";
import { slideLeft, slideRight } from "@/utils/slider";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import commentIcon from "@/public/assets/icons/customer_comment.svg";

export default function CustomerOpinion() {
  const data: customerOpinion[] = customerOpinions;
  const opinionRef = useRef<any>();
  const [leftDisabled, setLeftDisabled] = useState<boolean>(true);
  const [rightDisabled, setRighttDisabled] = useState<boolean>();

  const scrollOpinions = () => {
    opinionRef.current.scrollLeft === 0
      ? setLeftDisabled(true)
      : setLeftDisabled(false);
    opinionRef.current.clientWidth + opinionRef.current.scrollLeft >=
    opinionRef.current.scrollWidth - 1
      ? setRighttDisabled(true)
      : setRighttDisabled(false);
  };

  return (
    <div className="p-8 sm:p-20 bg-raisinblack">
      <p className="customeropinion-heading">Opinions of our customers</p>
      <div
        className="customeropinion-slider"
        ref={opinionRef}
        onScroll={scrollOpinions}
      >
        {data.map((items) => (
          <div className="customeropinion-card" key={items.id}>
            <Image
              src={commentIcon}
              alt={""}
              width={50}
              height={50}
              className="pb-5"
            />
            <p>{items.text}</p>
            <p className="w-1/3 pt-5 whitespace-nowrap overflow-hidden truncate">
              {items.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-around sm:justify-start">
        <button
          onClick={() => slideLeft(opinionRef)}
          className="customeropinion-button mx-4"
          disabled={leftDisabled}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        </button>
        <button
          onClick={() => slideRight(opinionRef)}
          className="customeropinion-button mx-4"
          disabled={rightDisabled}
        >
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </button>
      </div>
    </div>
  );
}
