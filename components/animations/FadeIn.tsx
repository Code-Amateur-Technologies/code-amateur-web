"use client";
import { motion } from "framer-motion";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.8,
        ease: [0.61, 1, 0.88, 1],
      }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}
