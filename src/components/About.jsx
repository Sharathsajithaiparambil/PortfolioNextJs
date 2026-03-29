'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiAcademicCap, HiLightningBolt, HiHeart } from 'react-icons/hi';

const highlights = [
  { icon: HiCode, title: 'Clean Code', desc: 'Writing maintainable, scalable code' },
  { icon: HiLightningBolt, title: 'Fast Learner', desc: 'Quick to adapt new technologies' },
  { icon: HiAcademicCap, title: 'CS Graduate', desc: 'Strong computer science foundation' },
  { icon: HiHeart, title: 'Passionate', desc: 'Love building digital products' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-violet-400 mb-3 block">// about me</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Get To Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden gradient-border">
                <div className="w-full h-full bg-gradient-to-br from-violet-600/20 via-dark-800 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold text-white">SS</span>
                    </div>
                    <p className="text-sm text-gray-400 font-mono mt-4">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-violet-500/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              A Passionate Full Stack Developer
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              {"I'm a Computer Science graduate with a deep passion for building web applications that make a difference. With expertise spanning both frontend and backend technologies, I create seamless, performant digital experiences."}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From crafting pixel-perfect UIs with React and Next.js to building robust APIs with Node.js and Laravel, I enjoy every aspect of the development process. I believe in writing clean, maintainable code and continuously learning new technologies.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-colors"
                >
                  <item.icon className="text-violet-400 mt-0.5 shrink-0" size={20} />
                  <div>
                    <p className="text-white text-sm font-semibold">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
