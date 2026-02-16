import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Trophy, Calendar } from 'lucide-react';

const achievements = [
  {
    image: 'images/MOE.png',
    rank: 'Medallion For Excellence',
    title: 'National Student Competency',
    date: 'July 28 - Aug 1, 2025',
    description:
      'Ranked 10th | Scored 724 | Representing East Kalimantan Province | IT Network System Administration | National Student Competency Competition 2025',
    tags: [
      'Linux Server',
      'Windows Server',
      'Cisco',
      'SSL/TLS CA',
      'ADDS',
      'DNS',
      'Mail',
      'Web',
      'DHCP',
      'LDAP',
      'VPN',
      'Ansible',
      'Firewall',
      'Active Directory',
      'Advanced Routing',
      'Advanced Switching',
      'SSH',
    ],
  },
  {
    image: 'images/LKSP25.png',
    rank: '1st Place',
    title: 'East Kalimantan Provincial Comp',
    date: 'July 19-21, 2025',
    description:
      'Placed 1st out of 8 participants | Representing Samarinda City | IT Network Systems Administration | Provincial Student Competency Competition 2025',
    tags: [
      'Linux Server',
      'Windows Server',
      'Cisco',
      'SSL/TLS CA',
      'ADDS',
      'DNS',
      'Mail',
      'Web',
      'DHCP',
      'Monitoring',
      'VPN',
      'Firewall',
      'Advanced Routing',
      'Switching',
      'SSH',
    ],
  },
  {
    image: 'images/LKSK25.png',
    rank: '1st Place',
    title: 'Samarinda City Level Comp',
    date: 'April 29, 2025',
    description:
      'Placed 1st out of 9 participants | IT Network Systems Administration | Samarinda City Student Competency Competition 2025',
    tags: [
      'Linux Server',
      'SSL/TLS CA',
      'DNS',
      'Mail',
      'Web',
      'DHCP',
      'Firewall',
      'SSH',
    ],
  },
  {
    image: 'images/TECHNOFEST.png',
    rank: '1st Place',
    title: 'Mulia University Competition',
    date: 'Feb 4, 2025',
    description:
      '1st out of 19 participants | IT Network Engineer | TECHNOFEST Mulia University 2025',
    tags: [
      'MikroTik',
      'Cisco',
      'DNS',
      'DHCP',
      'Advanced Routing',
      'Advanced Switching',
      'Firewall',
    ],
  },
  {
    image: 'images/LKSP24.png',
    rank: '2nd Place',
    title: 'East Kalimantan Provincial Comp',
    date: 'July 12-14, 2024',
    description:
      'Placed 2nd out of 8 participants | Representing Samarinda City | IT Network Systems Administration | Provincial Student Competency Competition 2024',
    tags: [
      'Linux Server',
      'Windows Server',
      'Cisco',
      'SSL/TLS CA',
      'ADDS',
      'DNS',
      'Mail',
      'Web',
      'DHCP',
      'VPN',
      'Ansible',
      'Firewall',
      'Advanced Routing',
      'Switching',
      'SSH',
    ],
  },
  {
    image: 'images/LKSK24.png',
    rank: '1st Place',
    title: 'Samarinda City Level Comp',
    date: 'May 4, 2024',
    description:
      'Placed 1st out of 7 participants | IT Network Systems Administration | Samarinda City Student Competency Competition 2024',
    tags: [
      'Linux Server',
      'SSL/TLS CA',
      'DNS',
      'Mail',
      'Web',
      'DHCP',
      'Firewall',
      'SSH',
    ],
  },
];

function AchievementCard({
  achievement,
  index,
}: {
  achievement: (typeof achievements)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.article
      ref={ref}
      className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/50 transition-all duration-500 card-hover"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Rank badge */}
        <motion.div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 300 }}
        >
          <span className="text-sm font-bold text-emerald-400 flex items-center gap-1">
            <Trophy className="w-4 h-4 text-emerald-400" />
              {achievement.rank}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 mb-3 text-slate-400 text-sm">
          <Calendar className="w-4 h-4" />
          {achievement.date}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
          {achievement.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {achievement.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {achievement.tags.slice(0, 6).map((tag, i) => (
            <motion.span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-white/5 text-slate-400 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.4 + i * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
          {achievement.tags.length > 6 && (
            <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-slate-500">
              +{achievement.tags.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10" />
      </div>
    </motion.article>
  );
}

export function Achievements() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="achievements" className="relative py-24 bg-slate-900/50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Trophy className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">Competition Excellence</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Competition <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical excellence in IT Network and Systems competitions.
          </p>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Achievement Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
