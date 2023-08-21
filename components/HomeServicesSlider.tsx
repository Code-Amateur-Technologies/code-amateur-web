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
    <section className="py-8 px-4 sm:p-20 grid">
    <h1 className="home-headings lg:w-1/2">
          We believe the right design will bring your business to life
        </h1>
    <div className="overflow-hidden">
      <div className="mt-12 flex gap-10 overflow-x-auto no-scrollbar scroll-smooth" ref={serviceRef} onScroll={scrollServices}>
        {services.map((service) => (
          <div key={service.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_28%]">
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
    </section>
  );
}
