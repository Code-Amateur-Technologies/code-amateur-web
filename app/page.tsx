import Link from "next/link";
import Clients from "@/components/Clients";
import OperationsSlides from "@/components/OperationsSlides";
import HomeServicesSlider from "@/components/HomeServicesSlider";
import Portfolio from "@/components/Portfolio";
import CustomerOpinion from "@/components/CustomerOpinions";
import { RightArrow } from "@/utils/customIcons";

export default function Home() {
  return (
    <div>
      <section className="home-firstsection">
        <div className="firstheading">
          <h1 className="text-celestialblue blue-gradient">Quality.</h1>
          <h1 className="text-gunmetal">Excellence.</h1>
          <h1 className="text-gunmetal">Innovation.</h1>
        </div>
        <Link className="mt-6 dark-button lg:self-end gap-2" href={"/services"}>
          <p>see our services</p>
          <RightArrow />
        </Link>
      </section>
      <Clients />
      <section className="home-secondsection">
        <div className="h-full lg:w-1/2 flex flex-col">
          <h1 className="home-headings">
            Our main goal is to deliver quality & scalable solutions
          </h1>
          <Link href={"/about"} className="my-6 dark-button md:self-start">
            <p className="mx-2">know about us</p>
            <RightArrow />
          </Link>
        </div>
        <OperationsSlides />
      </section>
        <HomeServicesSlider />
      <section className="bg-[url('/assets/images/second_background.svg')] bg-center bg-auto">
        <h1 className="quote-heading">We believe that the quality of the product is the most important thing for the customer</h1>
      </section>
      <section>
        <Portfolio />
      </section>
      <CustomerOpinion />
    </div>
  );
}
