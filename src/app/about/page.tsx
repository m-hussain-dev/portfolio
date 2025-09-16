import React from "react";

const AboutPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="mb-6 text-lg">
        Hi, I’m Mehdi, a passionate Frontend Developer with a love for building
        modern, fast, and user-friendly web experiences. I specialize in React,
        Next.js, and the latest web technologies.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">Skills</h2>
      <ul className="list-disc list-inside mb-6">
        <li>React, Next.js, TypeScript</li>
        <li>HTML5, CSS3, Tailwind CSS</li>
        <li>Framer Motion, GSAP</li>
        <li>REST APIs, GraphQL</li>
        <li>Responsive & Accessible Design</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-10 mb-4">Experience Timeline</h2>
      <ol className="border-l-2 border-blue-600 pl-6 space-y-6">
        <li>
          <span className="font-bold">2024 - Present:</span> Senior Frontend
          Developer at TechCorp
        </li>
        <li>
          <span className="font-bold">2022 - 2024:</span> Frontend Developer at
          WebStudio
        </li>
        <li>
          <span className="font-bold">2020 - 2022:</span> Junior Developer at
          StartupX
        </li>
      </ol>
    </main>
  );
};

export default AboutPage;
