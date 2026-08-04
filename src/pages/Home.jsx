import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CursorStickerTrail from '../components/CursorStickerTrail';
import AsciiHands from '../components/AsciiHands';
import { data } from '../data';
import { useNavigate, Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';
import { SiSplunk, SiWireshark, SiLinux } from 'react-icons/si';
import { Shield, ShieldAlert, Terminal, Activity, Globe, Crosshair, Search, Cloud, Monitor, Eye, Flame, Mail, Share2, Code, Bot } from 'lucide-react';
import ResumeSection from '../components/ResumeSection';


const FadeIn = ({ children, delay = 0, y = 50 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const navigate = useNavigate();

  // Flatten all skills for a sleek scrolling ticker
  const allSkills = data.skills.categories.flatMap(cat => cat.items);

  const getSkillIcon = (skillName) => {
    const s = skillName.toLowerCase();
    const style = { color: 'var(--accent-color)', flexShrink: 0, marginRight: '4px' };
    const size = 18;

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
    <div>
      
      {/* 1. HERO SECTION WITH CURSOR TRAIL */}
      <CursorStickerTrail>
        <section className="min-h-screen flex-center" style={{ position: 'relative' }}>
          <motion.div style={{ y, opacity, textAlign: 'center', zIndex: 10, pointerEvents: 'auto' }}>
            <h1 className="title-hero" style={{ marginBottom: '16px', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>{data.personal.name}</h1>
            <h2 style={{ fontSize: '24px', color: 'var(--text-secondary)', fontWeight: 400 }}>
              {data.personal.role}
            </h2>
          </motion.div>
        </section>
      </CursorStickerTrail>

      {/* 2. ABOUT ME & TERMINAL SECTION */}
      <section className="container section">
        <FadeIn>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
            <motion.div 
              style={{ flex: '1', minWidth: '300px' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div style={{ 
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.95) 100%)',
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px', 
                padding: '24px',
                fontFamily: 'monospace',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)', opacity: 0.5 }}></div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff3b30', boxShadow: '0 0 10px #ff3b3080' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffcc00', boxShadow: '0 0 10px #ffcc0080' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#4cd964', boxShadow: '0 0 10px #4cd96480' }}></div>
                </div>
                <div>
                  <span style={{ color: '#4cd964' }}>mukundha@soc</span>
                  <span style={{ color: '#fff' }}>:</span>
                  <span style={{ color: '#0a84ff' }}>~/about</span>
                  <span style={{ color: '#fff' }}>$ </span>
                  <Typewriter
                    words={['cat profile.txt', 'whoami', './analyze_logs.sh']}
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
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 4 }}
                  viewport={{ once: true }}
                  style={{ marginTop: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '15px' }}
                >
                  <span style={{ color: '#4cd964' }}>[OK]</span> Loaded profile data.<br/>
                  <span style={{ color: 'var(--accent-color)' }}>&gt;</span> Status: <span style={{ color: '#fff' }}>Recent B.Tech Graduate (July 2026)</span><br/>
                  <span style={{ color: 'var(--accent-color)' }}>&gt;</span> Role: Cybersecurity &amp; IoT Specialist<br/>
                  <span style={{ color: 'var(--accent-color)' }}>&gt;</span> Focus: Security Operations &amp; Threat Detection<br/>
                  <span style={{ color: 'var(--accent-color)' }}>&gt;</span> Education: B.Tech @ Sri Ramachandra Institute
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              style={{ flex: '1', minWidth: '300px' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {}
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <motion.h2 
                  className="title-section" 
                  style={{ marginBottom: 0 }}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                  }}
                >
                  About Me
                </motion.h2>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Link to="/info" style={{ color: 'var(--accent-color)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Full Background <span>&rarr;</span>
                  </Link>
                </motion.div>
              </div>
              <div style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {data.personal.bio.split('. ').map((sentence, index, arr) => (
                  <motion.p 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                    }}
                  >
                    {sentence}{index !== arr.length - 1 ? '.' : ''}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </FadeIn>

        {/* Quick Info Horizontal Row */}
        <FadeIn delay={0.2}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '60px' }}>
            
            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '12px', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontWeight: 600 }}>Education</h3>
              <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>{data.education[0].institution}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{data.education[0].degree}</div>
              <div style={{ color: 'var(--accent-color)', fontSize: '12px', fontFamily: 'monospace', marginTop: '12px' }}>{data.education[0].duration}</div>
            </div>

            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '12px', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontWeight: 600 }}>Languages</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', fontWeight: 500, color: 'var(--text-primary)' }}>
                English, Tamil, Hindi,<br/>Telugu, Japanese (N4)
              </p>
            </div>

            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '12px', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontWeight: 600 }}>Top Certifications</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {data.certifications.slice(0, 3).map((cert, i) => (
                  <li key={i} style={{ fontSize: '13px', marginBottom: i !== 2 ? '12px' : 0 }}>
                    <div style={{ fontWeight: 500 }}>{cert.name}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>{cert.issuer}</div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </FadeIn>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section className="container section">
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
            <h2 className="title-section">Selected Projects</h2>
            <Link to="/projects" style={{ color: 'var(--accent-color)', fontWeight: 500 }}>View All Projects &rarr;</Link>
          </div>
        </FadeIn>
        
        <div className="card-grid-4">
          {data.projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. SKILLS SECTION (Marquee) */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
        
        {/* Subtle Background Glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100%', background: 'radial-gradient(ellipse at center, rgba(10,132,255,0.08) 0%, transparent 60%)', zIndex: -1 }}></div>
        
        <FadeIn>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <h2 className="title-section" style={{ marginBottom: '12px' }}>Skills & Tools</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', margin: 0 }}>The technologies I use to secure and analyze.</p>
            </div>
            <Link to="/skills" style={{ color: 'var(--accent-color)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s ease' }}>
              Detailed Skills <span>&rarr;</span>
            </Link>
          </div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {data.skills.categories.map((cat, index) => (
                <div key={index} className="glass-card" style={{ padding: '32px', borderRadius: '20px' }}>
                  <h3 style={{ fontSize: '14px', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', fontWeight: 600, borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>{cat.name}</h3>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {cat.items.map((item, i) => (
                      <li key={i} style={{ 
                        fontSize: '15px', 
                        padding: '12px 0', 
                        color: 'var(--text-primary)', 
                        borderBottom: i !== cat.items.length - 1 ? '1px solid var(--border-color)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        {getSkillIcon(item)}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4.5. RESUME / EXPERIENCE SECTION */}
      <ResumeSection />


      {/* 5. CONTACT FOOTER WITH ASCII HANDS */}
      <section className="section" style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Background ASCII Hands */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}>
            <AsciiHands />
        </div>

        {/* Floating Mail Pixel Art */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '10%', right: '5%', zIndex: 5, pointerEvents: 'none', opacity: 0.9 }}
        >
          <img src="/images/mail-pixel.png" alt="Mail" style={{ width: '150px', filter: 'drop-shadow(0 20px 30px rgba(255,59,48,0.4))' }} />
        </motion.div>

        <FadeIn>
          <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 className="title-hero" style={{ marginBottom: '24px' }}>Let's build<br/>together.</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '40px' }}>
                Currently seeking an entry-level SOC Analyst role to apply my skills in threat detection and incident response.
              </p>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>
                <Link to="/contact" style={{ display: 'inline-block', background: 'var(--accent-color)', color: '#fff', padding: '16px 32px', borderRadius: '30px', fontWeight: '600', fontSize: '16px' }}>
                  Full Contact Details
                </Link>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href={data.personal.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
                  <a href={data.personal.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '32px' }}>
                <div>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</span>
                  <div style={{ fontSize: '15px', fontWeight: 500, marginTop: '4px' }}>
                    <a href={`mailto:${data.personal.email}`} style={{ color: 'var(--text-primary)' }}>{data.personal.email}</a>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</span>
                  <div style={{ fontSize: '15px', fontWeight: 500, marginTop: '4px' }}>{data.personal.location}</div>
                </div>
              </div>
            </div>

            <div style={{ flex: '1', minWidth: '300px' }}>
              <div className="glass-card" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Send a Message</h3>
                <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Replace YOUR_ACCESS_KEY_HERE with your Web3Forms access key */}
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                  <input type="hidden" name="subject" value="New Submission from Portfolio (Home)" />
                  <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                  
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <input type="text" name="name" placeholder="Your Name" required style={{ flex: '1', minWidth: '150px', padding: '14px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none' }} />
                    <input type="email" name="email" placeholder="Your Email" required style={{ flex: '1', minWidth: '150px', padding: '14px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none' }} />
                  </div>
                  
                  <input type="text" name="message_subject" placeholder="Subject" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                  
                  <textarea name="message" placeholder="Your Message" rows="4" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}></textarea>
                  
                  <button type="submit" style={{ background: 'var(--accent-color)', color: '#fff', padding: '14px 24px', borderRadius: '12px', border: 'none', fontWeight: 600, fontSize: '15px', fontFamily: 'inherit', cursor: 'pointer', marginTop: '8px', transition: 'all 0.2s ease', alignSelf: 'flex-start' }}>Send Message</button>
                </form>
              </div>
            </div>

          </div>
        </FadeIn>
      </section>
      {/* 6. HERO-STYLE FOOTER */}
      <footer className="section" style={{ 
        position: 'relative',
        padding: '120px 0 120px', 
        textAlign: 'center',
        background: 'var(--bg-primary)',
        overflow: 'hidden'
      }}>
        {/* Wireframe Background */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/images/footer-bg-wireframe.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'invert(1) opacity(0.2)', // Inverts the white background to black, making the lines white!
          zIndex: 1,
          pointerEvents: 'none'
        }} />
        <FadeIn>
          <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
            
            <div style={{ textAlign: 'center', zIndex: 10 }}>
              <h1 className="title-hero" style={{ marginBottom: '16px', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                {data.personal.name}
              </h1>
              <h2 style={{ fontSize: '24px', color: 'var(--text-secondary)', fontWeight: 400 }}>
                {data.personal.role}
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '24px', marginTop: '10px' }}>
              <motion.a href="https://github.com/mukundhasuresh" target="_blank" rel="noreferrer" whileHover={{ y: -3, color: 'var(--accent-color)' }} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>
                <Code size={24} />
              </motion.a>
              <motion.a href="https://linkedin.com/in/mukundhasuresh" target="_blank" rel="noreferrer" whileHover={{ y: -3, color: 'var(--accent-color)' }} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>
                <Globe size={24} />
              </motion.a>
              <motion.a href="mailto:mukundhasuresh@gmail.com" whileHover={{ y: -3, color: 'var(--accent-color)' }} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}>
                <Mail size={24} />
              </motion.a>
            </div>

            <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '20px', opacity: 0.6 }}>
              &copy; {new Date().getFullYear()} {data.personal.name}. All rights reserved.
            </div>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
};

export default Home;
