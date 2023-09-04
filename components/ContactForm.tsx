export default function ContactForm() {
  return (
    <div className="contact-form">
      <h2 className="form-heading">Contact Us</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
        netlify-honeypot="bot-field"
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

        <label className="hidden">
          Don't fill this out if you're human:
          <input name="bot-field" />
        </label>

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
