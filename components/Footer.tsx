import Link from "next/link";
import { faLinkedin, faFacebook, faSquareInstagram, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(): JSX.Element {
  return (
    <footer className="px-4 md:px-20">
      <hr className="footer-divider"></hr>
      <div className="py-8 md:py-20 ">
        <section className="flex-center gap-5">
          <Link href={"https://in.linkedin.com/company/code-amateur"} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </Link>
          <Link href={"https://www.facebook.com/codeamateur"} target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </Link>
          <Link href={"https://www.instagram.com/codeamateur.tech"} target="_blank">
            <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
          </Link>
          <Link href={"https://codeamateur.medium.com/"} target="_blank">
            <FontAwesomeIcon icon={faMedium} size="2xl" />
          </Link>
        </section>
        <p className="footer-description">
          ©2023 by Code Amateur Technologies Private Limited.
        </p>
      </div>
    </footer>
  );
}
