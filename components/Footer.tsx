import Link from "next/link";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(): JSX.Element {
  return (
    <footer className="px-4 md:px-20">
      <hr className="footer-divider"></hr>
      <section className="py-8 md:py-20 ">
        <div className="flex-center gap-5">
          <Link href={"https://in.linkedin.com/company/code-amateur"}>
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </Link>
          <Link href={"https://www.facebook.com/codeamateur"}>
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </Link>
        </div>
        <p className="footer-description">
          ©2023 by Code Amateur Technologies Private Limited.
        </p>
      </section>
    </footer>
  );
}
