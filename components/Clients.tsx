"use client";
import Image from "next/image";
import { useRef } from "react";
import { Client, clientList } from "@/data/data";
import { slideLeft, slideRight } from "@/utils/slider";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clients() {
  const data: Client[] = clientList;
  const clientRef = useRef<any>();

  return (
      <section className="p-8 border flex items-center">
        <button onClick={() => slideLeft(clientRef)} className="client-navigation">
        <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="w-full px-4">
          <div className="client-slider no-scrollbar" ref={clientRef}>
            {data.map((items) => (
              <div key={items.id} className="client-box">
                <Image
                  src={items.client}
                  alt={""}
                  width={150}
                  height={150}
                ></Image>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => slideRight(clientRef)} className="client-navigation">
        <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </section>
  );
}
