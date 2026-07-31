import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { data } from '../data';
import { SiSplunk, SiWireshark, SiLinux } from 'react-icons/si';
import { Shield, ShieldAlert, Terminal, Activity, Globe, Crosshair, Search, Cloud, Monitor, Eye, Flame, Mail, Share2, Code, Bot } from 'lucide-react';

const Skills = () => {
  const getSkillIcon = (skillName) => {
    const s = skillName.toLowerCase();
    const style = { color: 'var(--accent-color)' };
    const size = 16;

    if (s.includes('splunk') || s.includes('sentinel')) return <SiSplunk size={size} style={style} />;
    if (s.includes('wireshark')) return <SiWireshark size={size} style={style} />;
    if (s.includes('wazuh')) return <ShieldAlert size={size} style={style} />;
    if (s.includes('tcpdump')) return <Terminal size={size} style={style} />;
    if (s.includes('snort')) return <Activity size={size} style={style} />;
    if (s.includes('ids/ips')) return <ShieldAlert size={size} style={style} />;
    if (s.includes('network')) return <Share2 size={size} style={style} />;
    if (s.includes('tcp/ip') || s.includes('dns')) return <Globe size={size} style={style} />;
    if (s.includes('linux')) return <SiLinux size={size} style={style} />;
    if (s.includes('mitre')) return <Crosshair size={size} style={style} />;
    if (s.includes('vulnerability')) return <Search size={size} style={style} />;
    if (s.includes('cloud')) return <Cloud size={size} style={style} />;
    if (s.includes('soc')) return <Monitor size={size} style={style} />;
    if (s.includes('threat')) return <Eye size={size} style={style} />;
    if (s.includes('incident')) return <Flame size={size} style={style} />;
    if (s.includes('blue team')) return <Shield size={size} style={style} />;
    if (s.includes('windows')) return <Monitor size={size} style={style} />;
    if (s.includes('phishing')) return <Mail size={size} style={style} />;
    if (s.includes('full stack') || s.includes('web tech')) return <Code size={size} style={style} />;
    if (s.includes('ai') || s.includes('automation')) return <Bot size={size} style={style} />;
    if (s.includes('scripting')) return <Terminal size={size} style={style} />;

    return <Shield size={size} style={style} />;
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Dynamic Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(10,132,255,0.08), transparent 25%), radial-gradient(circle at 85% 30%, rgba(10,132,255,0.08), transparent 25%)', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: -1 }}></div>

      <div className="container section" style={{ position: 'relative', zIndex: 1, paddingTop: '100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '60px', alignItems: 'center' }}>
          <div>
            <h1 className="title-section" style={{ margin: 0 }}>Arsenal & Expertise</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginTop: '8px' }}>The comprehensive toolkit I use to defend and analyze.</p>
          </div>
          <Link to="/" style={{ fontSize: '13px', fontWeight: 500, color: '#fff', background: 'var(--accent-color)', padding: '10px 20px', borderRadius: '30px', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(10,132,255,0.3)' }}>
            &larr; Return to Base
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {data.skills.categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{ 
                padding: '30px 24px', 
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle top border accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)', opacity: 0.7 }}></div>
              
              <h2 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--text-primary)', fontWeight: 600 }}>{cat.name}</h2>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                {cat.description}
              </p>

              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cat.items.map((item, j) => (
                  <motion.li 
                    key={j} 
                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(10,132,255,0.3)' }}
                    style={{ 
                      fontSize: '14px', 
                      color: 'var(--text-primary)', 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '8px 12px',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.03)',
                      transition: 'background 0.3s ease, border-color 0.3s ease',
                      cursor: 'default'
                    }}
                  >
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '6px', 
                      background: 'rgba(10,132,255,0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(10,132,255,0.2)'
                    }}>
                      {getSkillIcon(item)}
                    </div>
                    <span style={{ lineHeight: 1.3, fontWeight: 500 }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card"
          style={{ marginTop: '60px', padding: '40px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle at center, rgba(10,132,255,0.05) 0%, transparent 50%)', zIndex: 0, pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Terminal size={20} color="var(--accent-color)" />
              The Origin Story
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
              {data.skills.story}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
