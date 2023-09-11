"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { clientList } from "@/data/data";
import { scrollLeft, scrollRight } from "@/utils/scroller";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clients() {
  const clientRef = useRef<any>();
  const [leftDisabled, setLeftDisabled] = useState<boolean>(true);
  const [rightDisabled, setRighttDisabled] = useState<boolean>();

  const scrollServices = () => {
    clientRef.current.scrollLeft === 0
      ? setLeftDisabled(true)
      : setLeftDisabled(false);
    clientRef.current.clientWidth + clientRef.current.scrollLeft >=
    clientRef.current.scrollWidth - 1
      ? setRighttDisabled(true)
      : setRighttDisabled(false);
  };

  return (
    <div className="py-20">
      <section className="mb-12 px-20">
        <h2 className="client-heading">Our Happy Customers</h2>
      </section>
      <section className="px-8 flex items-center">
        <button
          name="scroll clients previous"
          onClick={() => scrollLeft(clientRef)}
          disabled={leftDisabled}
          className="client-navigation"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="w-full px-4">
          <div
            className="client-slider no-scrollbar"
            ref={clientRef}
            onScroll={scrollServices}
          >
            {clientList.map((items) => (
              <div key={items.id} className="client-card">
                <Image
                  src={items.client_image}
                  alt={items.client_name + " are one of our happy customers"}
                  width={150}
                  height={150}
                ></Image>
              </div>
            ))}
          </div>
        </div>
        <button
          name="scroll clients forward"
          onClick={() => scrollRight(clientRef)}
          disabled={rightDisabled}
          className="client-navigation"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </section>
    </div>
  );
}
