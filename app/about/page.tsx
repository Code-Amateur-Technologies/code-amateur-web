import Image from "next/image";
import Clients from "@/components/Clients";
import CustomerOpinion from "@/components/CustomerOpinions";
import { AboutBox, aboutBox } from "@/data/data";

export default function About(): JSX.Element {
  const data: AboutBox[] = aboutBox;

  return (
    <div className="text-gunmetal">
      <section className="py-8 px-4 sm:p-20">
        <h2 className="about-firstheading">
          The Leading Information Technology Startup Company
        </h2>
        <Image
          src={"/assets/images/about_heading.png"}
          alt={""}
          width={1920}
          height={959}
          className="w-full py-10 rounded-3xl"
        />
        <h2 className="about-slogan">
          Strategy <br /> Creativity <br /> Teamwork
        </h2>
      </section>
      <section className="about-secondsection">
        <div className="lg:w-3/5 text-2xl md:text-5xl font-medium tracking-tighter">
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
            src={"/assets/images/company_logo.png"}
            alt={""}
            width={482}
            height={278}
          />
        </div>
      </section>
      <Clients />
      <section className="py-8 px-4 sm:p-20 bg-gray-100">
        <div className="mb-14 lg:flex justify-between">
          <Image
            src={"/assets/images/about_content.png"}
            alt={""}
            width={780}
            height={759}
            className="lg:w-1/3 rounded-3xl"
          />
          <div className="lg:w-1/2 flex-center flex-col">
            <h2 className="my-4 text-2xl md:text-5xl font-medium">
              In order to provide excellent solutions, we dedicate time and
              resources to research the market needs and our users’ habits and
              motives.
            </h2>
            <p className="text-sm md:text-xl">
              We have, and will continue to work tirelessly to become the
              technological standard, providing big picture insights which
              industry leaders not only approve of, but also depend on. Get in
              touch to learn more.
            </p>
          </div>
        </div>
        <div className="about-gridcontainer">
          {data.map((items) => (
            <div key={items.id} className="about-box">
              <div className="about-pill">{items.value}</div>
              <p className="text-sm lg:text-2xl">{items.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CustomerOpinion />
    </div>
  );
}
