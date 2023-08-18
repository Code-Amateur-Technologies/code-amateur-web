"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/data";
import { RightArrow } from "@/utils/customIcons";
import { useEffect } from "react";

export default function Services() {
  const sectionid: string | null = useSearchParams().get("section");
  const scroll = (value: string) => {
    const element: any = document.getElementById(value);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  useEffect(() => {
    sectionid != null ? scroll(sectionid) : "";
  }, [sectionid]);

  return (
    <div className="text-gunmetal">
      <section className="py-8 px-4 sm:p-20">
        <div className="firstheading">
          <h1 className="text-celestialblue blue-gradient">Quality.</h1>
          <h1 className="text-gunmetal">Excellence.</h1>
          <h1 className="text-gunmetal">Innovation.</h1>
        </div>
        <div className="my-10 sm:my-20 flex-between flex-col md:flex-row text-2xl md:text-4xl font medium tracking-tight">
          <div className="md:w-1/4 self-start">
            <h1 className="mb-5 text-xl">
              01<span className="text-gray-300"> - 03</span>
            </h1>
            <p>Examination of Problem</p>
          </div>
          <div className="md:w-1/4 self-start">
            <h1 className="mb-5 text-xl">
              02<span className="text-gray-300"> - 03</span>
            </h1>
            <p>Plan and complete the solutions</p>
          </div>
          <div className="md:w-1/4 self-start">
            <h1 className="mb-5 text-xl">
              03<span className="text-gray-300"> - 03</span>
            </h1>
            <p>Implementing proven solutions</p>
          </div>
        </div>
        <Link href={"/contact"} className="dark-button">
          <p className="mx-2">contact us</p>
          <RightArrow />
        </Link>
      </section>
      {services.map((service) => (
        <section key={service.id} id={service.hash}>
          <ServiceCard {...service} />
        </section>
      ))}
    </div>
  );
}
