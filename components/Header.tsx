"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(): JSX.Element {
  const path = usePathname();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="header">
      <Link href="/" className="gap-4 flex-center">
        <Image
          src="/assets/images/logo_code_amateurs.png"
          alt={"Picture"}
          width={90}
          height={90}
          className="object-contain"
        />
        <div className="headerlogo-text"></div>
      </Link>
      <div className="hidden md:flex gap-3">
        <Link href={"/"} className={`header-link ${path == "/" ? "text-celestialblue" : ""}`}>
          Home
        </Link>
        <Link href={"/services"} className={`header-link flex-center ${path == "/services" ? "text-celestialblue" : ""}`} >
          Our Services
        </Link>
        <Link href={"/blogs"} className={`header-link ${path == "/blogs" ? "text-celestialblue" : ""}`}>
          Blogs
        </Link>
        <Link href={"/about"} className={`header-link ${path == "/about" ? "text-celestialblue" : ""}`}>
          About
        </Link>
        <Link href={"/contact"} className={`header-link ${path == "/contact" ? "text-celestialblue" : ""}`}>
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
