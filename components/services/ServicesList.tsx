"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { servicesList } from "@/data/data";

export default function ServicesList() {
  const sectionid: string | null = useSearchParams().get("section");
  const scroll = (value: string) => {
    const element: HTMLElement | null = document.getElementById(value);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  useEffect(() => {
    sectionid != null ? scroll(sectionid) : "";
  }, [sectionid]);

  return (
    <div>
      {servicesList.map((service) => (
        <section key={service.id} id={service.service_hash}>
          <ServiceCard {...service} />
        </section>
      ))}
    </div>
  );
}
