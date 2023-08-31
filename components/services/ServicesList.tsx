"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { servicesList } from "@/data/data";

export default function ServicesList() {
  const sectionid: string | null = useSearchParams().get("section");

  useEffect(() => {
    sectionid != null
      ? document.getElementById(sectionid)?.scrollIntoView()
      : "";
  }, [sectionid]);

  return (
    <div>
      {servicesList.map((service) => (
        <div key={service.id} id={service.service_hash}>
          <ServiceCard {...service} />
        </div>
      ))}
    </div>
  );
}
