import Link from "next/link";
import Image from "next/image";
import UxIcon from "../public/assets/icons/dropdown_UX.svg";
import StrategyIcon from "../public/assets/icons/dropdown_product.svg"
import FrontendIcon from "../public/assets/icons/dropdown_frontend.svg"
import BackendIcon from "../public/assets/icons/dropdown_backend.svg"

export default function Dropdown() {
  return (
    <div className="header-dropdown">
      <div className="lg:w-2/5 text-5xl font-medium tracking-tighter">
        We believe the right design will bring your business to life
      </div>
      <div className="lg:w-3/5 flex flex-wrap">
        <Link href={""} className="dropdown-link">
          <Image src={UxIcon} alt={""} className="mb-5" />
          UX and UI Design
        </Link>
        <Link href={""} className="dropdown-link">
          <Image src={StrategyIcon} alt={""} className="mb-5" />
          Product Strategy
        </Link>
        <Link href={""} className="dropdown-link">
          <Image src={FrontendIcon} alt={""} className="mb-5" />
          Front-end Development
        </Link>
        <Link href={""} className="dropdown-link">
          <Image src={BackendIcon} alt={""} className="mb-5" />
          Back-end Development
        </Link>
      </div>
    </div>
  );
}
