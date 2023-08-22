"use client";
import { motion } from "framer-motion";

export default function FirstHeading() {
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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="firstheading"
    >
      <h1 className="text-celestialblue blue-gradient">Quality.</h1>
      <h1 className="text-gunmetal">Excellence.</h1>
      <h1 className="text-gunmetal">Innovation.</h1>
    </motion.div>
  );
}
