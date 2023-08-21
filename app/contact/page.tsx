import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Code Amateur" + " | " + "Contact",
  description: "Leading Technology company",
};

export default function Contact(): JSX.Element {
  return (
    <div className="py-8 px-4 md:p-20 text-gunmetal">
      <section className="lg:w-2/3 mb-6 sm:mb-8 flex-center lg:items-start flex-col">
        <h1 className="contact-heading">GET IN TOUCH</h1>
        <p className="my-8 text-xl">
          Plot No D199, 7th Floor, 8B, Industrial Area, Sector 74, Sahibzada
          Ajit Singh Nagar, Punjab 160071
        </p>
        <button className="contact-button">sales@codeamateur.com</button>
      </section>
      <section className="flex flex-col lg:flex-row">
        <ContactForm />
        <div className="mt-4 md:mt-20 md:ml-10 self-center">
          <h1 className="follow-heading">Follow Us</h1>
          <div className="flex lg:flex-col">
            <Link
              href={"https://in.linkedin.com/company/code-amateur"}
              className="follow-link"
            >
              LinkedIn
            </Link>
            <Link
              href={"https://www.facebook.com/codeamateur"}
              className="follow-link"
            >
              Facebook
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
