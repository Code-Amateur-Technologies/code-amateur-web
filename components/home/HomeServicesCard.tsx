"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { RightArrow } from "../../utils/customIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function HomeServicesCard(props: {
  service_hash: string;
  service_name: string;
  service_description: string;
  service_icon: any;
}) {
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.div
      animate={{
        rotateY: isHovered ? 360 : 0,
      }}
      onMouseOver={() => setHovered(true)}
      transition={{
        duration: 0.5,
        ease: [0.61, 1, 0.88, 1],
      }}
      className="home-servicecard"
    >
      <div className="flex items-start flex-col gap-5">
        <FontAwesomeIcon icon={props.service_icon} size="2xl" />
        <h3 className="text-2xl sm:text-5xl font-medium">
          {props.service_name}
        </h3>
      </div>
      <p className="text-sm sm:text-xl font-normal">
        {props.service_description}
      </p>
      <Link
        rel="next"
        href={{ pathname: "/services", query: { section: props.service_hash } }}
        title={`Explore more about ${props.service_name} services we provide at Code Amateur`}
        className="home-servicecard-button"
      >
        <RightArrow />
      </Link>
    </motion.div>
  );
}
