"use client";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.8,
        ease: [0.61, 1, 0.88, 1],
      }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="bg-[url('/assets/images/second_background.svg')] bg-center bg-auto"
    >
      <h1 className="quote-heading">
        We believe that the quality of the product is the most important thing
        for the customer
      </h1>
    </motion.section>
  );
}
