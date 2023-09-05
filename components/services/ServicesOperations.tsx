"use client";
import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import { SlideRight } from "../animations/SlideAnimation";
import { RightArrow } from "@/utils/customIcons";

export default function ServicesOperations() {
  return (
    <section>
      <FadeIn>
        <div className="services-operations">
          <div className="md:w-1/4 self-start">
            <h2 className="mb-5 text-xl">
              01<span className="text-gray-300"> - 03</span>
            </h2>
            <h3>Analyzing the Problem</h3>
          </div>
          <div className="md:w-1/4 self-start">
            <h2 className="mb-5 text-xl">
              02<span className="text-gray-300"> - 03</span>
            </h2>
            <h3>Drafting the Solution</h3>
          </div>
          <div className="md:w-1/4 self-start">
            <h2 className="mb-5 text-xl">
              03<span className="text-gray-300"> - 03</span>
            </h2>
            <h3>Implementing a scalable Solution</h3>
          </div>
        </div>
      </FadeIn>
      <SlideRight>
        <Link href={"/contact"} className="dark-button">
          <p className="mx-2">contact us</p>
          <RightArrow />
        </Link>
      </SlideRight>
    </section>
  );
}
