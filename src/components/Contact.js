import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("meqdzjna");

  if (state.succeeded) {
    return (
      <div className="contact-form">
        <p className="contact-form-response">Your message has been sent!</p>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <div className="contact-form-content">
        <div className="contact-form-content-title">
          <h2>Let's work together!</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="contact-form-content-email">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-Mail"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="contact-form-content-textarea">
            <textarea
              id="message"
              name="message"
              placeholder="Hey, i'm working on this project and i could need some help with..."
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="contact-form-content-button">
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
