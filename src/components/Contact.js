import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import CV from "../assets/resume.pdf";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q54fdfu",   // 🔹 from EmailJS dashboard
        "template_9mdpqse",  // 🔹 your email template
        form.current,
        "_t8_HrXhsM5u5CL-X"    // 🔹 your public key
      )
      .then(
        (result) => {
          alert("✅ Message Sent Successfully!");
        },
        (error) => {
          alert("❌ Failed to send. Try again!");
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
          <div className="input-group">
            <textarea name="message" placeholder=" " required></textarea>
            <label>Your Message</label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
