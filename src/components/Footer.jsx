'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';

const socials = [
  { icon: FaGithub, href: 'https://github.com/Sharathsajithaiparambil', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sharathsajis/', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/917510810975', label: 'WhatsApp' },
  { icon: FaInstagram, href: 'https://www.instagram.com/_sharath.saji', label: 'Instagram' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <a href="#home" onClick={(e) => handleClick(e, '#home')} className="text-xl font-bold font-mono inline-block mb-4">
              <span className="text-white">&lt;</span>
              <span className="gradient-text">Sharath</span>
              <span className="text-white"> /&gt;</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Full Stack Developer building modern web applications with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-gray-500 hover:text-violet-400 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2.5 rounded-lg border border-white/10 text-gray-500 hover:text-white hover:border-violet-500/30 transition-all"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Sharath Saji. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Built with <HiHeart className="text-violet-400" size={12} /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
