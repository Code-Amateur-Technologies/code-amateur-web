"use client";
import { motion } from "framer-motion";

export default function ServicesOperations() {
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
      className="services-operations"
    >
      <div className="md:w-1/4 self-start">
        <h1 className="mb-5 text-xl">
          01<span className="text-gray-300"> - 03</span>
        </h1>
        <p>Analyzing the Problem</p>
      </div>
      <div className="md:w-1/4 self-start">
        <h1 className="mb-5 text-xl">
          02<span className="text-gray-300"> - 03</span>
        </h1>
        <p>Drafting the Solution</p>
      </div>
      <div className="md:w-1/4 self-start">
        <h1 className="mb-5 text-xl">
          03<span className="text-gray-300"> - 03</span>
        </h1>
        <p>Implementing a scalable Solution</p>
      </div>
    </motion.div>
  );
}
