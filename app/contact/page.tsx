import ContactForm from "@/components/ContactForm";

export default function Contact(): JSX.Element {
  return (
    <div className="py-8 px-4 lg:p-20 flex-center">
      <div className="contact-page">
        <h1 className="form-heading">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
      
  );
}
