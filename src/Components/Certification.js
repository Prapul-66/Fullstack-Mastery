import React from "react";
import "./Certification.css";

const Certification = () => {
  return (
    <div className="certification-container">
      <h2>Earn Industry-Ready Certifications 🎓</h2>
      <p>
        Whether you're an aspiring developer or an experienced engineer sharpening your edge, our certification paths
        validate your skills, help you stand out, and give your career the momentum it deserves.
      </p>

      <section>
        <h3>🌟 Available Certification Tracks</h3>
        <ul>
          <li><strong>Frontend Engineering</strong> – HTML, CSS, JavaScript, React, UI/UX Principles</li>
          <li><strong>Backend Engineering</strong> – Node.js, Express, MongoDB, REST APIs</li>
          <li><strong>Full-Stack Development</strong> – MERN Stack, GitHub, Deployment</li>
          <li><strong>DevOps & Cloud Basics</strong> – CI/CD, Docker, Netlify, AWS Fundamentals</li>
        </ul>
      </section>

      <section>
        <h3>🧭 How It Works</h3>
        <p>
          Our certification process is built to assess **practical knowledge** — not just theory. You’ll earn your certificate through:
        </p>
        <ol>
          <li><strong>Hands-on Learning:</strong> Complete course modules with real-world exercises.</li>
          <li><strong>Mini Projects:</strong> Build features and apps to solidify your skills.</li>
          <li><strong>Final Assessment:</strong> Complete a capstone project and MCQ test.</li>
          <li><strong>Instant Certificate:</strong> Download your verified digital badge upon success.</li>
        </ol>
      </section>

      <section>
        <h3>🚀 Why Our Certificates Matter</h3>
        <ul>
          <li>✔ Recognized by recruiters and hiring partners</li>
          <li>✔ Trusted proof of your practical coding ability</li>
          <li>✔ Showcase on LinkedIn, GitHub, personal portfolio</li>
          <li>✔ Helps in freelance gigs, internships, and job interviews</li>
        </ul>
      </section>

      <section>
        <h3>🏅 What You’ll Receive</h3>
        <p>
          Upon successful completion, you'll get a beautifully designed digital certificate with:
        </p>
        <ul>
          <li>🔹 Your name and certification track</li>
          <li>🔹 Issued date and unique verification ID</li>
          <li>🔹 QR Code for authenticity</li>
          <li>🔹 Shareable link for LinkedIn and resumes</li>
        </ul>
      </section>

      <div className="cta-wrap">
        <p>🎯 Ready to prove your skills?</p>
        <a href="/specialization" className="cta-button">Start Your Certification Journey</a>
      </div>
    </div>
  );
};

export default Certification;
