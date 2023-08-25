"use client";
import { portfolioList } from "@/data/data";
import { motion } from "framer-motion";

export default function Portfolio() {
  const data = portfolioList;
  return (
    <div className="py-8 px-4 md:p-20">
      <p className="text-2xl sm:text-7xl font-medium text-gunmetal text-center">
        Portfolio
      </p>
      <div className="flex flex-wrap items-center">
        {data.map((items, index) => (
          <motion.div
            initial={index%2 == 0 ? "hiddenLeft" : "hiddenRight"}
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
            className="w-full lg:w-1/2 h-fit flex-center"
            key={items.id}
          >
            <img
              src={items.client_portfolio_image}
              alt={"Bringing " + items.client_name + " vision to life with passion and innovative solutions"}
              className="w-auto h-auto p-10"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
