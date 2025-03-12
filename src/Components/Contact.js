import React from "react";
import "./Contact.css"; // Import the CSS file


const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us 📞</h2>
      <p>Get in touch with us! We are here to assist you with any inquiries.</p>

      <h3>Contact Information</h3>
      <p>✔ <strong>Email:</strong> support@example.com</p>
      <p>✔ <strong>Phone:</strong> +123 456 7890</p>
      <p>✔ <strong>Address:</strong> 123 Main Street, City, Country</p>

      <h3>Follow Us on Social Media</h3>
      <p>🔗 <strong>Facebook:</strong> facebook.com/example</p>
      <p>🔗 <strong>Twitter:</strong> twitter.com/example</p>
      <p>🔗 <strong>LinkedIn:</strong> linkedin.com/company/example</p>
      <p>🔗 <strong>GitHub:</strong> github.com/example</p>

      <h3>Need Help? 🤔</h3>
      <p>Check our <strong>FAQs</strong> or reach out for support.</p>
      <p>For business inquiries, please contact us at <strong>business@example.com</strong></p>
    </div>
  );
};

export default Contact;
