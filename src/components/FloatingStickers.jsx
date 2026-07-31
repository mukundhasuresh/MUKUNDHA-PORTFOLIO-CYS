import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Cpu, Network, Lock, Bug, Code } from 'lucide-react';

const FloatingStickers = () => {
  // We'll define a set of items: either icons or ASCII strings
  const items = [
    { type: 'icon', component: <Shield size={48} strokeWidth={1} />, x: '-30vw', y: '-10vh', delay: 0 },
    { type: 'icon', component: <Terminal size={64} strokeWidth={1} />, x: '25vw', y: '15vh', delay: 1.5 },
    { type: 'icon', component: <Lock size={40} strokeWidth={1} />, x: '35vw', y: '-25vh', delay: 3 },
    { type: 'icon', component: <Network size={56} strokeWidth={1} />, x: '-20vw', y: '30vh', delay: 0.5 },
    { type: 'icon', component: <Cpu size={50} strokeWidth={1} />, x: '10vw', y: '-35vh', delay: 2 },
    { type: 'icon', component: <Bug size={40} strokeWidth={1} />, x: '-40vw', y: '10vh', delay: 4 },
    { type: 'ascii', text: '{ STATUS: SECURE }', x: '-15vw', y: '-40vh', delay: 1 },
    { type: 'ascii', text: '<root@soc:~#>', x: '40vw', y: '35vh', delay: 2.5 },
    { type: 'ascii', text: '[0x0000FA29]', x: '-35vw', y: '-20vh', delay: 3.5 },
    { type: 'ascii', text: 'while(true) { watch() }', x: '15vw', y: '40vh', delay: 0.8 },
  ];

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ x: item.x, y: item.y, opacity: 0, rotate: -10 }}
          animate={{ 
            y: [item.y, `calc(${item.y} - 20px)`, item.y],
            rotate: [-10, 10, -10],
            opacity: [0, 0.4, 0.4, 0.4, 0] // Fade in, hold, fade out
          }}
          transition={{
            duration: 8 + (index % 4),
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            color: 'var(--text-secondary)',
            opacity: 0.2, // Base opacity for the cyber feel
            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))',
            fontFamily: item.type === 'ascii' ? 'monospace' : 'inherit',
            fontSize: item.type === 'ascii' ? '14px' : 'inherit',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap'
          }}
        >
          {item.type === 'icon' ? item.component : item.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingStickers;
