"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Client, clientList } from "@/data/data";
import { ClientNextArrow, ClientPrevArrow } from "../utils/Icons";

export default function Clients() {
  const data: Client[] = clientList;
  const boxRef = useRef<any>();
  const [value, setValue] = useState(0);

  const slideLeft = () => {
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
  };

  const slideRight = () => {
    const width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
  };

  function previousClient() {
    value === 0 ? setValue(data.length - 1) : setValue(value - 1);
  }
  function nextClient() {
    value === data.length - 1 ? setValue(0) : setValue(value + 1);
  }

  return (
    <div>
      <section className="p-8 border-y-2 hidden md:flex md:justify-between">
        <button onClick={slideLeft} className="client-navigation">
          <ClientPrevArrow />
        </button>
        <div className="px-4 overflow-hidden">
          <div className="client-slider" ref={boxRef}>
            {data.map((items) => (
              <div key={items.id} className="flex-[0_0_90%] md:flex-[0_0_25%]">
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
      <section className="p-8 border-y-2 flex-between md:hidden ">
        <button onClick={previousClient} className="client-navigation">
          <ClientPrevArrow />
        </button>
        <div key={data[value].id} className="mx-5">
          <Image
            src={data[value].client}
            alt={""}
            width={102}
            height={55}
          ></Image>
        </div>
        <button onClick={nextClient} className="client-navigation">
          <ClientNextArrow />
        </button>
      </section>
    </div>
  );
}
