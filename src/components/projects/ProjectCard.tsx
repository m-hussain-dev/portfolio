"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  category: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  category,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative bg-gradient-to-br from-gray-900/40 to-black/60 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
    >
      {/* Category Tag */}
      <div className="absolute top-4 right-4 z-10">
        <span className="px-4 py-1 text-sm bg-blue-600/90 text-white rounded-full backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Project Image with Overlay */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-20">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 text-sm bg-blue-950/50 text-blue-300 rounded-full border border-blue-800/30 backdrop-blur-sm
                         hover:bg-blue-900/50 hover:border-blue-600/50 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-900/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </motion.div>
  );
}
