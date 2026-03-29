'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiNextdotjs,
  SiNestjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPhp,
  SiLaravel,
  SiJquery,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiGit,
  SiPostman,
} from 'react-icons/si';

const skills = [
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 85 },
  { name: 'Express', icon: SiExpress, color: '#ffffff', level: 85 },
  { name: 'NestJS', icon: SiNestjs, color: '#E0234E', level: 78 },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', level: 80 },

  // Frontend
  { name: 'React', icon: SiReact, color: '#61DAFB', level: 90 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 80 },
  { name: 'jQuery', icon: SiJquery, color: '#0769AD', level: 85 },

  // Databases
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 80 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 75 },

  // CSS & UI
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 88 },
  { name: 'Material UI', icon: SiMui, color: '#007FFF', level: 80 },

  // Languages
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 90 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 82 },
  { name: 'PHP', icon: SiPhp, color: '#777BB4', level: 78 },

  // Tools
  { name: 'Git', icon: SiGit, color: '#F05032', level: 85 },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 80 },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-violet-400 mb-3 block">// my tech stack</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Technologies I work with to build modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glow-card p-5 md:p-6 flex flex-col items-center text-center group cursor-default"
            >
              <div
                className="p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}10` }}
              >
                <skill.icon
                  size={32}
                  style={{ color: skill.color }}
                  className="transition-all duration-300 group-hover:drop-shadow-lg"
                />
              </div>

              <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
