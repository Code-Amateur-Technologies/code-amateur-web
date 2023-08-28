export default function ContactForm() {
  return (
    <div className="contact-form">
      <h1 className="form-heading">Contact Us</h1>
      <form
        name="contact"
        action="/success"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
        className="flex flex-col gap-8"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          id="name"
          name="name"
          autoComplete={"" + Math.random()}
          className="form-input"
          placeholder="Name *"
        ></input>

        <input
          type="email"
          id="email"
          name="email"
          autoComplete={"" + Math.random()}
          className="form-input"
          placeholder="E-mail Address *"
        ></input>

        <input
          type="text"
          id="phone"
          name="phone"
          autoComplete={"" + Math.random()}
          className="form-input"
          placeholder="Phone"
        ></input>

        <textarea
          id="message"
          name="message"
          className="form-input"
          placeholder="Message *"
        ></textarea>

        <div data-netlify-recaptcha="true"></div>

        <button
          className="dark-button lg:self-start hover:border-transparent disabled:opacity-75 disabled:pointer-events-none"
          type="submit"
        >
          send message
        </button>
      </form>
    </div>
  );
}
