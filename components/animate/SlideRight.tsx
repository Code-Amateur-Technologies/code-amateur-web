"use client";
import { motion } from "framer-motion";

export default function SlideRight({ children }: { children: React.ReactNode }) {
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
      
    >
      {children}
    </motion.div>
  );
}
