import { motion } from 'framer-motion';

interface OrbProps {
  color: string;
  size: number;
  x: string;
  y: string;
  delay?: number;
  duration?: number;
}

function FloatingOrb({ color, size, x, y, delay = 0, duration = 8 }: OrbProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${size / 3}px)`,
        left: x,
        top: y,
        opacity: 0.15,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingOrb
        color="linear-gradient(135deg, #06b6d4, #0891b2)"
        size={300}
        x="70%"
        y="10%"
        delay={0}
        duration={10}
      />
      <FloatingOrb
        color="linear-gradient(135deg, #10b981, #059669)"
        size={250}
        x="5%"
        y="60%"
        delay={2}
        duration={12}
      />
      <FloatingOrb
        color="linear-gradient(135deg, #6366f1, #4f46e5)"
        size={200}
        x="80%"
        y="70%"
        delay={4}
        duration={9}
      />
      <FloatingOrb
        color="linear-gradient(135deg, #06b6d4, #6366f1)"
        size={150}
        x="20%"
        y="20%"
        delay={1}
        duration={11}
      />
    </div>
  );
}
