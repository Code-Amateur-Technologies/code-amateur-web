"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";

const routes = [
  { name: "Home", path: "/" },
  { name: "Our Services", path: "/services" },
  { name: "Blogs", path: "/blogs" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const currentPath = usePathname();
  const [sidebar, setSidebar] = useState<boolean>(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sticky top-0 z-10">
      <header className="header">
        <nav className="w-full flex-between">
          <Link href={"/"}>
            <Image
              src="/assets/images/logo.svg"
              alt={"Code Amateur Logo"}
              width={100}
              height={100}
            />
          </Link>
          <div className="hidden lg:flex gap-10">
            {routes.map((page) => (
              <Link
                key={page.name}
                href={page.path}
                className={`header-link ${
                  page.path == currentPath ? "gradient-text" : "text-gunmetal"
                }`}
              >
                {page.name}
              </Link>
            ))}
          </div>
          <Hamburger showSidebar={showSidebar} sidebar={sidebar} />
        </nav>
      </header>
      {sidebar && <Sidebar showSidebar={showSidebar} routes={routes}/>}
    </div>
  );
}
