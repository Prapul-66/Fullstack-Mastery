import React from "react";
import "./Certification.css"; // Import the CSS file

const Certification = () => {
  return (
    <div className="certification-container"> {/* Added class name for styling */}
      <h2>Certifications 🎓</h2>
      <p>
        Earn industry-recognized certifications by completing our structured learning programs.
        Showcase your skills and advance your career!
      </p>

      <h3>Certification Tracks 🏅</h3>
      <ul>
        <li>✔ Frontend Development Certification (HTML, CSS, JavaScript, React)</li>
        <li>✔ Backend Development Certification (Node.js, Express.js, Databases)</li>
        <li>✔ Full-Stack Developer Certification (Complete MERN Stack)</li>
        <li>✔ Specialized Certifications (DevOps, Cloud Computing, etc.)</li>
      </ul>

      <h3>How It Works ✅</h3>
      <p>1️⃣ Enroll in a course or learning track.</p>
      <p>2️⃣ Complete lessons and hands-on projects.</p>
      <p>3️⃣ Pass the final assessment (MCQs + coding challenge).</p>
      <p>4️⃣ Receive a verified digital certificate.</p>

      <h3>Benefits of Certification 🚀</h3>
      <p>✔ Boost your resume and LinkedIn profile.</p>
      <p>✔ Get recognized by industry professionals.</p>
      <p>✔ Access exclusive job opportunities.</p>

      <h3>Showcase Your Certification 🏆</h3>
      <p>Download your certificate and share it on LinkedIn, GitHub, and personal websites.</p>

      <p>Start your certification journey today and become a certified developer! 🎯</p>
    </div>
  );
};

export default Certification;
