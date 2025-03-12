import React from "react";
import "./About.css"; // Make sure to import the CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2>About Us 🚀</h2>
      <p>
        Welcome to <strong>Full-Stack Mastery</strong>! We are dedicated to helping aspiring developers learn full-stack web development through structured courses, real-world projects, and mentorship.
      </p>

      <h3>Our Mission 🎯</h3>
      <p>
        Our mission is to provide high-quality, accessible, and practical learning resources that empower developers worldwide.
      </p>

      <h3>What We Offer 📚</h3>
      <ul>
        <li>✔ Interactive courses covering frontend, backend, and databases.</li>
        <li>✔ Project-based learning to build real-world applications.</li>
        <li>✔ A structured roadmap from beginner to advanced level.</li>
        <li>✔ Community support and mentorship for career growth.</li>
      </ul>

      <h3>Why Choose Us? 💡</h3>
      <ul>
        <li>✔ Learn at your own pace with hands-on coding exercises.</li>
        <li>✔ Stay updated with the latest industry trends and technologies.</li>
        <li>✔ Get job-ready with interview questions and coding challenges.</li>
      </ul>

      <h3>Join Us Today! 🚀</h3>
      <p>
        Become a part of our growing community and start your journey toward mastering full-stack development.
      </p>
    </div>
  );
};

export default AboutUs;
