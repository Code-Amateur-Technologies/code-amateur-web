"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Client, clientList } from "@/data/data";
import { ClientNextArrow, ClientPrevArrow } from "../utils/Icons";

export default function Clients() {
  const [value, setValue] = useState(0);
  const data: Client[] = clientList;

  function previousClient() {
    value === 0 ? setValue(data.length - 1) : setValue(value - 1);
  }
  function nextClient() {
    value === data.length - 1 ? setValue(0) : setValue(value + 1);
  }

  return (
    <div>
      <div className="client-list">
        {data.map((items) => (
          <Link href={"/"} key={items.id} className="md:mx-10">
            <Image src={items.client} alt={""} width={102} height={55} />
          </Link>
        ))}
      </div>
      <div className="p-8 border-y-2 flex-between md:hidden ">
        <button onClick={previousClient} className="client-navigation">
          <ClientPrevArrow />
        </button>
        <Link href={"/"} key={data[value].id} className="mx-5">
          <Image
            src={data[value].client}
            alt={""}
            width={102}
            height={55}
          ></Image>
        </Link>
        <button onClick={nextClient} className="client-navigation">
          <ClientNextArrow />
        </button>
      </div>
    </div>
  );
}
