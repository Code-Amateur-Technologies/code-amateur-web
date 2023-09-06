"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Operation {
  id: number;
  stepName: string;
}

export default function OperationsSlides() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const operations: Operation[] = [
    { id: 1, stepName: "Analyzing the problem" },
    { id: 2, stepName: "Drafting the solution" },
    { id: 3, stepName: "Implementing a scalable solution" }, // in future include text in a staticText file
  ];

  useEffect(() => {
    const loop = setInterval(() => {
      currentSlide === 2 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
    }, 2000);
    return () => {
      clearInterval(loop);
    };
  }, [currentSlide]);

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
        <p className="text-base sm:text-xl">0{operations[currentSlide].id}</p>
        <p className="operation">{operations[currentSlide].stepName}</p>
        <div className="flex">
          {operations.map((items,index) => (
            <div
              className={`operationdot ${
                index === currentSlide ? "gradient" : "bg-gray-100"
              }`}
              key={items.id}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
