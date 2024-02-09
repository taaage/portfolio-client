import React, { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import "./Contact.css";
import "../../App.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<Element>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_1w2uxko",
          "template_f2daz2w",
          form.current,
          "3mitBIJ4yawGO1pYN"
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log("result.text", result.text);
          },
          (error: Error) => {
            console.log(error);
          }
        );
      form.current.reset();
    }
  };

  const formValues = [
    {
      label: "Name",
      name: "user_name",
      placeholder: "what is your name?",
    },
    {
      label: "Email ✉",
      name: "user_email",
      placeholder: "what is your email?",
    },
    {
      label: "Message",
      name: "message",
      placeholder: "how can I help?",
    },
    {
      type: "submit",
      value: "send",
    },
  ];

  const renderForm = () => {
    return formValues.map(
      ({ label, name, type, value, placeholder }, index) => (
        <div key={index} className="form-input-item">
          <p className="form-label">{label}</p>
          {type === "submit" ? (
            <input className="my-button" type={type} value={value} />
          ) : (
            <textarea
              required
              className={
                name === "message" ? "form-input-message" : "form-input"
              }
              name={name}
              placeholder={placeholder}
            />
          )}
        </div>
      )
    );
  };

  return (
    <div className="contact-form-container wave fourth-wave">
      <p className="green-color">please dont spam</p>
      <form ref={form} onSubmit={sendEmail}>
        {renderForm()}
      </form>
    </div>
  );
};

export default Contact;
