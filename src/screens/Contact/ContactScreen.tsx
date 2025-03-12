import React, { useState } from "react";
import "./ContactScreen.css";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [result, setResult] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending...");
    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("access_key", "f797c1a0-3c48-4f5b-bb95-4b0e1acd8589"); // replace with client email access key
    formDataToSend.append("from_name", "Sailing Voyager");
    formDataToSend.append(
      "subject",
      `New ${formData.subject} Inquiry from ${formData.name}`
    );
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully.");
        // Clear form data after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setResult(data.message || "There was an error, please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult(
        "There was an error submitting the form. Please try again later."
      );
    }
  };

  return (
    <div className="contact-screen">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Get in touch with us to start your sailing journey</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Harbor Street, Cape Town, South Africa</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+27 12 345 6789</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@sailingvoyager.com</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="to_email"
            value="tirsa.vangraan@gmail.com"
          />
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="General">General Inquiry</option>
              <option value="Courses">Course Information</option>
              <option value="Booking">Booking</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              rows={5}
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactScreen;
