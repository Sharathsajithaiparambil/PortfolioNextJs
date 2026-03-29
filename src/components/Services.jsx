'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiServer, HiDatabase, HiDeviceMobile } from 'react-icons/hi';

const services = [
  {
    icon: HiCode,
    title: 'Frontend Development',
    description: 'Building modern, responsive user interfaces with React, Next.js, and Tailwind CSS. Pixel-perfect designs with smooth animations and excellent UX.',
    tags: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    icon: HiServer,
    title: 'Backend Development',
    description: 'Developing robust server-side applications and RESTful APIs using Node.js, Express, Laravel, and PHP. Scalable architecture for any project size.',
    tags: ['Node.js', 'Express', 'Laravel', 'PHP'],
  },
  {
    icon: HiDatabase,
    title: 'Database Design',
    description: 'Designing efficient database schemas and optimizing queries for both SQL and NoSQL databases. Data modeling that scales with your business.',
    tags: ['MySQL', 'MongoDB', 'Database Design', 'ORM'],
  },
  {
    icon: HiDeviceMobile,
    title: 'Responsive Design',
    description: 'Creating seamless experiences across all devices and screen sizes. Mobile-first approach ensuring your application works beautifully everywhere.',
    tags: ['Mobile First', 'CSS Grid', 'Flexbox', 'Accessibility'],
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-violet-400 mb-3 block">// what I offer</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            End-to-end web development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glow-card p-6 md:p-8 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors shrink-0">
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pl-[60px]">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
