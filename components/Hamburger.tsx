import { MouseEventHandler } from "react";

export default function Hamburger(props: {
  showSidebar: MouseEventHandler<HTMLButtonElement>;
  sidebar: boolean;
}) {
  return (
    <button onClick={props.showSidebar} className="nav-toggle group lg:hidden">
      <div
        className={`genericHamburgerLine ${
          props.sidebar
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`genericHamburgerLine ${
          props.sidebar ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`genericHamburgerLine ${
          props.sidebar
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}
