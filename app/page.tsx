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
        <Link className="dark-button lg:self-end" href={"/services"}>
          <p className="mx-2">see our services</p>
          <RightArrow />
        </Link>
      </section>
      <Clients />
      <section className="home-secondsection">
        <div className="h-full lg:w-1/2 flex flex-col">
          <h1 className="home-secondheading">
            Our main goal is to deliver quality & scalable solutions
          </h1>
          <Link href={"/about"} className="mt-6 dark-button md:self-start">
            <p className="mx-2">know about us</p>
            <RightArrow />
          </Link>
        </div>
        <OperationsSlides />
      </section>
      <section className="py-8 px-4 sm:p-20 grid">
        <h1 className="lg:w-1/2 home-secondheading">
          We believe the right design will bring your business to life
        </h1>
        <HomeServicesSlider />
      </section>
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
