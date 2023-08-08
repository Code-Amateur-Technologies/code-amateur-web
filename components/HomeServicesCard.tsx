import Link from "next/link";
import { Key } from "react";
import { RightArrow } from "../utils/Icons";

const HomeServicesCard = (props: {
  service: string;
  description: string;
  id: Key;
  serviceIcon: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="home-service" key={props.id}>
        <h1 className="my-10 text-2xl sm:text-5xl font-medium tracking-tighter">
          {props.service}
        </h1>
        <p className="text-sm sm:text-xl font-normal">{props.description}</p>
        <div className="my-12">
          <Link href={"/services"} className="light-button">
            See Our Services
            <RightArrow />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomeServicesCard;
