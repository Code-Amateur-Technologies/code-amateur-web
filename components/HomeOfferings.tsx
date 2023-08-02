import Link from "next/link";
import Image from "next/image";
import UxIcon from "../public/assets/icons/dropdown_UX.svg";
import StrategyIcon from "../public/assets/icons/dropdown_product.svg";
import FrontendIcon from "../public/assets/icons/dropdown_frontend.svg";
import BackendIcon from "../public/assets/icons/dropdown_backend.svg";
export default function HomeOfferings() {
  const offers = [
    {
      id: 1,
      heading: "Product & business strategy",
      description:
        "Fermentum natoque semper suscipit vulputate phasellus nibh augue.",
      img: StrategyIcon,
    },
    {
      id: 2,
      heading: "UX and UI design process",
      description:
        "Fermentum natoque semper suscipit vulputate phasellus nibh augue.",
      img: UxIcon,
    },
    {
      id: 3,
      heading: "Front-end development",
      description:
        "Fermentum natoque semper suscipit vulputate phasellus nibh augue.",
      img: FrontendIcon,
    },
    // {
    //   id: 4,
    //   heading: "Back-end development",
    //   description:
    //     "Fermentum natoque semper suscipit vulputate phasellus nibh augue.",
    //     img: BackendIcon,
    // },
  ];
  return (
    <div className="mt-12">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {offers.map((items) => (
          <div className="home-offering" key={items.id}>
            <Image src={items.img} alt={""} className="self-start" />
            <h1 className="my-10 text-2xl sm:text-5xl font-medium tracking-tighter">
              {items.heading}
            </h1>
            <p className="text-sm sm:text-xl font-normal">
              {items.description}
            </p>
            <div className="my-12">
              <Link href={"/offer"} className="light-button">
                see offer
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
