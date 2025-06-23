import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2>About Full-Stack Mastery 🚀</h2>
      <p>
        At <strong>Full-Stack Mastery</strong>, our mission is simple — empower
        the next generation of developers through clear, practical, and modern
        learning experiences. Whether you're starting from scratch or sharpening
        advanced skills, we guide you every step of the way.
      </p>

      <section>
        <h3>Who We Are 👨‍💻</h3>
        <p>
          We are a team of passionate developers, educators, and tech mentors
          committed to making full-stack development accessible and exciting for
          learners at all levels. From curated roadmaps to real-world projects,
          we believe in hands-on, outcome-driven education.
        </p>
      </section>

      <section>
        <h3>What We Offer 📦</h3>
        <ul>
          <li>✔ Structured full-stack curriculum from beginner to expert.</li>
          <li>✔ Hands-on projects with real use-cases and challenges.</li>
          <li>✔ Personalized learning paths and progress tracking.</li>
          <li>✔ Community forums, live events, and Q&A sessions.</li>
          <li>✔ Certification, portfolio guidance, and career readiness tips.</li>
        </ul>
      </section>

      <section>
        <h3>Why Developers Trust Us 🌍</h3>
        <ul>
          <li>✔ Learn at your own pace with modern tools and best practices.</li>
          <li>✔ Updated regularly with the latest frameworks and trends.</li>
          <li>✔ Real feedback, mentorship, and a support-focused community.</li>
        </ul>
      </section>

      <section>
        <h3>Join the Movement 💥</h3>
        <p>
          More than just a course — we’re building a developer launchpad. Join
          thousands of learners taking their first steps or upgrading their
          skills with Full-Stack Mastery.
        </p>
        <a href="/specialization" className="cta-button">Start Your Journey</a>
      </section>
    </div>
  );
};

export default AboutUs;
