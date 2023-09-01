import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SlideLeft from "@/components/animate/SlideLeft";
import SlideRight from "@/components/animate/SlideRight";

export const metadata: Metadata = {
  title: "Code Amateur" + " | " + "Contact",
  description: "Contact us through here",
};

export default function Contact(): JSX.Element {
  return (
    <div className="py-8 px-4 md:p-20 text-gunmetal">
      <SlideRight>
        <section className="lg:w-2/3 mb-6 sm:mb-8 flex-center lg:items-start flex-col">
          <h1 className="contact-heading">GET IN TOUCH</h1>
          <p className="my-8 text-xl">
            Plot No D199, 7th Floor, 8B, Industrial Area, Sector 74, Sahibzada
            Ajit Singh Nagar, Punjab 160071
          </p>
          <button className="contact-button"><a href="mailto:sales@codeamateur.com">sales@codeamateur.com</a></button>
        </section>
      </SlideRight>
      <section className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          <SlideRight>
            <ContactForm />
          </SlideRight>
        </div>
        <div className="mt-4 md:mt-20 md:ml-10 self-center">
          <SlideLeft>
            <h1 className="follow-heading">Follow Us</h1>
            <div className="flex lg:flex-col">
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
