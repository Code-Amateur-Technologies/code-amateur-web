"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { servicesList } from "@/constants/data";

export default function ServicesList() {
  const sectionid: string | null = useSearchParams().get("section");
  useEffect(() => {
    sectionid != null
      ? document.getElementById(sectionid)?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        })
      : "";
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
