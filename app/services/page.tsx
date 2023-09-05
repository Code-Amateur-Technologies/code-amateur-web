import type { Metadata } from "next";
import FirstHeading from "@/components/FirstHeading";
import ServicesOperations from "@/components/services/ServicesOperations";
import ServicesList from "@/components/services/ServicesList";

export const metadata: Metadata = {
  title: "Code Amateur | Our Services",
};

export default function Services() {
  return (
    <div className="text-gunmetal">
      <section className="services-firstsection">
        <FirstHeading />
        <ServicesOperations />
      </section>
      <section>
        <ServicesList />
      </section>
    </div>
  );
}
