"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(): JSX.Element {
  const path = usePathname();
  const [sidebar, setSidebar] = useState<boolean>(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="header">
      <Link href="/" className="gap-4 flex-center">
        <Image
          src="/assets/images/logo_code_amateurs.png"
          alt={"company logo"}
          width={90}
          height={90}
          className="object-contain"
        />
      </Link>
      <div className="hidden md:flex gap-3">
        <Link href={"/"} className={`header-link ${path == "/" ? "text-celestialblue" : "text-gunmetal"}`}>
          Home
        </Link>
        <Link href={"/services"} className={`header-link ${path == "/services" ? "text-celestialblue" : "text-gunmetal"}`} >
          Our Services
        </Link>
        <Link href={"/blogs"} className={`header-link ${path == "/blogs" ? "text-celestialblue" : "text-gunmetal"}`}>
          Blogs
        </Link>
        <Link href={"/about"} className={`header-link ${path == "/about" ? "text-celestialblue" : "text-gunmetal"}`}>
          About
        </Link>
        <Link href={"/contact"} className={`header-link ${path == "/contact" ? "text-celestialblue" : "text-gunmetal"}`}>
          Contact
        </Link>
      </div>
      <div className="block md:hidden">
        <button onClick={showSidebar}>
        <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
        {sidebar && <Sidebar showSidebar={showSidebar} />}
      </div>
    </nav>
  );
}
