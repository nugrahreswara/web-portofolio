import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Mail } from 'lucide-react';
import { ParticleBackground } from '@/components/effects/ParticleBackground';
import { FloatingOrbs } from '@/components/effects/FloatingOrbs';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'IT SysAdmin & NetAdmin Enthusiast';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <ParticleBackground />
      <FloatingOrbs />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">
                {typedText}
                <span
                  className={`inline-block w-0.5 h-4 bg-cyan-400 ml-1 align-middle ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hello, I'm{' '}
              <span className="block mt-2">
                <span className="gradient-text">Anugerah Fakhriza</span>
              </span>
              <span className="block mt-2 text-slate-400">Reswara</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              An Informatics student at Mulawarman University specializing in IT
              Network System Administration and Network Engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('achievements')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold btn-glow"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Award className="w-5 h-5" />
                My Achievements
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Decorative rings */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-cyan-500/20" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-emerald-500/20" />
            </motion.div>

            {/* Image container */}
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 rounded-3xl blur-2xl transform scale-110" />

              {/* Image */}
              <motion.div
                className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden border-2 border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src="images/LKSN.png"
                  alt="Anugerah Fakhriza Reswara"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </motion.div>

              {/* Decorative corner */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 opacity-50"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none">
        <motion.div
          className="cursor-pointer pointer-events-auto"
          onClick={() => scrollToSection('stats')}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
        <motion.div
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
        <span className="text-sm">Scroll Down</span>
      <ChevronDown className="w-6 h-6" />
    </motion.div>
  </motion.div>
</div>
    </section>
  );
}
