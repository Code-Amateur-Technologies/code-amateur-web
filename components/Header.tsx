"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "./HeaderDropdown";
import Sidebar from "./Sidebar";
import { DropdownArrow, HeaderMenu } from "./Icons";

export default function Header(): JSX.Element {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="header">
      <Link href="/" className="gap-4 flex-center">
        <Image
          src="/assets/images/company_logo.png"
          alt={"Picture"}
          width={90}
          height={90}
          className="object-contain"
        />
        <div className="headerlogo-text"></div>
      </Link>
      <div className="hidden md:flex gap-3">
        <Link href={"/"} className="header-link">
          Home
        </Link>
        <div className="group">
          <Link className="header-link flex-center" href={"/services"}>
            Our Services
            <DropdownArrow/>
          </Link>
          <Dropdown />
        </div>
        <Link href={"/blog"} className="header-link">
          Blog
        </Link>
        <Link href={"/about"} className="header-link">
          About
        </Link>
        <Link href={"/contact"} className="header-link">
          Contact
        </Link>
      </div>
      <div className="block md:hidden">
        <button onClick={showSidebar}>
          <HeaderMenu />
        </button>
        {sidebar && <Sidebar showSidebar={showSidebar} />}
      </div>
    </nav>
  );
}
