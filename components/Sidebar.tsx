import Link from "next/link";
import { useState, useEffect, MouseEventHandler } from "react";

function Sidebar(props: { showSidebar: MouseEventHandler<HTMLAnchorElement>; }) {

  return (
    <div>
        <div className="h-screen w-[90%] px-4 flex-col flex-center fixed right-0 bg-white text-3xl">
          <Link onClick={props.showSidebar} className="text-gunmetal" href={"/"}>
            <p>Home</p>
          </Link>
          <Link onClick={props.showSidebar} className="text-gunmetal" href={"/services"}>
            <p>Our Services</p>
          </Link>
          <Link onClick={props.showSidebar} className="text-gunmetal" href={"/blogs"}>
            <p>Blogs</p>
          </Link>
          <Link onClick={props.showSidebar} className="text-gunmetal" href={"/about"}>
            <p>about</p>
          </Link>
          <Link onClick={props.showSidebar} className="text-gunmetal" href={"/contact"}>
            <p>contact</p>
          </Link>
        </div>
    </div>
  );
}

export default Sidebar;
