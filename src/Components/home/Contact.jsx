import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p className="contact-intro">
        I'd love to hear from you! Whether you have a project idea, want to
        collaborate, or just want to say hi, feel free to get in touch.
      </p>
      <div className="contact-details">
        <p>Email: <a href="mailto:example@example.com">Shope.com@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        {/* Add more contact details as needed */}
      </div>
      <p className="contact-social">
        Connect with me on social media:
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>,
        <a href="https://twitter.com/your_handle" target="_blank" rel="noopener noreferrer">Twitter</a>,
        and <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
      <p className="contact-outro">
        Looking forward to hearing from you and exploring new opportunities
        together!
      </p>
    </div>
  );
};

export default Contact;
