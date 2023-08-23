import Link from "next/link";
import FirstHeading from "@/components/FirstHeading";
import SlideRight from "@/components/animate/SlideRight";
import SlideLeft from "@/components/animate/SlideLeft";
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
        <div className="mt-6 lg:self-end ">
          <SlideLeft>
            <Link className="dark-button gap-2" href={"/services"}>
              <p>see our services</p>
              <RightArrow />
            </Link>
          </SlideLeft>
        </div>
      </section>
      <section className="home-secondsection">
        <div className="h-full lg:w-1/2 flex flex-col">
          <SlideRight>
            <h1 className="home-headings">
              Our main goal is to deliver quality & scalable solutions
            </h1>
            <div className="mt-6 md:self-start ">
              <Link href={"/about"} className="dark-button gap-2">
                <p>know about us</p>
                <RightArrow />
              </Link>
            </div>
          </SlideRight>
        </div>
        <OperationsSlides />
      </section>
      <HomeServicesSlider />
      <Quote />
      <Portfolio />
      <Clients />
      <Testimonials />
    </div>
  );
}
