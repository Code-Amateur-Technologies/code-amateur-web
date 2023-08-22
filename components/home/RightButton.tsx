"use client";
import { motion, useCycle } from "framer-motion";
import { RightArrow } from "@/utils/customIcons";
import Link from "next/link";

export default function RightButton() {
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
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="mt-6 lg:self-end "
    >
      <Link className="dark-button gap-2" href={"/services"}>
        <p>see our services</p>
        <RightArrow />
      </Link>
    </motion.div>
  );
}
