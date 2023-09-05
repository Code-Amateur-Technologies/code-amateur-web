"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Operation {
  id: number;
  stepName: string;
}

export default function OperationsSlides() {
  const [index, setIndex] = useState<number>(0);
  const operations: Operation[] = [
    { id: 1, stepName: "Analyzing the Problem" },
    { id: 2, stepName: "Drafting the Solution" },
    { id: 3, stepName: "Implementing a scalable Solution" },
  ];

  useEffect(() => {
    const loop = setInterval(() => {
      index === operations.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 2000);
    return () => {
      clearInterval(loop);
    };
  }, [index]);

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
      className="operationslides"
    >
      <div className="operationslides-container">
        <h3 className="operation-heading">Check out how we operate</h3>
        <p className="text-base sm:text-xl">0{operations[index].id}</p>
        <p className="operation">{operations[index].stepName}</p>
        <div className="flex">
          {operations.map((items) => (
            <div
              className={`operationdot ${
                items.id - 1 === index ? "gradient" : "bg-gray-100"
              }`}
              key={items.id}
              onClick={() => setIndex(items.id - 1)}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
