"use client"
import Link from "next/link";
import Image from "next/image";
import Clients from "@/components/Clients";
import HomeOfferings from "@/components/HomeOfferings";
import CustomerOpinion from "@/components/CustomerOpinions";
import OperationsSlides from "@/components/OperationsSlides";

export default function Home() {
  return (
    <div>
      <section className="home-firstsection">
        <div className="home-firstheading">
          <h1 className="text-celestialblue">Innovation.</h1>
          <h1 className="text-gunmetal">Creativity.</h1>
          <h1 className="text-gunmetal">Effect.</h1>
        </div>
        <Link className="dark-button lg:self-end" href={""}>
          <p className="mx-2">what we do</p>
          <Image
            className="fill-white"
            src={"/assets/icons/arrow-right.svg"}
            alt={""}
            width={30}
            height={30}
          />
        </Link>
      </section>
      {/* <video autoPlay className="rounded-2xl border">
          <source src="/assets/video/video.mp4" />
        </video> */}
      <Clients />
      <section className="home-secondsection">
        <div className="h-full lg:w-1/2 flex flex-col">
          <h1 className="home-secondheading">
            Our main goal is to set your business on the hills
          </h1>
          <Link href={"/offer"} className="dark-button md:self-start">
            <p className="mx-2">see offer</p>
            <Image
              className="fill-white"
              src={"/assets/icons/arrow-right.svg"}
              alt={""}
              width={30}
              height={30}
            />
          </Link>
        </div>
        <OperationsSlides />
      </section>
      <section className="py-8 px-4 sm:p-20 grid">
        <h1 className="lg:w-1/2 home-secondheading">
          We believe the right design will bring your business to life
        </h1>
        <HomeOfferings />
      </section>
      <CustomerOpinion />
    </div>
  );
}
