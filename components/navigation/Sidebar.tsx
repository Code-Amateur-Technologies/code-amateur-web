import Link from "next/link";
import { MouseEventHandler } from "react";

function Sidebar(props: { showSidebar: MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <div>
      <div className="sidebar">
        <Link onClick={props.showSidebar} className="gradient-text" href={"/"}>
          <p>Home</p>
        </Link>
        <Link
          onClick={props.showSidebar}
          className="gradient-text"
          href={"/services"}
        >
          <p>Our Services</p>
        </Link>
        <Link
          onClick={props.showSidebar}
          className="gradient-text"
          href={"/blogs"}
        >
          <p>Blogs</p>
        </Link>
        <Link
          onClick={props.showSidebar}
          className="gradient-text"
          href={"/about"}
        >
          <p>About</p>
        </Link>
        <Link
          onClick={props.showSidebar}
          className="gradient-text"
          href={"/contact"}
        >
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
