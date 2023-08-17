"use client";
import { useState, useEffect } from "react";

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
    <div className="home-operationslides flex flex-col justify-between">
      <h1 className="mb-4 sm:mb-10 text-base sm:text-xl">
        Check out how we operate
      </h1>
      <p className="mb-4 text-base sm:text-xl">0{data[index].id}</p>
      <p className="text-xl sm:text-4xl font-medium tracling-tight">
        {data[index].stepName}
      </p>
      <div className="flex">
        {data.map((items) => (
          <div className={`home-operationdot ${ items.id -1 === index ? "bg-celestialblue" : "bg-gray-100"}`} key={items.id} onClick={() => setIndex(items.id-1)}></div>
        ))}
      </div>
    </div>
  );
}
