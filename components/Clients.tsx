"use client";
import { useRef } from "react";
import Image from "next/image";
import { Client, clientList } from "@/data/data";
import { ClientNextArrow, ClientPrevArrow } from "../utils/Icons";

export default function Clients() {
  const data: Client[] = clientList;
  const boxRef = useRef<any>();

  const slideLeft = () => {
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
  };

  const slideRight = () => {
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
  };

  return (
      <section className="p-8 border-y-2 flex justify-between">
        <button onClick={slideLeft} className="client-navigation">
          <ClientPrevArrow />
        </button>
        <div className="w-full px-4 overflow-hidden">
          <div className="client-slider" ref={boxRef}>
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
        <button onClick={slideRight} className="client-navigation">
          <ClientNextArrow />
        </button>
      </section>
  );
}
