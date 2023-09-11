"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { testimonials } from "@/data/data";
import { scrollLeft, scrollRight } from "@/utils/scroller";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import commentIcon from "@/public/assets/images/customer_comment.svg";

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
    <div className="p-8 lg:p-20 gradient">
      <h2 className="testimonials-heading">Testimonials</h2>
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
          name="scroll testimonials previous"
          onClick={() => scrollLeft(opinionRef)}
          className="testimonials-button mx-4"
          disabled={leftDisabled}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        </button>
        <button
          name="scroll testimonials forward"
          onClick={() => scrollRight(opinionRef)}
          className="testimonials-button mx-4"
          disabled={rightDisabled}
        >
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </button>
      </div>
    </div>
  );
}
