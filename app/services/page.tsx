import type { Metadata } from "next";
import FirstHeading from "@/components/FirstHeading";
import ServicesOperations from "@/components/services/ServicesOperations";
import ServicesList from "@/components/services/ServicesList";

export const metadata: Metadata = {
  title: "Code Amateur | Our Services",
  description: "List of all services we provide",
};

export default function Services() {
  return (
    <div className="text-gunmetal">
      <section className="py-8 px-4 md:p-20 bg-[url('/assets/images/background.svg')] bg-auto bg-no-repeat">
        <FirstHeading />
        <ServicesOperations />
      </section>
      <ServicesList />
    </div>
  );
}
