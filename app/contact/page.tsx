import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import {SlideRight, SlideLeft} from "@/components/animations/SlideAnimation";

export const metadata: Metadata = {
  title: "Code Amateur | Contact",
};

export default function Contact(): JSX.Element {
  return (
    <div className="py-8 px-4 md:p-20 text-gunmetal">
      <SlideRight>
        <section className="contact-firstsection">
          <h1 className="contact-heading">GET IN TOUCH</h1>
          <h2 className="my-8 text-xl">
            Plot No D199, 7th Floor, 8B, Industrial Area, Sector 74, Sahibzada
            Ajit Singh Nagar, Punjab 160071
          </h2>
          <button className="contact-button"><a href="mailto:sales@codeamateur.com">sales@codeamateur.com</a></button>
        </section>
      </SlideRight>
      <section className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-2/3">
          <SlideRight>
            <ContactForm />
          </SlideRight>
        </div>
        <div className="mt-4 md:mt-20 lg:ml-10 self-center">
          <SlideLeft>
            <h2 className="follow-heading">Follow Us</h2>
            <div className="flex xl:flex-col gap-5">
              <Link
                href={"https://in.linkedin.com/company/code-amateur"}
                target="_blank"
                className="follow-link"
              >
                LinkedIn
              </Link>
              <Link
                href={"https://www.facebook.com/codeamateur"}
                target="_blank"
                className="follow-link"
              >
                Facebook
              </Link>
              <Link
                href={"https://www.instagram.com/codeamateur.tech"}
                target="_blank"
                className="follow-link"
              >
                Instagram
              </Link>
              <Link
                href={"https://codeamateur.medium.com/"}
                target="_blank"
                className="follow-link"
              >
                Medium
              </Link>
            </div>
          </SlideLeft>
        </div>
      </section>
    </div>
  );
}
