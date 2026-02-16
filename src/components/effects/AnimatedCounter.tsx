import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  shouldStart: boolean;
}

// Gunakan kata kunci 'export' langsung di depan fungsi
export function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  label,
  shouldStart,
}: AnimatedCounterProps) {
  const { count, startAnimation } = useCountUp(end, duration);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (shouldStart && !hasStarted.current) {
      startAnimation();
      hasStarted.current = true;
    }
  }, [shouldStart, startAnimation]);

  return (
    <div className="text-center">
      <motion.h3
        className="text-4xl md:text-5xl font-bold gradient-text mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={shouldStart ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
      >
        {prefix}{count}{suffix}
      </motion.h3>
      <p className="text-slate-400 text-sm md:text-base">{label}</p>
    </div>
  );
}