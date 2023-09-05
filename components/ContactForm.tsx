"use client";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
export default function ContactForm() {
  const { register, handleSubmit, setValue } = useForm();

  const onHCaptchaChange = (token: any) => {
    setValue("h-captcha-response", token);
  };
  const onSubmit = async (data: any) => {
    console.log(data);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    }).then((res) => res.json());
  };
  return (
    <div className="contact-form">
      <h2 className="form-heading">Contact Us</h2>
      <form
        name="contact"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <input
          type="hidden"
          value="e75fd085-f41d-449e-8f77-2de1ee9289a7"
          {...register("access_key")}
        />

        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        ></input>

        <input
          type="text"
          id="name"
          name="name"
          autoComplete={"" + Math.random()}
          className="form-input"
          placeholder="Name *"
          required
        ></input>

        <input
          type="email"
          id="email"
          name="email"
          autoComplete={"" + Math.random()}
          className="form-input"
          placeholder="E-mail *"
          required
        ></input>

        <input
          type="text"
          id="phone"
          name="phone"
          autoComplete={"" + Math.random()}
          className="form-input"
          placeholder="Phone"
          required
        ></input>

        <textarea
          id="message"
          name="message"
          className="form-input"
          placeholder="Message *"
          required
        ></textarea>

        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          onVerify={onHCaptchaChange}
        />

        <input
          type="hidden"
          name="redirect"
          value="https://www.codeamateur.com/success"
        ></input>

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
