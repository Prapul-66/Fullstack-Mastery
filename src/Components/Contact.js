import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Get in Touch with Us 📬</h2>
      <p>
        Have questions, feedback, or collaboration ideas? We're here to help!
        Reach out to us and we’ll respond as soon as possible.
      </p>

      <section>
        <h3>📞 Contact Information</h3>
        <ul>
          <li><strong>Email:</strong> support@fullstackmastery.dev</li>
          <li><strong>Phone:</strong> +1 (555) 123-4567</li>
          <li><strong>Location:</strong> Remote Team – Global Presence 🌍</li>
        </ul>
      </section>

      <section>
        <h3>🌐 Connect with Us</h3>
        <ul>
          <li><strong>GitHub:</strong> <a href="https://github.com/fullstackmastery" target="_blank" rel="noopener noreferrer">github.com/fullstackmastery</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/fullstackmastery" target="_blank" rel="noopener noreferrer">linkedin.com/company/fullstackmastery</a></li>
          <li><strong>Twitter:</strong> <a href="https://twitter.com/fullstackdevs" target="_blank" rel="noopener noreferrer">@fullstackdevs</a></li>
          <li><strong>YouTube:</strong> <a href="https://youtube.com/@fullstackmastery" target="_blank" rel="noopener noreferrer">youtube.com/@fullstackmastery</a></li>
        </ul>
      </section>

      <section>
        <h3>💼 Business & Support</h3>
        <p>For partnership or enterprise inquiries, contact:</p>
        <p><strong>business@fullstackmastery.dev</strong></p>
        <p>Need help with something else? Visit our <a href="#">FAQs</a> or drop us a message directly.</p>
      </section>

      <div className="cta-wrap">
        <a href="#" className="cta-button">Send a Message</a>
      </div>
    </div>
  );
};

export default Contact;
