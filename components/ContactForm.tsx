"use client";

import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import va from "@vercel/analytics";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [captcha, setCaptcha] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });
  const router = useRouter();

  const verify = (value: string) => {
    value ? setCaptcha(true) : "";
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
      })
      .finally(() => {
        if (window.location.hostname.includes("codeamateur.com")) {
          va.track("CAT-Lead", data);

          const window_: any = window;

          if (window_["gtag"]) {
            window_["gtag"]("event", "CAT-Lead", {
              event_category: "Lead",
              event_label: "CAT",
              value: JSON.stringify(data),
            });
          }
        }
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
          value="7fc9ebb1-b74b-4c52-b695-e8ca4410a718"
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
              required: true,
              maxLength: 80,
            })}
          ></input>
          {errors?.name && (
            <div className="form-error">
              <p>Full name is required</p>
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
              required: true,
              minLength: 24,
            })}
          ></textarea>
          {errors.message && (
            <div className="form-error">
              <p>Enter your Message</p>
            </div>
          )}
        </div>

        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          onVerify={(token) => verify(token)}
        />

        <button
          className="dark-button lg:self-start hover:border-transparent disabled:opacity-75 disabled:pointer-events-none"
          type="submit"
          disabled={isSubmitting || !captcha}
        >
          {!isSubmitting ? (
            "send message"
          ) : (
            <div className="flex-center gap-2">
              <p>sending...</p>
              <FontAwesomeIcon icon={faAtom} spin />
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
