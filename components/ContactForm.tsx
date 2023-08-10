"use client";
import { FieldErrors, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors, isDirty } = formState;

  const submit = (data: FormValues) => {
    console.log("Tarun Shahi Form Submitted Data", data);
  };
  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Tarun Shahi Form Errors:", errors)
  }

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(submit, onError)}>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Your Name is required" })}
          className="form-input"
          placeholder="Name *"
        ></input>
        {errors.name?.message && (
          <p className="form-error">{errors.name?.message}</p>
        )}

        <input
          id="email"
          type="email"
          {...register("email", {
            pattern: {
              value: /^ [A-Z0-9._%+-]+@ [A-Z0-9.-]+. [A-Z] {2,}$/i,
              message: "Please enter a valid E-mail address",
            },
            validate: (fieldValue) => {
              return fieldValue !== "" || "Please enter your E-mail";
            },
          })}
          className="form-input"
          placeholder="E-mail Address *"
        ></input>
        {errors.email?.message && (
          <p className="form-error">{errors.email?.message}</p>
        )}

        <input
          id="phone"
          type="text"
          {...register("phone")}
          className="form-input"
          placeholder="Phone"
        ></input>

        <textarea
          id="message"
          {...register("message", { required: "Please enter your Message" })}
          className="form-input"
          placeholder="Message *"
        ></textarea>
        {errors.message?.message && (
          <p className="form-error">{errors.message?.message}</p>
        )}

        <button className="mt-6 dark-button lg:self-start" type="submit" disabled={!isDirty}>
          Send a message
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
