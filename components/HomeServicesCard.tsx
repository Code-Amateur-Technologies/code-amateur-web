import Link from "next/link";
import { RightArrow } from "../utils/customIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeServicesCard (props: {
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
        <p className="text-sm sm:text-xl font-normal">{props.description}</p>
      </div>
      <div className="my-12">
        <Link
          href={"/services"}
          className="light-button border-2 border-transparent"
        >
          see our services
          <RightArrow />
        </Link>
      </div>
    </div>
  );
};