"use client";
import { useState, useEffect } from "react";
import SlideLeft from "@/components/animate/SlideLeft";
import { motion } from "framer-motion";

interface Data {
  id: number;
  stepName: string;
}

export default function OperationsSlides() {
  const [index, setIndex] = useState<number>(0);
  const data: Data[] = [
    { id: 1, stepName: "Analyzing the Problem" },
    { id: 2, stepName: "Drafting the Solution" },
    { id: 3, stepName: "Implementing a scalable Solution" },
  ];

  useEffect(() => {
    const loop = setInterval(() => {
      index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 2000);
    return () => {
      clearInterval(loop);
    };
  }, [index]);

  return (
    <motion.div initial="hidden"
    whileInView="visible"
    transition={{
      duration: 0.5,
      ease: [0.61, 1, 0.88, 1],
    }}
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    }} className="home-operationslides flex flex-col justify-between">
      <h1 className="mb-4 sm:mb-10 text-base sm:text-xl">
        Check out how we operate
      </h1>
      <p className="text-base sm:text-xl">0{data[index].id}</p>
      <p className="my-4 text-xl sm:text-4xl font-medium tracling-tight">
        {data[index].stepName}
      </p>
      <div className="flex">
        {data.map((items) => (
          <div
            className={`home-operationdot ${
              items.id - 1 === index ? "bg-celestialblue" : "bg-gray-100"
            }`}
            key={items.id}
            onClick={() => setIndex(items.id - 1)}
          ></div>
        ))}
      </div>
    </motion.div>
  );
}
