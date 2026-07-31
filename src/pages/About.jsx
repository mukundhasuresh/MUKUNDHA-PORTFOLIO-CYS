import React from 'react';
import FadeIn from '../components/FadeIn';
import { data } from '../data';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container section">
      <FadeIn>
        <h2 className="section-title">About Me</h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot dot-red"></div>
            <div className="terminal-dot dot-yellow"></div>
            <div className="terminal-dot dot-green"></div>
          </div>
          <div>
            <span style={{ color: '#27C93F' }}>mukundha@soc-analyst</span>
            <span style={{ color: '#fff' }}>:</span>
            <span style={{ color: '#3B82F6' }}>~/about</span>
            <span style={{ color: '#fff' }}>$ </span>
            <Typewriter
              words={['cat profile.txt', 'whoami', './execute_intro.sh']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            style={{ marginTop: '16px', lineHeight: '1.6', color: '#A0AEC0' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {data.personal.bio.split('. ').map((sentence, index, arr) => (
                <span key={index}>{sentence}{index !== arr.length - 1 ? '.' : ''}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h3 style={{ fontSize: '32px', textAlign: 'center', margin: '60px 0 30px' }}>Capabilities & Expertise</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {data.skills.categories.map((category, index) => (
            <div key={index} style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
              <h4 style={{ marginBottom: '16px', fontSize: '20px' }}>{category.name}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {category.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                    <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
