import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Collection on Site & Customer Service',
    company: 'PT. PLN Icon Plus',
    date: 'July 2024 - Dec 2024',
    description: [
      'Retrieval of modem devices after user unsubscription.',
      'Performed cable repairs during mass disruptions.',
      'Replaced damaged modems and configured virtual cable lines via website.',
      'Direct user contact to verify subscription status.',
    ],
  },
  {
    type: 'work',
    title: 'IT Support',
    company: 'Bank Sinarmas',
    date: 'April 2024 - Aug 2024',
    description: [
      'Device replacement to meet new corporate standards.',
      'Installation and configuration of printers, computers, and peripherals.',
      'Network configuration and access management to central servers.',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor of Informatics (S-1 Computer Science)',
    company: 'Mulawarman University',
    date: 'Aug 2025 - Present',
    description: ['Active student focusing on Network Engineering.'],
  },
  {
    type: 'education',
    title: 'Computer Network & Telecommunications Engineering',
    company: 'Airlangga Information Technology Private Vocational High School',
    date: '2021 - 2024',
    description: [],
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experiences)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const isWork = item.type === 'work';

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
    >
      {/* Timeline dot */}
      <motion.div
        className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${
          isWork
            ? 'bg-cyan-500 border-cyan-400'
            : 'bg-emerald-500 border-emerald-400'
        }`}
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 300 }}
      >
        <motion.div
          className={`absolute inset-0 rounded-full ${
            isWork ? 'bg-cyan-500' : 'bg-emerald-500'
          }`}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Content card */}
      <motion.div
        className="bg-slate-800/50 rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 card-hover"
        whileHover={{ y: -5 }}
      >
        {/* Date badge */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar className={`w-4 h-4 ${isWork ? 'text-cyan-400' : 'text-emerald-400'}`} />
          <span className={`text-sm font-medium ${isWork ? 'text-cyan-400' : 'text-emerald-400'}`}>
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>

        {/* Company */}
        <div className="flex items-center gap-2 mb-4">
          {isWork ? (
            <Briefcase className="w-4 h-4 text-slate-400" />
          ) : (
            <GraduationCap className="w-4 h-4 text-slate-400" />
          )}
          <span className="text-slate-400">{item.company}</span>
        </div>

        {/* Description */}
        {item.description.length > 0 && (
          <ul className="space-y-2">
            {item.description.map((desc, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-slate-300 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.3 + i * 0.1 }}
              >
                <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isWork ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
                {desc}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-lg">
            My professional journey and academic background.
          </p>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line background */}
          <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-white/10" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-[7px] top-2 w-0.5 bg-gradient-to-b from-cyan-500 to-emerald-500"
            style={{ height: lineHeight }}
          />

          {/* Timeline items */}
          <div className="space-y-0">
            {experiences.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
