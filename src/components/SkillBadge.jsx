import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, Radar, Activity, Server, Eye, Network, 
  Wifi, MailWarning, Terminal, Monitor, Cloud, Bug, 
  Target, ShieldCheck, FileSearch, Code, Key
} from 'lucide-react';

const getIconData = (skillName) => {
  const s = skillName.toLowerCase();
  if (s.includes('soc') || s.includes('blue team')) return <ShieldAlert size={18} />;
  if (s.includes('threat')) return <Radar size={18} />;
  if (s.includes('incident') || s.includes('tcpdump')) return <Activity size={18} />;
  if (s.includes('siem') || s.includes('splunk') || s.includes('wazuh')) return <Eye size={18} />;
  if (s.includes('network') || s.includes('wireshark')) return <Network size={18} />;
  if (s.includes('tcp') || s.includes('dns') || s.includes('http')) return <Wifi size={18} />;
  if (s.includes('phishing') || s.includes('email')) return <MailWarning size={18} />;
  if (s.includes('linux') || s.includes('bash')) return <Terminal size={18} />;
  if (s.includes('windows')) return <Monitor size={18} />;
  if (s.includes('cloud')) return <Cloud size={18} />;
  if (s.includes('vulnerab') || s.includes('snort')) return <Bug size={18} />;
  if (s.includes('mitre')) return <Target size={18} />;
  if (s.includes('ids') || s.includes('ips') || s.includes('security')) return <ShieldCheck size={18} />;
  if (s.includes('log') || s.includes('analysis')) return <FileSearch size={18} />;
  return <Code size={18} />;
};

const SkillBadge = ({ skill }) => {
  const icon = getIconData(skill);

  return (
    <motion.div 
      style={{ 
        padding: '14px 28px', 
        borderRadius: '12px', 
        fontSize: '16px', 
        fontWeight: 600, 
        border: `1px solid rgba(255,255,255,0.1)`, 
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        whiteSpace: 'nowrap',
        background: `rgba(20,20,20,0.8)`,
        color: 'var(--text-secondary)',
        cursor: 'default'
      }}
      whileHover={{ 
        scale: 1.02, 
        borderColor: 'rgba(255,255,255,0.4)',
        color: '#fff',
        y: -2
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        style={{ display: 'flex', zIndex: 1 }}
      >
        {icon}
      </motion.div>
      <span style={{ zIndex: 1, letterSpacing: '0.02em' }}>{skill}</span>
    </motion.div>
  );
};

export default SkillBadge;
