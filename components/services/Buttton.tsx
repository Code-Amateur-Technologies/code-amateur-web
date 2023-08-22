"use client";
import { RightArrow } from "@/utils/customIcons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.5,
        ease: [0.61, 1, 0.88, 1],
      }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Link href={"/contact"} className="dark-button">
        <p className="mx-2">contact us</p>
        <RightArrow />
      </Link>
    </motion.div>
  );
}
