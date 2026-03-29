'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with product management, cart functionality, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-violet-500/20 to-purple-500/20',
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, team workspaces, and progress tracking.',
    tech: ['Next.js', 'TypeScript', 'MySQL', 'Tailwind'],
    color: 'from-cyan-500/20 to-blue-500/20',
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, animated portfolio website built with Next.js, Framer Motion, and Tailwind CSS.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    live: '#',
  },
  {
    title: 'Blog Platform',
    description: 'A content management system with rich text editor, categories, and SEO optimization built with Laravel.',
    tech: ['Laravel', 'PHP', 'MySQL', 'jQuery'],
    color: 'from-emerald-500/20 to-cyan-500/20',
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-violet-400 mb-3 block">// my work</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glow-card overflow-hidden group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-800/80" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative text-4xl font-bold font-mono text-white/20 group-hover:text-white/30 transition-colors">
                  {'</>'}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <FaGithub size={16} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <HiExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
