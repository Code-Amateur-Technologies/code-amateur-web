"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { testimonials } from "@/data/data";
import { slideLeft, slideRight } from "@/utils/slider";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import commentIcon from "@/public/assets/icons/customer_comment.svg";

export default function Testimonials() {
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
      <p className="testimonials-heading">Testimonials</p>
      <div
        className="testimonials-slider"
        ref={opinionRef}
        onScroll={scrollOpinions}
      >
        {testimonials.map((items) => (
          <div className="testimonials-card" key={items.id}>
            <div>
              <Image
                src={commentIcon}
                alt={"Icon indicating that the text shown here is a comment"}
                width={50}
                height={50}
                className="pb-5"
              />
              <p>
                {items.text.length > 250
                  ? `${items.text.substring(0, 250)}`
                  : items.text}
              </p>
            </div>
            <p className="w-1/2 pt-5 whitespace-nowrap overflow-hidden truncate">
              {items.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-around sm:justify-start">
        <button
          onClick={() => slideLeft(opinionRef)}
          className="testimonials-button mx-4"
          disabled={leftDisabled}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        </button>
        <button
          onClick={() => slideRight(opinionRef)}
          className="testimonials-button mx-4"
          disabled={rightDisabled}
        >
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </button>
      </div>
    </div>
  );
}
