import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Server,
  Network,
  Cpu,
  Award,
  CheckCircle,
  Wifi,
  Globe,
  Database,
} from 'lucide-react';

const certifications = [
  {
    icon: Network,
    title: 'MikroTik MTCNA',
    validity: 'Valid till June 2027',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Award,
    title: 'BNSP Junior Technical Support',
    validity: 'Valid till May 2028',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Globe,
    title: 'TP-Link OCNA R&S',
    validity: 'Valid till Nov 2028',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wifi,
    title: 'TP-Link OCNA Wireless',
    validity: 'Valid till Dec 2028',
    color: 'from-purple-500 to-pink-500',
  },
];

const skillCategories = [
  {
    icon: Server,
    title: 'IT Systems Administration',
    skills: [
      { name: 'Debian/Linux Server', level: 95 },
      { name: 'Windows Server', level: 81 },
      { name: 'Web Server (Apache/Nginx)', level: 100 },
      { name: 'Certification Authority', level: 97 },
      { name: 'DNS & DHCP', level: 100 },
      { name: 'Mail Server', level: 82 },
      { name: 'OpenVPN', level: 90},
      { name: 'IPTables/NFTables', level: 80},
      { name: 'HAProxy', level: 71 },
      { name: 'Keepalived', level: 80 },      
      { name: 'Ansible', level: 80 },
      { name: 'VMware ESXi & Proxmox', level: 100 }
    ],
  },
  {
    icon: Network,
    title: 'IT Network Administration',
    skills: [
      { name: 'Cisco Configuration', level: 90 },
      { name: 'MikroTik Configuration', level: 98 },
      { name: 'Static & Dynamic Routing', level: 92 },
      { name: 'VLAN / Inter-VLAN', level: 90 },
      { name: 'STP / EtherChannel', level: 88 },
      { name: 'Firewall', level: 77 },
      { name: 'Access Control Lists', level: 87 },
      { name: 'Hotspot Setup', level: 85 },
      { name: 'Subnetting', level: 90 },
    ],
  },
  {
    icon: Cpu,
    title: 'Internet of Things',
    skills: [
      { name: 'Arduino (Uno/Mega/Nano)', level: 90 },
      { name: 'Raspberry Pi 3 & 4', level: 70 },
      { name: 'ESP32 / ESP8266', level: 82 },
      { name: 'IoT Modules', level: 92 },
    ],
  },
];

function CertificationBadge({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const Icon = cert.icon;

  return (
    <motion.div
      ref={ref}
      className="group relative p-6 rounded-xl bg-slate-800/50 border border-white/5 hover:border-white/20 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="relative flex flex-col items-center text-center">
        <motion.div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} p-0.5 mb-4`}
          whileHover={{ rotate: 5, scale: 1.1 }}
        >
          <div className="w-full h-full rounded-xl bg-slate-800 flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
        <span className="text-sm text-slate-400">{cert.validity}</span>

        {/* Checkmark */}
        <motion.div
          className="absolute top-2 right-2"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
        >
          <CheckCircle className="w-5 h-5 text-emerald-400" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillCategory({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      className="bg-slate-800/50 rounded-2xl p-6 border border-white/5"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center"
          whileHover={{ rotate: 10 }}
        >
          <Icon className="w-5 h-5 text-cyan-400" />
        </motion.div>
        <h3 className="text-xl font-bold text-white">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-sm text-slate-500">{skill.level}%</span>
            </div>
            <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                initial={{ width: 0 }}
                animate={isVisible ? { width: `${skill.level}%` } : {}}
                transition={{
                  delay: index * 0.15 + 0.3 + i * 0.05,
                  duration: 1,
                  ease: 'easeOut',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Database className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Technical Expertise</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My skills and certifications in IT Network and Systems Administration.
          </p>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <CertificationBadge key={cert.title} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
