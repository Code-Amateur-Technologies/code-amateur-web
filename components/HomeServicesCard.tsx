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
        <h1 className="my-10 text-2xl sm:text-5xl font-medium">
          {props.service}
        </h1>
      </div>
      <p className="text-sm sm:text-xl font-normal">{props.description}</p>
      <Link
        href={{ pathname: "/services", query: { section: props.hash } }}
        className="light-button border-transparent"
      >
        <RightArrow />
      </Link>
    </div>
  );
}
