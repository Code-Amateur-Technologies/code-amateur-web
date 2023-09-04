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
      <div>
        <FontAwesomeIcon icon={props.service_icon} size="2xl" />
        <p className="my-10 text-2xl sm:text-5xl font-medium">
          {props.service_name}
        </p>
      </div>
      <p className="text-sm sm:text-xl font-normal">
        {props.service_description}
      </p>
      <Link
        href={{ pathname: "/services", query: { section: props.service_hash } }}
        className="light-button border-transparent"
      >
        <RightArrow />
      </Link>
    </motion.div>
  );
}
