import { useState } from "react";

// CONTACT PAGE with a validated form
function Contact() {
  // One object holds all the form fields (controlled inputs)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  // errors holds the error message for each field. Empty = no problem.
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Runs every time the user types in ANY field.
  // e.target.name tells us which field, e.target.value is what they typed.
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(false);
  }

  // VALIDATION: check each field and collect error messages
  function validate() {
    const newErrors = {};

    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full name is required.";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      // this pattern checks: something @ something . something
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  }

  // Runs when the form is submitted
  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading

    const foundErrors = validate();
    setErrors(foundErrors);

    // If there are no errors, the form is good!
    if (Object.keys(foundErrors).length === 0) {
      setSuccess(true);
      setFormData({ fullName: "", email: "", subject: "", message: "" }); // clear form
    } else {
      setSuccess(false);
    }
  }

  return (
    <div className="section">
      <h1 className="page-title">Contact Us</h1>

      <div className="contact-layout">
        {/* Contact info (sample details) */}
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>📍 12 Sample Street, Ado-Ekiti, Nigeria</p>
          <p>📞 +234 8039302690</p>
          <p>✉️ odukwevivian310@gmail.com</p>
          <p>🕒 Open daily: 9:00 AM – 10:00 PM</p>
        </div>

        {/* The form. noValidate lets OUR validation run instead of the browser's */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {success && (
            <p className="success">✅ Thank you! Your message has been sent.</p>
          )}

          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <span className="error">{errors.fullName}</span>}

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} />
          {errors.subject && <span className="error">{errors.subject}</span>}

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
