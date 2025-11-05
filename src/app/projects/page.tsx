"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";

// Demo projects data - replace with your actual projects
const projects = [
  {
    title: "Modern E-Commerce Platform",
    description:
      "A sophisticated e-commerce platform featuring real-time inventory tracking, AI-powered product recommendations, and seamless payment integration. Built with cutting-edge technologies for optimal performance and user experience.",
    imageUrl: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Redis"],
    category: "Full Stack",
  },
  {
    title: "AI-Driven Content Studio",
    description:
      "An innovative content creation platform leveraging advanced AI algorithms to generate and optimize content across multiple formats. Features include SEO analysis, sentiment prediction, and automated content scheduling.",
    imageUrl: "/projects/ai-generator.jpg",
    technologies: ["React", "Python", "TensorFlow", "FastAPI", "OpenAI"],
    category: "AI/ML",
  },
  {
    title: "Enterprise Communication Hub",
    description:
      "A comprehensive communication platform designed for enterprise teams. Features include real-time collaboration, end-to-end encrypted messaging, video conferencing, and seamless file sharing with version control.",
    imageUrl: "/projects/chat-app.jpg",
    technologies: ["React", "Socket.io", "Node.js", "WebRTC", "AWS"],
    category: "Enterprise",
  },
  {
    title: "Project Management Suite",
    description:
      "A powerful project management solution with advanced analytics, resource allocation, and automated workflow capabilities. Includes customizable Kanban boards, time tracking, and team performance metrics.",
    imageUrl: "/projects/task-manager.jpg",
    technologies: ["Vue.js", "GraphQL", "PostgreSQL", "Redis", "Docker"],
    category: "SaaS",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black">
      {/* Header Section with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
            Featured Projects
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Discover a collection of innovative solutions crafted with modern
          technologies and designed for exceptional user experiences.
        </motion.p>
      </motion.div>

      {/* Projects Grid with stagger effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center mt-20"
      >
        <div className="inline-block p-px bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-full">
          <a
            href="/contact"
            className="block px-8 py-3 bg-black rounded-full hover:bg-blue-950 transition-colors duration-300"
          >
            <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent font-semibold text-lg">
              Start a Project Together
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
