import Link from "next/link";
import { RightArrow } from "../utils/customIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeServicesCard(props: {
  hash: string;
  service: string;
  description: string;
  serviceIcon: any;
}) {
  return (
    <div className="home-servicecard">
      <div>
        <FontAwesomeIcon icon={props.serviceIcon} size="2xl" />
        <h1 className="my-10 text-2xl sm:text-5xl font-medium tracking-tighter">
          {props.service}
        </h1>
      </div>
      <p className="text-sm sm:text-xl font-normal">{props.description}</p>
      <div className="my-12">
        <Link
          href={`/services#${props.hash}`}
          className="w-fit py-4 px-8 rounded-full bg-white flex self-center text-lg sm:text-xl font-medium text-center tracking-tight text-celestialblue hover:border-celestialblue border-2 border-transparent"
        >
          <RightArrow />
        </Link>
      </div>
    </div>
  );
}
