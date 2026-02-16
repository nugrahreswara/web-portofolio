import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/effects/AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { value: 6, suffix: '', label: 'Competition Wins' },
  { value: 10, suffix: 'th', label: 'National Rank' },
  { value: 4, suffix: '', label: 'Certifications' },
  { value: 2, suffix: '+', label: 'Years Experience' },
];

export function Stats() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3, triggerOnce: true });

  return (
    <div id="stats" className="relative py-16 bg-slate-800/50 border-y border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                shouldStart={isVisible}
                duration={1500}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
