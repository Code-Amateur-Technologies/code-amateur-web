import Link from "next/link";
import ContactForm from "@/components/ContactForm";

interface ILink {
  id: number;
  name: string;
}

export default function Contact(): JSX.Element {
  const externalLinks: ILink[] = [
    { id: 1, name: "LinkedIn" },
    { id: 2, name: "Facebook" },
    { id: 3, name: "Twitter" },
    { id: 4, name: "Instagram" },
  ];
  return (
    <div className="py-8 px-4 md:p-20">
      <section className="lg:w-1/2 mb-4 sm:mb-8">
        <h1 className="contact-heading">GET IN TOUCH</h1>
        <p className="my-8 text-xl">
          Plot No D199, 7th Floor, 8B, Industrial Area, Sector 74, Sahibzada
          Ajit Singh Nagar, Punjab 160071
        </p>
        <div className="flex-center md:items-start flex-col">
          <div className="contact-button">sales@codeamateur.com</div>
          <div className="contact-button">+917889178080</div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row">
        <div className="contact-form">
          <h1 className="form-heading">Contact Us</h1>
          <ContactForm />
        </div>
        <div className="mt-4 md:mt-20 md:ml-10 flex-start flex-col">
          <h1 className="follow-heading">Follow Us</h1>
          <div className="flex flex-wrap lg:flex-col">
            {externalLinks.map((items) => (
              <Link key={items.id} href={""} className="follow-link">
                {items.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
