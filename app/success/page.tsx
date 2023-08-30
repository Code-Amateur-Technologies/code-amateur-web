import { LeftArrow } from "@/utils/customIcons";
import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <div className="px-4 py-8 sm:p-15 flex-center flex-col gap-10 text-center">
      <h1 className="text-2xl sm:text-6xl font-medium blue-gradient">
        Successfully submitted!
      </h1>
      <Image
        src={"/assets/images/thank_you.webp"}
        alt={"Thank you Image after successfully submitting the form"}
        width={1920}
        height={1280}
        className="sm:w-4/5 sm:h-96 rounded-3xl animation-pop-in"
      />
      <div className="flex-center gap-5">
        {/* <div className="">
          <Link href="/" className="dark-button">
            <LeftArrow />
            return home
          </Link>
        </div> */}
        <p className="text-xl sm:text-5xl font-medium text-gunmetal">
        We will get back to you soon.
        </p>
      </div>
    </div>
  );
}
