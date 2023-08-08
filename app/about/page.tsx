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
          We believe that teamwork brings the best results
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
            Quam in augue montes, varius dui eu. Maecenas nibh morbi amet
            aliquam erat nullam. Venenatis sapien justo, varius massa.
          </p>
          <p>
            <span className="text-celestialblue">Laoreet odio ac tristique </span> sit
            ullamcorper eget duis.
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
              Sed est consectetur ut metus, enim duis. Velit sollicitudin.
            </h2>
            <p className="text-sm md:text-xl">
              Viverra in pellentesque massa justo commodo. Dignissim id egestas
              rhoncus, sit aliquet egestas lacus. Neque at est neque mauris
              commodo in. Mauris habitant at eget orci convallis risus
              vestibulum.
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
