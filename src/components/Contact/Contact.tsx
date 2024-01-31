import React, { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import "./Contact.css";
import "../../App.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<Element>) => {
    e.preventDefault();

    if (form.current) {
      form.current.reset();

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
    }
  };

  const formValues = [
    {
      label: "Name",
      name: "user_name",
      placeholder: "what is your name?",
    },
    {
      label: "Email",
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
              className={
                name === "message"
                  ? "form-input-item-message"
                  : "form-input-item"
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
    <form ref={form} onSubmit={sendEmail}>
      <div className="contact-form-container wave fourth-wave">
        <p className="green-color">please dont spam</p>
        {renderForm()}
      </div>
    </form>
  );
};

export default Contact;
