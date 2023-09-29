"use client";
import { portfolioList } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const data = portfolioList;
  return (
    <div className="py-8 px-4 md:p-20">
      <h2 className="portfolio-heading">Portfolio</h2>
      <div className="portfolio-grid">
        {data.map((items, index) => (
          <motion.div
            initial={index % 2 == 0 ? "hiddenLeft" : "hiddenRight"}
            whileInView="visible"
            transition={{
              duration: 0.5,
              ease: [0.61, 1, 0.88, 1],
            }}
            viewport={{ once: true }}
            variants={{
              hiddenLeft: { opacity: 0, x: -50 },
              hiddenRight: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="portfolio-box"
            key={items.id}
          >
            <Image
              src={items.client_portfolio_image}
              width={1000}
              height={500}
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt={
                "Bringing " +
                items.client_name +
                " vision to life with passion and innovative solutions"
              }
              className="w-auto h-auto p-10"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
