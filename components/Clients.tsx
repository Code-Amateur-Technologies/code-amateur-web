"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Client, clientList } from "@/data/data";
import { slideLeft, slideRight } from "@/utils/slider";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clients() {
  const data: Client[] = clientList;
  const clientRef = useRef<any>();
  const [leftDisabled, setLeftDisabled] = useState<boolean>(true);
  const [rightDisabled, setRighttDisabled] = useState<boolean>();

  const scrollServices = () => {
    clientRef.current.scrollLeft === 0 ? setLeftDisabled(true) : setLeftDisabled(false);
    clientRef.current.clientWidth + clientRef.current.scrollLeft >= clientRef.current.scrollWidth -1 ? setRighttDisabled(true) : setRighttDisabled(false)
  }

  return (
      <section className="p-8 border flex items-center">
        <button onClick={() => slideLeft(clientRef)} disabled={leftDisabled} className="client-navigation">
        <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="w-full px-4">
          <div className="client-slider no-scrollbar" ref={clientRef} onScroll={scrollServices}>
            {data.map((items) => (
              <div key={items.id} className="client-box">
                <Image
                  src={items.client}
                  alt={"Image of our client "}
                  width={150}
                  height={150}
                ></Image>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => slideRight(clientRef)} disabled={rightDisabled} className="client-navigation">
        <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </section>
  );
}
