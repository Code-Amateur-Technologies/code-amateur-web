import React, { useRef } from "react";
import { RightArrow, LeftArrow } from "../utils/Icons";
import HomeServicesCard from "./HomeServicesCard";
import services from "@/data/services.json";

export default function HomeServicesSlider() {
  const boxRef = useRef<any>();

  const prev = () => {
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
  };

  const next = () => {
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
  };

  return (
    <div className="overflow-hidden">
      <div className="mt-12 flex overflow-x-hidden scroll-smooth" ref={boxRef}>
        {services.map((services) => (
          // 3. flex-[0_0_50%] set the width of each card to 25% of the viewport
          // for mobile devices we use 90% width
          <div key={services.id} className="flex-[0_0_90%] md:flex-[0_0_30%] mr-10">
            <HomeServicesCard {...services} />
          </div>
        ))}
      </div>
      <div className="mt-10 flex">
        <button className="light-button mr-5" onClick={prev}>
          <LeftArrow />
        </button>
        <button className="light-button" onClick={next}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
