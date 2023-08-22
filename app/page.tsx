import Link from "next/link";
import FirstHeading from "@/components/FirstHeading";
import RightButton from "@/components/home/RightButton";
import LeftButton from "@/components/home/LeftButton";
import OperationsSlides from "@/components/home/OperationsSlides";
import HomeServicesSlider from "@/components/home/HomeServicesSlider";
import Quote from "@/components/Quote";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import { RightArrow } from "@/utils/customIcons";

export default function Home() {
  return (
    <div>
      <section className="home-firstsection">
        <FirstHeading />
        <RightButton />
      </section>
      <section className="home-secondsection">
        <div className="h-full lg:w-1/2 flex flex-col">
          <h1 className="home-headings">
            Our main goal is to deliver quality & scalable solutions
          </h1>
          <LeftButton />
        </div>
        <OperationsSlides />
      </section>
      <HomeServicesSlider />
      <Quote />
      <section>
        <Portfolio />
      </section>
      <Clients />
      <Testimonials />
    </div>
  );
}
