import Link from "next/link";
import { RightArrow } from "../../utils/customIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeServicesCard(props: {
  service_hash: string;
  service_name: string;
  service_description: string;
  service_icon: any;
}) {
  return (
    <div className="home-servicecard">
      <div>
        <FontAwesomeIcon icon={props.service_icon} size="2xl" />
        <h1 className="my-10 text-2xl sm:text-5xl font-medium">
          {props.service_name}
        </h1>
      </div>
      <p className="text-sm sm:text-xl font-normal">{props.service_description}</p>
      <Link
        href={{ pathname: "/services", query: { section: props.service_hash } }}
        className="light-button border-transparent"
      >
        <RightArrow />
      </Link>
    </div>
  );
}
