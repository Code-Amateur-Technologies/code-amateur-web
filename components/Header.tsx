"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";

export default function Header(): JSX.Element {
  const path = usePathname();
  const [sidebar, setSidebar] = useState<boolean>(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sticky top-0 z-10">
      <header className="header">
        <nav className="w-full flex-between">
          <Link href={"/"}>
            <Image
              src="/assets/images/logo.svg"
              alt={"company logo"}
              width={100}
              height={100}
            />
          </Link>
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
          <Hamburger showSidebar={showSidebar} sidebar={sidebar} />
        </nav>
      </header>
      {sidebar && <Sidebar showSidebar={showSidebar} />}
    </div>
  );
}
