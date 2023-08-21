import Image from "next/image";
import type { Metadata } from "next";
import Clients from "@/components/Clients";
import AboutCountBox from "@/components/AboutCountBox";
import CustomerOpinion from "@/components/CustomerOpinions";

export const metadata: Metadata = {
  title: "Code Amateur" + " | " + "About Us",
  description: "Leading Technology company",
};

export default function About(): JSX.Element {
  return (
    <div className="text-gunmetal">
      <section className="py-8 px-4 sm:p-20">
        <h1 className="mb-4 sm:mb-10 about-firstheading">
          The Leading Information Technology Company
        </h1>
        <Image
          src={"/assets/images/about_heading.png"}
          alt={"Image showing a positive team working enviorment"}
          width={1920}
          height={959}
          className="w-full rounded-3xl animation-bottom-slide"
        />
        <h1 className="about-slogan">
          Strategy <br /> Creativity <br /> Teamwork
        </h1>
        <p className="about-text">
          We’re a young and talented group of entrepreneurs and engineers with a
          groundbreaking idea designed to contribute towards a better tomorrow.
          We provide smart solutions for companies of all sizes and pride
          ourselves on our unparalleled, dedicated service. At Code Amateur
          Technologies Private Limited, we believe that the right understanding
          and technological edge can lead companies towards a successful future.
          Contact us today to set up a meeting with one of our sales
          representatives.
        </p>
      </section>
      <section className="about-secondsection">
        <div className="lg:w-3/5 about-text">
          <p className="w-full mb-10">
            Founded in 2020, our incredible team of engineers, programmers,
            designers and marketing experts have worked tirelessly to bring Code
            Amateur Technologies Private Limited to the forefront of the
            industry.
          </p>
          <p>
            <span className="text-celestialblue">
              With our innovative and insightful technology
            </span>
            , we strive to enhance our users’ every day experiences.
          </p>
        </div>
        <div className="lg:w-2/5 flex-center">
          <Image
            src={"/assets/images/logo_company_icon.png"}
            alt={"company icon"}
            width={200}
            height={200}
          />
        </div>
      </section>
      <Clients />
      <section className="py-8 px-4 sm:p-20 bg-slate-100">
        <div className="mb-14 lg:flex justify-between">
          <Image
            src={"/assets/images/about_content.png"}
            alt={"Team photo"}
            width={700}
            height={700}
            className="lg:w-2/5 rounded-3xl"
          />
          <div className="lg:w-1/2 flex-center flex-col">
            <h1 className="my-4 text-2xl md:text-5xl font-medium">
              We provide excellent solutions according to market needs and our
              users’ habits and motives.
            </h1>
            <p className="text-xl md:text-2xl">
              We have, and will continue to work tirelessly to become the
              technological standard, providing big picture insights which
              industry leaders not only approve of, but also depend on.
            </p>
          </div>
        </div>
        <AboutCountBox />
      </section>
      <CustomerOpinion />
    </div>
  );
}
