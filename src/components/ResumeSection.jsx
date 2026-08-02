import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, ShieldCheck, Fingerprint, FileSearch, ShieldAlert } from 'lucide-react';

const FadeIn = ({ children, delay = 0, y = 30 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// Unique floating background stickers for the resume section
const FloatingSticker = ({ icon: Icon, top, left, right, bottom, delay, duration = 8, rotate = [0, 360], size = 48, opacity = 0.15 }) => (
  <motion.div
    animate={{ 
      y: [-20, 20, -20],
      rotate: rotate
    }}
    transition={{ 
      y: { repeat: Infinity, duration: duration, ease: "easeInOut", delay: delay },
      rotate: { repeat: Infinity, duration: duration * 1.5, ease: "linear" }
    }}
    style={{ 
      position: 'absolute', top, left, right, bottom, 
      color: 'var(--accent-color)', opacity, zIndex: 0,
      pointerEvents: 'none',
      filter: 'drop-shadow(0 0 20px rgba(79, 172, 254, 0.3))'
    }}
  >
    <Icon size={size} />
  </motion.div>
);

const ResumeSection = () => {
  const resumeLink = "https://drive.google.com/file/d/1Ef9dHa-23YrBoes8nsbgHIjt3CyyT3yz/view?usp=sharing";

  return (
    <section className="section" id="resume" style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '100px 0', overflow: 'hidden' }}>
      
      {/* Floating Background Stickers */}
      <FloatingSticker icon={ShieldCheck} top="15%" left="10%" delay={0} size={64} opacity={0.1} />
      <FloatingSticker icon={Fingerprint} bottom="20%" right="15%" delay={2} size={80} rotate={[-15, 15, -15]} opacity={0.1} />
      <FloatingSticker icon={FileSearch} top="60%" left="5%" delay={1} size={50} rotate={[10, -10, 10]} opacity={0.1} />
      <FloatingSticker icon={ShieldAlert} top="25%" right="8%" delay={3} size={56} duration={10} opacity={0.1} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle">View or download my full professional resume.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{ 
              padding: '40px', 
              borderRadius: '24px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '24px',
              maxWidth: '500px',
              width: '100%',
              textAlign: 'center',
              position: 'relative'
            }}>
              
              <div style={{ 
                width: '80px', height: '80px', borderRadius: '50%', 
                background: 'rgba(216,180,106,0.1)', border: '1px solid rgba(216,180,106,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-color)', marginBottom: '10px'
              }}>
                <FileText size={36} />
              </div>
              
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', margin: '0 0 10px 0' }}>Mukundha Suresh</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
                  Cybersecurity and IoT Graduate with experience in SOC operations, threat detection, and incident response.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '16px', width: '100%', marginTop: '10px', flexWrap: 'wrap' }}>
                <a 
                  href={resumeLink}
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    flex: 1, minWidth: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', 
                    padding: '14px 20px', borderRadius: '12px', fontWeight: '500', textDecoration: 'none', transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                  <ExternalLink size={18} /> View Resume
                </a>
                
                <a 
                  href={resumeLink}
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    flex: 1, minWidth: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
                    background: 'var(--accent-color)', color: '#fff', 
                    padding: '14px 20px', borderRadius: '12px', fontWeight: '600', textDecoration: 'none', transition: 'opacity 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <Download size={18} /> Download
                </a>
              </div>
              
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ResumeSection;
