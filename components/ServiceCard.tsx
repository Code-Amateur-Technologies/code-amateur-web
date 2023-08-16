"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ServiceCard(props: {
    id: number;
    img: string;
    serviceIcon: any;
    service: string;
    description: string;
    technologies: any[];
  }
) {
  const [cardStyle, setCardStyle] = useState<boolean>(true);
  useEffect(() => {
    props.id % 2 ? setCardStyle(false) : "";
  });

  return (
    <div
      className={`py-8 px-4 sm:p-20 ${
        cardStyle ? "bg-celestialblue" : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col ${
          cardStyle ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <Image
          src={props.img}
          alt={""}
          width={700}
          height={550}
          className="lg:w-1/2 mb-5 sm:mb-0 rounded-3xl"
        />
        <div className="w-full px-5 flex-center">
        <div
          className={`font-medium ${
            cardStyle ? "text-white" : "text-gunmetal"
          }`}
        >
          <div className="flex-start">
            <FontAwesomeIcon icon={props.serviceIcon} size="2xl" />
            <p className="ml-5 text-3xl sm:text-5xl">{props.service}</p>
          </div>
          <p className="my-5 text-xl sm:text-2xl">{props.description}</p>
          <div className="px-10">
            {props.technologies.map((items, index) => (
              <div key={index} className="mb-4 flex">
                {items.techsvg !== "" ? <img src={items.techsvg} className="text-xs" /> : <FontAwesomeIcon icon={items.techIcon} size="xl" />}
                <p className="ml-4 text-sm sm:text-xl">{items.tech}</p>
              </div>
            ))}
          </div>
          {/* <Link href={""} className="light-button mt-5">
            <p className="mx-2">about us</p>
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </Link> */}
        </div>
        </div>
        
      </div>
    </div>
  );
}
