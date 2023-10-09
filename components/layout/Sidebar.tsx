import Link from "next/link";
import { MouseEventHandler } from "react";
import { UrlObject } from "url";

function Sidebar(props: {
  showSidebar: MouseEventHandler<HTMLAnchorElement>;
  routes: { path: string; name: string }[];
}) {
  return (
    <div>
      <div className="sidebar">
        {props.routes.map(
          (page: { path: string | UrlObject; name: string }) => (
            <Link
              onClick={props.showSidebar}
              className="gradient-text"
              href={page.path}
            >
              <p>{page.name}</p>
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

export default Sidebar;
