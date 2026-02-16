import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Mail,
  Linkedin,
  Instagram,
  MapPin,
  Send,
  Heart,
} from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:nugrahreswara@gmail.com',
    label: 'Email',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/nugrahreswara/',
    label: 'LinkedIn',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/nugrahreswara',
    label: 'Instagram',
    color: 'from-pink-500 to-purple-500',
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer
      id="contact"
      className="relative py-24 bg-slate-900 border-t border-white/5 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Send className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-400 font-medium">Get In Touch</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 300 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} p-0.5`}
                >
                  <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-8 left-0 right-0 flex justify-center pointer-events-none">
                  <motion.span
                    className="text-sm text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: -5 }}
                    whileHover={{ y: 0 }}
                  >
                    {social.label}
                  </motion.span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5, color: '#06b6d4' }}
            >
              <MapPin className="w-5 h-5" />
              <span>Samarinda City, East Kalimantan, Indonesia</span>
            </motion.div>
            <motion.a
              href="mailto:nugrahreswara@gmail.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              whileHover={{ x: 5 }}
            >
              <Mail className="w-5 h-5" />
              <span>nugrahreswara@gmail.com</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by{' '}
            <span className="text-slate-300">Anugerah Fakhriza Reswara</span>
          </p>
          <p className="text-slate-600 text-xs mt-2">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
}
