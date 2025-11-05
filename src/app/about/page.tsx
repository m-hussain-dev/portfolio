"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-3xl" />,
  },
  { name: "REST API", icon: <FaDatabase className="text-blue-400 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-sky-400 text-3xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
  },
];

const AboutPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-white">
      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center md:text-left mb-16"
      >
        <h1 className="text-5xl font-extrabold mb-6">
          About <span className="text-blue-500">Me</span>
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto md:mx-0 text-gray-300">
          Hi, I’m <strong className="text-white ">Mehdi Hussain</strong> — a
          passionate Full-Stack Web Developer dedicated to creating elegant,
          efficient, and user-focused digital experiences. I enjoy turning ideas
          into scalable, high-performance web applications.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-semibold  mb-10 text-center md:text-left">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900/80 to-gray-800/50 shadow-lg hover:border-blue-600 hover:shadow-blue-600/30 transition-all duration-300"
            >
              <div className="mb-3">{skill.icon}</div>
              <h3 className="text-lg font-medium group-hover:text-blue-400 transition-colors duration-300">
                {skill.name}
              </h3>
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-blue-500 rounded-2xl blur-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center md:text-left">
          Experience Timeline
        </h2>
        <ol className="relative border-l-2 border-blue-600 pl-6  spa space-y-10">
          {[
            {
              year: "2024 - Present",
              role: "Freelancer",
            },

            {
              year: "Jan2024 - Mar2024",
              role: "Internship at Dynamic Leo",
            },
          ].map((item, index) => (
            <motion.li
              key={item.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative flex items-start"
            >
              <div className="w-4 h-4 mt-1 mr-2 bg-blue-600 rounded-full"></div>
              <div>
                {" "}
                <p className="font-bold">{item.year}</p>
                <p className="text-gray-300">{item.role}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </motion.section>
    </main>
  );
};

export default AboutPage;
