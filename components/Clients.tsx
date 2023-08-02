"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Clients() {
  const clientList = [
    { id: 1, client: "/assets/clients/clients_pic1.svg" },
    { id: 2, client: "/assets/clients/clients_pic2.svg" },
    { id: 3, client: "/assets/clients/clients_pic3.svg" },
    { id: 4, client: "/assets/clients/clients_pic4.svg" },
    { id: 5, client: "/assets/clients/clients_pic5.svg" },
  ];
  const [value, setValue] = useState(0);
  function previousClient() {
    value === 0 ? setValue(clientList.length - 1) : setValue(value - 1);
  }
  function nextClient() {
    value === clientList.length - 1 ? setValue(0) : setValue(value + 1);
  }
  return (
    <div>
      <div className="p-10 lg:p-20 border-y-2 md:flex md:justify-between hidden">
        {clientList.map((items) => (
          <Link href={""} key={items.id} className="md:mx-10">
            <Image src={items.client} alt={""} width={102} height={55} />
          </Link>
        ))}
      </div>
      <div className="p-8 border-y-2 flex-between md:hidden ">
        <button onClick={previousClient} className="clients-navigation">
          <Image
            src={"/assets/icons/client_prev_arrow.svg"}
            alt={""}
            width={30}
            height={30}
            
          />
        </button>
        <Link href={""} key={clientList[value].id} className="mx-5">
          <Image
            src={clientList[value].client}
            alt={""}
            width={102}
            height={55}
          ></Image>
        </Link>
        <button onClick={nextClient} className="clients-navigation">
          <Image
            src={"/assets/icons/client_next_arrow.svg"}
            alt={""}
            width={30}
            height={30}
            
          />
        </button>
      </div>
    </div>
  );
}
