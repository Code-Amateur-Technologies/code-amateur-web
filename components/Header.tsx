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
    <header className="header">
      <nav className="w-full flex-between">
          <Image
            src="/assets/images/logo.svg"
            alt={"company logo"}
            width={100}
            height={100}
            className="object-contain"
          />
        <div className="hidden md:flex gap-10">
          <Link
            href={"/"}
            className={`header-link ${
              path == "/" ? "gradient-text" : "text-gunmetal"
            }`}
          >
            Home
          </Link>
          <Link
            href={"/services"}
            className={`header-link ${
              path == "/services" ? "gradient-text" : "text-gunmetal"
            }`}
          >
            Our Services
          </Link>
          <Link
            href={"/blogs"}
            className={`header-link ${
              path == "/blogs" ? "gradient-text" : "text-gunmetal"
            }`}
          >
            Blogs
          </Link>
          <Link
            href={"/about"}
            className={`header-link ${
              path == "/about" ? "gradient-text" : "text-gunmetal"
            }`}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className={`header-link ${
              path == "/contact" ? "gradient-text" : "text-gunmetal"
            }`}
          >
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
    </header>
  );
}
