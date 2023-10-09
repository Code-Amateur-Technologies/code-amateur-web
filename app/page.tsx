import Link from "next/link";
import FirstHeading from "@/components/FirstHeading";
import { SlideRight, SlideLeft } from "@/components/animations/SlideAnimation";
import OperationsSlides from "@/components/home/OperationsSlides";
import HomeServicesScroller from "@/components/home/HomeServicesScroller";
import Quote from "@/components/Quote";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/common/Clients";
import Testimonials from "@/components/common/Testimonials";
import { RightArrow } from "@/utils/customIcons";

export default function Home() {
  return (
    <div>
      <section className="home-firstsection">
        <FirstHeading />
        <div className="mt-6 self-center lg:self-end ">
          <SlideLeft>
            <Link className="dark-button gap-2" href={"/services"}>
              <p className="z-10">see our services</p>
              <RightArrow />
            </Link>
          </SlideLeft>
        </div>
      </section>
      {/* <Link href={"/services"} className="animated-button">
        <p>see our services</p>
        <RightArrow />
      </Link> */}
      <section className="home-secondsection">
        <div className="h-full xl:w-1/2">
          <SlideRight>
            <div className="flex flex-col">
              <h2 className="home-headings">
                Our main goal is to deliver quality & scalable solutions
              </h2>
              <Link
                href={"/about"}
                className="my-6 lg:self-start dark-button gap-2"
              >
                <p>know about us</p>
                <RightArrow />
              </Link>
            </div>
          </SlideRight>
        </div>
        <OperationsSlides />
      </section>
      <HomeServicesScroller />
      <Quote />
      <Portfolio />
      <Clients />
      <Testimonials />
    </div>
  );
}
