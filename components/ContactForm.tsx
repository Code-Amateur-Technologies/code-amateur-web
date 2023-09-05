"use client";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const onHCaptchaChange = (token: any) => {
    setValue("h-captcha-response", token);
  };
  const onSubmit = async (data: any) => {
    console.log(data);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify(data, null, 2),
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
          type="hidden"
          value="Code Amateur Contact Form"
          {...register("from_name")}
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
          placeholder="Name *"
          autoComplete="false"
          className="form-input"
          {...register("name", {
            required: "Full name is required",
            maxLength: 80,
          })}
        ></input>

        <input
          type="email"
          id="email"
          placeholder="E-mail *"
          autoComplete="false"
          className="form-input"
          {...register("email", {
            required: "Enter your email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email",
            },
          })}
        ></input>

        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          autoComplete="false"
          className="form-input"
        ></input>

        <textarea
          id="message"
          placeholder="Your Message *"
          className="form-input"
          {...register("message", { required: "Enter your Message" })}
        ></textarea>

        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          onVerify={onHCaptchaChange}
        />

        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />

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
