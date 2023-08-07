import Link from "next/link";
import Image from "next/image";
import { Service, services } from "@/data/data";

export default function Dropdown() {
  const data: Service[] = services;
  return (
    <div className="header-dropdown">
      <div className="lg:w-[45%] py-8 text-5xl font-medium tracking-tighter">
        We believe the right design will bring your business to life
      </div>
      <div className="lg:w-[55%] flex flex-wrap">
        {data.map((items) => (
          <Link href={"/services"} key={items.id} className="dropdown-link">
            <Image
              src={items.serviceIcon}
              alt={""}
              width={64}
              height={64}
              className="mb-5"
            />
            <p>{items.service}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
