"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });
  const router = useRouter();

  const onHCaptchaChange = (token: string) => {
    setValue("h-captcha-response", token);
  };

  const onSubmit = async (data: any) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => router.push("/success"))
      .catch(() => {
        router.push("/error");
      });
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
          value="CAT - Contact Us"
          {...register("from_name")}
        />

        <input
          type="hidden"
          value="Lead from CAT Contact Us Page"
          {...register("subject")}
        />

        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        ></input>
        <div>
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
          {errors?.name?.message && (
            <div className="form-error">
              <p>{errors?.name?.message?.toString()}</p>
            </div>
          )}
        </div>
        <div>
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
          {errors?.email?.message && (
            <div className="form-error">
              <p>{errors?.email?.message?.toString()}</p>
            </div>
          )}
        </div>

        <input
          type="text"
          id="phone"
          placeholder="Phone"
          autoComplete="false"
          className="form-input"
          {...register("phone")}
        ></input>

        <div>
          <textarea
            id="message"
            placeholder="Your Message *"
            className="form-input"
            {...register("message", {
              required: "Enter your Message",
              minLength: 24,
            })}
          ></textarea>
          {errors?.message?.message && (
            <div className="form-error">
              <p>{errors?.message?.message?.toString()}</p>
            </div>
          )}
        </div>

        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          onVerify={onHCaptchaChange}
        />

        <button
          className="dark-button lg:self-start hover:border-transparent disabled:opacity-75 disabled:pointer-events-none"
          type="submit"
          disabled={isSubmitting}
        >
          send message
        </button>
      </form>
    </div>
  );
}
