import Link from "next/link";
import Image from "next/image";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LeftArrow } from "@/utils/customIcons";

export default function NotFound() {
  return (
    <div className=" px-4 h-screen flex-center flex-col md:flex-row gap-20 text-gunmetal">
      {/* <FontAwesomeIcon icon={faFaceFrown} size="2xs" className="h-1/4" style={{transform: "rotate(270deg)"}}/> */}
      <Image
        src={"/assets/images/logo.svg"}
        alt={"company icon"}
        width={200}
        height={200}
      />
      <div className="flex flex-col gap-5">
        <h2 className="self-start text-4xl md:text-6xl font-medium">
          404 - PAGE NOT FOUND
        </h2>
        <p>
          The page you are looking for might have been removed or had its name
          changed or is temporarily unavailable
        </p>
        <div className="self-start">
          <Link href="/" className="dark-button">
            <LeftArrow />
            return home
          </Link>
        </div>
      </div>
    </div>
  );
}
