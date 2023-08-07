import Link from "next/link";

export default function Footer(): JSX.Element {

  return (
    <div className="px-4 md:px-20">
      <hr className="footer-divider"></hr>
      <p className="footer-description">
        © 2023 by Code Amateurs | All Rights Reserved
      </p>
    </div>
  );
}
