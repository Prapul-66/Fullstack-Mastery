import React from 'react';
import './Specialization.css'; // Import CSS for styling

const Specialization = () => {
  const specializations = [
    {
      name: "Artificial Intelligence & Machine Learning (AI/ML)",
      desc: "AI and ML involve creating intelligent systems that can learn and make decisions. Topics include neural networks, deep learning, NLP, and AI applications.",
      icon: "🤖",
    },
    {
      name: "Web Development",
      desc: "Learn to build responsive websites and web applications using front-end and back-end technologies like HTML, CSS, JavaScript, React, and Node.js.",
      icon: "🌐",
    },
    {
      name: "Cybersecurity",
      desc: "Protect data and systems from cyber threats through ethical hacking, network security, cryptography, and incident response strategies.",
      icon: "🔐",
    },
    {
      name: "Cloud Computing & DevOps",
      desc: "Master cloud platforms (AWS, Azure), containerization (Docker, Kubernetes), and automation with CI/CD pipelines and infrastructure as code.",
      icon: "☁️",
    },
    {
      name: "Blockchain Development",
      desc: "Understand decentralized applications, smart contracts, cryptocurrencies, and secure transactions using blockchain frameworks.",
      icon: "⛓️",
    },
    {
      name: "Data Science & Big Data",
      desc: "Analyze large datasets using data visualization, machine learning models, Hadoop, and AI-driven analytics.",
      icon: "📊",
    },
    {
      name: "Game Development",
      desc: "Create immersive gaming experiences using Unity, Unreal Engine, graphics programming, and AI in games.",
      icon: "🎮",
    },
    {
      name: "Embedded Systems & IoT",
      desc: "Learn about microcontrollers, sensor networks, IoT security, and smart automation solutions.",
      icon: "📡",
    },
    {
      name: "Mobile App Development",
      desc: "Develop native and cross-platform mobile applications using Swift, Kotlin, Flutter, and React Native.",
      icon: "📱",
    },
    {
      name: "Software Engineering Principles",
      desc: "Gain expertise in software development lifecycle, design patterns, Agile methodologies, and software testing.",
      icon: "💻",
    },
  ];

  return (
    <div className="specialization-container">
      <h1>Specializations in Computer Science</h1>
      <p>Explore different specializations and choose the one that aligns with your career goals.</p>
      <div className="specialization-list">
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
