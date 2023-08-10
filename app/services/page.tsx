import Link from "next/link";
import Image from "next/image";
import ServicesSlides from "@/components/ServicesSlides";
import ServicesThirdSection from "@/components/ServicesThirdSection";
import { RightArrow, CheckMark } from "@/utils/Icons";

export default function Services() {
  return (
    <div className="text-gunmetal">
      <section className="py-8 px-4 sm:p-20">
        <h1 className="text-4xl md:text-8xl font-medium tracking-tighter">
          We believe the right design will bring your business to life
        </h1>
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
          <p className="mx-2">Contact Us</p>
          <RightArrow />
        </Link>
      </section>
      <ServicesSlides />
      <ServicesThirdSection />
      <section className="py-8 px-4 sm:p-20 lg:px-40 flex flex-col lg:flex-row">
        <Image
          src={"/assets/images/services_3.png"}
          alt={""}
          width={780}
          height={745}
          className="lg:w-1/2 rounded-3xl"
        />
        <div className="lg:w-1/2 sm:px-10 flex justify-center flex-col">
          <h2 className="py-4 text-2xl sm:text-5xl font-medium tracking-tighter">
            Our tech stack is:
          </h2>
          <div className="mb-4 flex">
            <div className="services-check">
              <CheckMark />
            </div>
            <p className="text-sm sm:text-xl">
              React, React Native, Angular, Ionic, Node, Mongo, MySQL, DevOps.
              All types of web, mobile and desktop app and software development.
            </p>
          </div>
          <div className="mb-4 flex md:flex-between">
            <div className="services-check">
              <CheckMark />
            </div>
            <p className="text-sm sm:text-xl">
              We also work on Data Analysis, Cyber security, Business Analysis.
            </p>
          </div>
          <div className="mb-4 flex md:flex-between">
            <div className="services-check">
              <CheckMark />
            </div>
            <p className="text-sm sm:text-xl">
              Expertise in the various BI tools like Tableau, Looker, Power
              BI,Chartio and Qlikview and in ETL tools like Alteryx, Easymorph,
              Dataiku Dx and Informatica.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
