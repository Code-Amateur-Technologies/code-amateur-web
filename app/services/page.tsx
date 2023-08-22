import Link from "next/link";
import type { Metadata } from "next";
import ServicesList from "@/components/ServicesList";
import { RightArrow } from "@/utils/customIcons";

export const metadata: Metadata = {
  title: "Code Amateur" + " | " + "Our Services",
  description: "Leading Technology company",
};

export default function Services() {

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
      <ServicesList />
    </div>
  );
}
