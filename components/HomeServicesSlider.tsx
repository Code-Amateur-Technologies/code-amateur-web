"use client"
import { useRef, useState } from "react";
import HomeServicesCard from "./HomeServicesCard";
import { slideLeft, slideRight } from "@/utils/slider";
import { services } from "@/data/data";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeServicesSlider() {
  const serviceRef = useRef<any>();
  const [leftDisabled, setLeftDisabled] = useState<boolean>(true);
  const [rightDisabled, setRighttDisabled] = useState<boolean>();

  const scrollServices = () => {
    serviceRef.current.scrollLeft === 0 ? setLeftDisabled(true) : setLeftDisabled(false);
    serviceRef.current.clientWidth + serviceRef.current.scrollLeft >= serviceRef.current.scrollWidth -1 ? setRighttDisabled(true) : setRighttDisabled(false)
  }

  return (
    <div className="overflow-hidden">
      <div className="mt-12 flex overflow-x-auto no-scrollbar scroll-smooth" ref={serviceRef} onScroll={scrollServices}>
        {services.map((service) => (
          // flex-[0_0_50%] set the width of each card to 30% of the viewport
          // for mobile devices we use 90% width
          <div key={service.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_30%] home-service">
            <HomeServicesCard {...service} />
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-around sm:justify-start">
        <button className="light-button mr-5 border disabled:opacity-50" onClick={() => slideLeft(serviceRef)} disabled={leftDisabled}>
        <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        </button>
        <button className="light-button border disabled:opacity-50" onClick={() => slideRight(serviceRef)} disabled={rightDisabled}>
        <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </button>
      </div>
    </div>
  );
}
