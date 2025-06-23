import React from 'react';
import './Specialization.css';

const Specialization = () => {
  const specializations = [
    {
      name: "AI & Machine Learning",
      desc: "From self-driving cars to chatbots, dive into neural networks, deep learning, NLP, and predictive analytics that power tomorrow's tech.",
      icon: "🧠",
    },
    {
      name: "Full-Stack Web Development",
      desc: "Master the MERN stack, responsive UI design, RESTful APIs, and scalable architectures for real-world applications.",
      icon: "🌍",
    },
    {
      name: "Cybersecurity & Ethical Hacking",
      desc: "Learn how to defend against cyber threats with penetration testing, cryptography, and secure system design.",
      icon: "🛡️",
    },
    {
      name: "Cloud Engineering & DevOps",
      desc: "Deploy and scale applications using AWS, Azure, Docker, Kubernetes, and CI/CD pipelines with best practices.",
      icon: "☁️",
    },
    {
      name: "Blockchain & Web3",
      desc: "Build decentralized apps, smart contracts, and explore token economies in the rapidly growing blockchain ecosystem.",
      icon: "🔗",
    },
    {
      name: "Data Science & Analytics",
      desc: "Turn data into decisions with Python, pandas, machine learning, and tools like Tableau and Power BI.",
      icon: "📈",
    },
    {
      name: "Game Design & Development",
      desc: "Create captivating game mechanics using Unity, Unreal Engine, physics simulation, and AI-driven storytelling.",
      icon: "🎮",
    },
    {
      name: "IoT & Embedded Systems",
      desc: "Explore sensor-driven automation, embedded C, and smart devices for industries and smart homes.",
      icon: "🔌",
    },
    {
      name: "Mobile App Development",
      desc: "Build elegant, high-performance mobile apps with Flutter, React Native, Swift, and Kotlin.",
      icon: "📲",
    },
    {
      name: "Software Architecture & Agile",
      desc: "Design enterprise-grade systems, apply design patterns, version control, and agile SDLC methodologies.",
      icon: "🧩",
    },
  ];

  return (
    <div className="specialization-container">
      <header className="specialization-hero">
        <h1>🌟 Explore Your Specialization</h1>
        <p>
          Choose a path that excites you and aligns with your passion. Each specialization is crafted to help you build expertise in modern technologies.
        </p>
      </header>

      <div className="specialization-grid">
        {specializations.map((spec, index) => (
          <div key={index} className="specialization-card">
            <h2>{spec.icon} {spec.name}</h2>
            <p>{spec.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialization;
