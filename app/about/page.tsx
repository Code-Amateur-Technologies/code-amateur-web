import Image from "next/image";
import type { Metadata } from "next";
import AboutCountBox from "@/components/AboutCountBox";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import SlideLeft from "@/components/animate/SlideLeft";
import SlideRight from "@/components/animate/SlideRight";
import SlideUp from "@/components/animate/SlideUp";

export const metadata: Metadata = {
  title: "Code Amateur" + " | " + "About Us",
  description: "Know more about us",
};

export default function About(): JSX.Element {
  return (
    <div className="text-gunmetal">
      <section className="py-8 px-4 sm:p-20">
        <div>
          <SlideRight>
            <h1 className="about-firstheading">
              The Leading Information Technology Company
            </h1>
          </SlideRight>
        </div>
        <SlideUp>
          <Image
            src={"/assets/images/about_heading.png"}
            alt={"Image showing a positive team working enviorment"}
            width={1920}
            height={959}
            className="w-full rounded-3xl"
          />
        </SlideUp>
        <div className="pt-8 flex-between">
          <SlideRight>
            <h1 className="about-slogan">
              Strategy <br /> Creativity <br /> Teamwork
            </h1>
          </SlideRight>
          <div className="w-3/5">
            <SlideLeft>
              <p className="about-text">
                We’re a young and talented group of entrepreneurs and engineers
                with a groundbreaking idea designed to contribute towards a
                better tomorrow. We provide smart solutions for companies of all
                sizes and pride ourselves on our unparalleled, dedicated
                service. At Code Amateur Technologies Private Limited, we
                believe that the right understanding and technological edge can
                lead companies towards a successful future. Contact us today to
                set up a meeting with one of our sales representatives.
              </p>
            </SlideLeft>
          </div>
        </div>
      </section>
      <section className="about-secondsection">
        <div className="lg:w-3/5 about-text">
          <SlideRight>
            <p className="w-full mb-10">
              Founded in 2020, our incredible team of engineers, programmers,
              designers and marketing experts have worked tirelessly to bring
              Code Amateur Technologies Private Limited to the forefront of the
              industry.
            </p>
            <p>
              <span className="text-celestialblue">
                With our innovative and insightful technology
              </span>
              , we strive to enhance our users’ every day experiences.
            </p>
          </SlideRight>
        </div>
        <div className="lg:w-2/5 flex-center">
          <SlideLeft>
            <Image
              src={"/assets/images/logo_company_icon.png"}
              alt={"company icon"}
              width={200}
              height={200}
            />
          </SlideLeft>
        </div>
      </section>
      <section className="py-8 px-4 sm:p-20 bg-slate-100">
        <div className="mb-14 lg:flex justify-between">
          <div className="lg:w-2/5">
            <SlideRight>
              <Image
                src={"/assets/images/about_content.png"}
                alt={"Team photo"}
                width={700}
                height={700}
                className=" rounded-3xl"
              />
            </SlideRight>
          </div>
          <div className="lg:w-1/2 flex-center flex-col">
            <SlideLeft>
              <h1 className="my-4 text-2xl md:text-5xl font-medium">
                We provide excellent solutions according to market needs and our
                users’ habits and motives.
              </h1>
              <p className="text-xl md:text-2xl">
                We have, and will continue to work tirelessly to become the
                technological standard, providing big picture insights which
                industry leaders not only approve of, but also depend on.
              </p>
            </SlideLeft>
          </div>
        </div>
        <AboutCountBox />
      </section>
      <Clients />
      <Testimonials />
    </div>
  );
}
