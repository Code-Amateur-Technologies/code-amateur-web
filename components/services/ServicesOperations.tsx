import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import { SlideRight } from "../animations/SlideAnimation";
import { RightArrow } from "@/utils/customIcons";

export default function ServicesOperations() {
  return (
    <div>
      <FadeIn>
        <div className="services-operations">
          <div className="md:w-1/4 self-start">
            <h2 className="mb-5 text-xl">
              01<span className="text-gray-300"> - 03</span>
            </h2>
            <p>Analyzing the Problem</p>
          </div>
          <div className="md:w-1/4 self-start">
            <h2 className="mb-5 text-xl">
              02<span className="text-gray-300"> - 03</span>
            </h2>
            <p>Drafting the Solution</p>
          </div>
          <div className="md:w-1/4 self-start">
            <h2 className="mb-5 text-xl">
              03<span className="text-gray-300"> - 03</span>
            </h2>
            <p>Implementing a scalable Solution</p>
          </div>
        </div>
      </FadeIn>
      <SlideRight>
        <Link href={"/contact"} className="dark-button">
          <p className="mx-2">contact us</p>
          <RightArrow />
        </Link>
      </SlideRight>
    </div>
  );
}
