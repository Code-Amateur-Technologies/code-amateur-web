"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { faXmark, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobForm(props: {
  showForm: boolean;
  setShowForm: (arg0: boolean) => void;
  jobSelected: string;
}) {
  console.log("Props:---", props);
  const [resumeFile, setResumeFile] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      position: props.jobSelected,
      resume: null,
      message: "",
    },
  });

  console.log("position Value:---", getValues("position"));

  const handleFile = (e: any) => {
    console.log("Previous File Value: ", getValues("resume"));
    setResumeFile(e.target.files[0].name);
    setValue("resume", e.target.files[0]);
    console.log("Next File Value: ", getValues("resume"));
  };

  const onSubmit = (data: any) => {
    console.log("Success:----", data);
    props.setShowForm(false);
  };
  console.log("Errors:------", errors);

  return (
    <div className="md:w-1/2">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="flex-between">
          <p className="text-base text-white">Fill out your information</p>
          <button onClick={() => props.setShowForm(false)} className="self-end">
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
        </div>

        <div>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter your full name *"
            className="form-input"
          />
          {errors?.name && (
            <div className="form-error">
              <p>Full name is required</p>
            </div>
          )}
        </div>

        <input
          {...register("phone")}
          type="tel"
          placeholder="Enter your phone number"
          className="form-input"
        />

        <div>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter your email address *"
            className="form-input"
          />
          {errors?.email && (
            <div className="form-error">
              <p>please provide your email</p>
            </div>
          )}
        </div>

        <input
          readOnly
          {...register("position")}
          type="text"
          placeholder="Position"
          defaultValue={props.jobSelected}
          className="form-input pointer-events-none"
        />

        <div>
          <div className="flex items-center gap-5">
            <label htmlFor="resume" className="file-upload-label">
              <p>Upload your Resume</p>
              <FontAwesomeIcon icon={faUpload} />
            </label>
            <p className="text-white">
              {resumeFile ? resumeFile : "No file chosen"}
            </p>
          </div>
          {errors?.resume && (
            <div className="form-error">
              <p>your resume is required</p>
            </div>
          )}
        </div>

        <input
          hidden
          {...register("resume")}
          type="file"
          accept="application/pdf, .doc"
          id="resume"
          onChange={(e) => handleFile(e)}
        />

        <textarea
          {...register("message")}
          placeholder="Type your message"
          className="form-input"
        ></textarea>

        <button type="submit" className="dark-button">
          send Application
        </button>
      </form>
    </div>
  );
}
