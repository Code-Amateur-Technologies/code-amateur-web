"use client";
import { useRef, useState } from "react";
import HomeServicesCard from "./HomeServicesCard";
import { scrollLeft, scrollRight } from "@/utils/scroller";
import { servicesList } from "@/data/data";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeServicesScroller() {
  const serviceRef = useRef<any>();
  const [leftDisabled, setLeftDisabled] = useState<boolean>(true);
  const [rightDisabled, setRighttDisabled] = useState<boolean>();

  const scrollServices = () => {
    serviceRef.current.scrollLeft === 0
      ? setLeftDisabled(true)
      : setLeftDisabled(false);
    serviceRef.current.clientWidth + serviceRef.current.scrollLeft >=
    serviceRef.current.scrollWidth - 1
      ? setRighttDisabled(true)
      : setRighttDisabled(false);
  };

  return (
    <section className="py-8 px-4 md:p-20 grid gap-5">
      <h2 className="home-headings xl:w-1/2">
        We believe the right design will bring your business to life
      </h2>
      <div className="overflow-hidden">
        <div
          className="home-services-scroller"
          ref={serviceRef}
          onScroll={scrollServices}
        >
          {servicesList.map((service) => (
            <div key={service.id} className="home-service-scroll-box">
              <HomeServicesCard {...service} />
            </div>
          ))}
        </div>
      </div>
      <div className="home-services-scroll">
        <button
          className="home-services-scroll-button"
          onClick={() => scrollLeft(serviceRef)}
          disabled={leftDisabled}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        </button>
        <button
          className="home-services-scroll-button"
          onClick={() => scrollRight(serviceRef)}
          disabled={rightDisabled}
        >
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </button>
      </div>
    </section>
  );
}
