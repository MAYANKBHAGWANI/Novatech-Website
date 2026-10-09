import { useState } from "react";
import Button from "./Button.jsx";

const emptyForm = { name: "", email: "", phone: "", subject: "", message: "" };

// Checks every field and returns an object of error messages.
// An empty object means the form is valid.
function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email, like name@example.com.";
  }

  // Phone: allow digits, spaces, +, -, ( ) and require 7-15 digits
  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[0-9+\-()\s]+$/.test(values.phone) || digits.length < 7 || digits.length > 15) {
    errors.phone = "Please enter a valid phone number (7 to 15 digits).";
  }

  if (!values.subject.trim()) errors.subject = "Please enter a subject.";

  if (!values.message.trim()) {
    errors.message = "Please write a message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Your message should be at least 20 characters long.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Runs on every keystroke: updates the matching field in state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as soon as the user edits it
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    const foundErrors = validate(values);
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length === 0) {
      // No backend in this project, so we just show a success message.
      setSubmitted(true);
      setValues(emptyForm);
    } else {
      setSubmitted(false);
      // Move focus to the first field with an error (helps keyboard users)
      const firstField = Object.keys(foundErrors)[0];
      document.getElementById(firstField)?.focus();
    }
  };

  // Small helper so each field is written the same way
  const field = (name, label, type = "text", autoComplete) => (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={values[name]}
        onChange={handleChange}
        autoComplete={autoComplete}
        aria-invalid={errors[name] ? "true" : "false"}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        className={errors[name] ? "input-error" : ""}
      />
      {errors[name] && <p className="error-text" id={`${name}-error`}>{errors[name]}</p>}
    </div>
  );

  return (
    <form className="card contact-form" onSubmit={handleSubmit} noValidate>
      {/* role="status" makes screen readers announce the success message */}
      {submitted && (
        <p className="success-message" role="status">
          ✅ Thank you! Your message has been sent. We will reply soon.
        </p>
      )}

      {field("name", "Full Name", "text", "name")}
      {field("email", "Email", "email", "email")}
      {field("phone", "Phone", "tel", "tel")}
      {field("subject", "Subject")}

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={errors.message ? "input-error" : ""}
        />
        {errors.message && <p className="error-text" id="message-error">{errors.message}</p>}
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  );
}
