"use client";
import { motion, useCycle } from "framer-motion";
import { RightArrow } from "@/utils/customIcons";
import Link from "next/link";

export default function LeftButton() {
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
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="mt-6 md:self-start "
    >
      <Link
            href={"/about"}
            className="dark-button gap-2"
          >
            <p>know about us</p>
            <RightArrow />
          </Link>
    </motion.div>
  );
}
