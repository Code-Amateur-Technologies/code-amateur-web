import { LeftArrow } from "@/utils/customIcons";
import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <div className="success">
      <h1 className="success-heading">Successfully submitted!</h1>
      <Image
        src={"/assets/images/thank_you.webp"}
        alt={"Thank you Image after successfully submitting the form"}
        width={1920}
        height={1280}
        className="success-image"
      />
      <div className="flex-center gap-5">
        {/* <div className="">
          <Link href="/" className="dark-button">
            <LeftArrow />
            return home
          </Link>
        </div> */}
        <p className="success-message">We will get back to you soon.</p>
      </div>
    </div>
  );
}
