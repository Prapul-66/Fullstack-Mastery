import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Master Full-Stack Web Development 🚀</h1>
        <p>Learn modern web development step-by-step with our interactive courses, project-based roadmaps, and hands-on practice. No backend required — just you, your browser, and real results.</p>
        <a href="/specialization" className="cta-button">Start Learning Now</a>
      </section>

      {/* Why Full-Stack Section */}
      <section className="why-learn">
        <h2>Why Full-Stack? Why Now?</h2>
        <ul>
          <li>🌐 Build fully functional web apps from scratch</li>
          <li>💼 High-paying job opportunities and freelance flexibility</li>
          <li>📈 Demand for full-stack developers is rising fast</li>
          <li>⚙️ Learn how every piece of the web puzzle fits together</li>
        </ul>
      </section>

      {/* What You'll Learn */}
      <section className="skills-section">
        <h2>What You’ll Learn 🔥</h2>
        <div className="skills-grid">
          <div>
            <h4>Frontend</h4>
            <p>HTML, CSS, JavaScript, React, React Router, Tailwind</p>
          </div>
          <div>
            <h4>Backend Concepts</h4>
            <p>APIs, REST, CRUD operations, data fetching, authentication (conceptual)</p>
          </div>
          <div>
            <h4>Project Building</h4>
            <p>Portfolios, blogs, e-commerce UI, dashboards, and more</p>
          </div>
          <div>
            <h4>Deployment</h4>
            <p>Host your projects using Netlify, Vercel, or GitHub Pages</p>
          </div>
        </div>
      </section>

      {/* Roadmap Teaser */}
      <section className="roadmap">
        <h2>🗺 Structured Learning Roadmaps</h2>
        <p>Whether you're a complete beginner or looking to go pro, our curated roadmaps guide you from basic HTML to advanced project deployment.</p>
        <a href="/roadmap">Explore the Roadmap →</a>
      </section>

      {/* Popular Courses */}
      <section className="popular-courses">
        <h2>🔥 Popular Courses</h2>
        <ul>
          <li>React for Beginners</li>
          <li>JavaScript Mastery Crash Course</li>
          <li>Build a Portfolio Website (No Backend)</li>
          <li>UI/UX Principles for Developers</li>
        </ul>
        <a href="/courses">View All Courses →</a>
      </section>

      {/* Projects */}
      <section className="projects-section">
        <h2>Build Real Projects 🛠</h2>
        <p>Every course comes with real-world projects you can add to your portfolio:</p>
        <ul>
          <li>✅ Task Manager with React</li>
          <li>✅ Recipe App with API Integration</li>
          <li>✅ Responsive E-commerce Product Page</li>
          <li>✅ Blogging Platform (Frontend-only)</li>
        </ul>
      </section>

      {/* Certification Section */}
      <section className="certification">
        <h2>🎓 Get Certified</h2>
        <p>Complete a course and earn a shareable certificate to showcase your new skills on LinkedIn, GitHub, and your resume.</p>
        <a href="/certification">Learn About Certifications</a>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>💬 Learner Stories</h2>
        <blockquote>
          “I built my first portfolio website after just one week! The roadmap made everything feel achievable.”<br />
          — <strong>Ananya S.</strong>
        </blockquote>
        <blockquote>
          “Clear content, great projects, and no fluff. Finally learned React routing the right way.”<br />
          — <strong>Mohit K.</strong>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="cta-final">
        <h2>Ready to Start Building?</h2>
        <p>Join thousands of learners. Pick a course, follow a roadmap, and become a confident developer — all in your browser.</p>
        <a href="/specialization" className="cta-button">Start Now →</a>
      </section>
    </div>
  );
};

export default Home;
