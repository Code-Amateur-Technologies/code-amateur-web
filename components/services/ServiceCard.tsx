"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";

export default function ServiceCard(props: {
  id: number;
  img: string;
  serviceIcon: any;
  service: string;
  description: string;
  technologies: any[];
}) {
  const [cardStyle, setCardStyle] = useState<boolean>(true);
  useEffect(() => {
    props.id % 2 ? setCardStyle(false) : "";
  });

  return (
    <div
      className={`py-8 px-4 sm:p-20 ${
        cardStyle ? "bg-white" : "bg-celestialblue"
      }`}
    >
      <div
        className={`flex flex-col ${
          cardStyle ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <motion.div
          initial={cardStyle ? "blue" : "white"}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.61, 1, 0.88, 1],
          }}
          variants={{
            blue: { opacity: 0, x: -100 },
            white: { opacity: 0, x: 100 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="lg:w-1/2 mb-5 sm:mb-0 "
        >
          <Image
            src={props.img}
            alt={"Image for " + props.service + " services we provide"}
            width={700}
            height={550}
            className="rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={cardStyle ? "white" : "blue"}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.61, 1, 0.88, 1],
          }}
          variants={{
            blue: { opacity: 0, x: -100 },
            white: { opacity: 0, x: 100 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="lg:w-1/2 px-5 flex-center"
        >
          <div
            className={`font-medium ${
              cardStyle ? "text-gunmetal" : "text-white"
            }`}
          >
            <div className="flex-start">
              <FontAwesomeIcon icon={props.serviceIcon} size="2xl" />
              <p className="ml-5 text-3xl sm:text-5xl">{props.service}</p>
            </div>
            <p className="my-5 text-xl sm:text-2xl">{props.description}</p>
            <div className="lg:px-10 grid grid-rows-5 grid-flow-col gap-3">
              {props.technologies.map((items, index) => (
                <div key={index} className="mb-4 flex">
                  {items.techsvg !== "" ? (
                    <Image
                      src={items.techsvg}
                      alt={""}
                      width={25}
                      height={25}
                    />
                  ) : (
                    <FontAwesomeIcon icon={items.techIcon} size="xl" />
                  )}
                  <p className="ml-4 text-sm sm:text-xl">{items.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
