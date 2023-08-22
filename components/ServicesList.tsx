"use client"
import { useSearchParams } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/data";
import { useEffect } from "react";

export default function ServicesList() {
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
      {services.map((service) => (
        <section key={service.id} id={service.hash}>
          <ServiceCard {...service} />
        </section>
      ))}
    </div>
  );
}
