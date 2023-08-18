"use client";

export default function ContactForm() {
  return (
    <div>
      <form
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
        className="flex flex-col"
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

        <button
          className="mt-6 dark-button lg:self-start hover:border-transparent disabled:opacity-75 disabled:pointer-events-none"
          type="submit"
        >
          send a message
        </button>
      </form>
    </div>
  );
}
