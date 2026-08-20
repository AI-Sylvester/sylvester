import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import CV from "../assets/resume.pdf";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    if (status === "sending") return; // prevent double-submit

    setStatus("sending");

    emailjs
      .sendForm(
        "service_q54fdfu",
        "template_9mdpqse",
        form.current,
        "_t8_HrXhsM5u5CL-X"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset(); // clear the form fields
          // auto-reset status after 5 seconds
          setTimeout(() => setStatus("idle"), 5000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <section className="contact">
      {/* Left side 70% */}
      <div className="contact-left">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <p>Mobile: +91-9894305194</p> 
        <div className="socials">
          <a href="https://www.linkedin.com/in/infant-sylvester-7446a7a4/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/AI-Sylvester" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

        {/* Download CV Button */}
        <div className="download-cv">
          <a href={CV} download="Sivasakthi_CV.pdf">
            <button type="button">Download CV</button>
          </a>
        </div>
      </div>

      {/* Right side 30% */}
      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-group">
            <input type="text" name="user_name" placeholder=" " required />
            <label>Your Name</label>
          </div>
          <div className="input-group">
            <input type="email" name="user_email" placeholder=" " required />
            <label>Your Email</label>
          </div>
          <div className="input-group textarea-group">
            <textarea name="message" placeholder=" " required></textarea>
            <label>Your Message</label>
          </div>

          {/* Inline status message */}
          {status === "success" && (
            <p className="form-status success">✅ Message sent! I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="form-status error">❌ Failed to send. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className={status === "sending" ? "btn-sending" : ""}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
