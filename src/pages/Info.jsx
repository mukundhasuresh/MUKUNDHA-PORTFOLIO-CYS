import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { data } from '../data';

const Info = () => {
  return (
    <div className="container" style={{ padding: '60px 40px', paddingBottom: '120px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '80px', alignItems: 'center' }}>
        <h1 className="title-section">Info</h1>
        <Link to="/" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--accent-color)' }}>&larr; Back to Home</Link>
      </div>

      <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
        {/* Left Side: Photo & Quick Info */}
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px' }}>
          <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: '32px', overflow: 'hidden', marginBottom: '40px', boxShadow: 'var(--shadow-lg)' }}>
            <img src="/images/profile.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          
          <div className="glass-card" style={{ padding: '24px', borderRadius: '20px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '16px', fontSize: '14px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Based in</span>
              <span style={{ fontWeight: 500 }}>{data.personal.location}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Status</span>
              <span style={{ fontWeight: 500, color: '#4cd964' }}>Graduate</span>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px', borderRadius: '20px', marginBottom: '20px' }}>
            <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {data.education.map((edu, i) => (
                <div key={i} style={{ paddingBottom: i !== data.education.length - 1 ? '20px' : 0, borderBottom: i !== data.education.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                  <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: '4px', lineHeight: '1.4' }}>{edu.institution}</div>
                  <div style={{ color: 'var(--accent-color)', fontSize: '13px', marginBottom: '6px' }}>{edu.degree}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontFamily: 'monospace', marginBottom: '12px' }}>{edu.duration}</div>
                  
                  {edu.grade && <div style={{ fontSize: '13px', marginBottom: '6px' }}><span style={{ color: 'var(--text-secondary)' }}>Grade:</span> {edu.grade}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px', borderRadius: '20px', marginBottom: '20px' }}>
            <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '8px' }}>Languages</span>
            <span style={{ display: 'block', fontWeight: 500, lineHeight: '1.5', color: 'var(--text-primary)' }}>English, Tamil, Hindi, Telugu, Japanese (N4)</span>
          </div>

          <div className="glass-card" style={{ padding: '24px', borderRadius: '20px' }}>
            <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hobbies</span>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {data.hobbies.map((hobby, i) => (
                <li key={i} style={{ fontSize: '14px', marginBottom: i !== data.hobbies.length - 1 ? '12px' : 0, color: 'var(--text-primary)', fontWeight: 500 }}>
                  <span style={{ color: 'var(--accent-color)', marginRight: '8px' }}>•</span>{hobby}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Bio & Skills */}
        <div style={{ flex: '2', minWidth: '300px', padding: '20px 0' }}>
          <h3 style={{ fontSize: '14px', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontWeight: 600 }}>About</h3>
          <h2 className="title-hero" style={{ marginBottom: '32px' }}>{data.personal.name}</h2>
          
          <p style={{ fontSize: '24px', lineHeight: '1.4', marginBottom: '32px', fontWeight: 500 }}>
            Computer science graduate, specialized in cybersecurity.
          </p>
          <div style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '80px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ margin: 0 }}>
              I am Mukundha Suresh, a dedicated Cybersecurity and IoT graduate with a profound passion for securing digital infrastructures. My academic background and hands-on training have provided me with a robust foundation in threat detection, vulnerability assessment, and proactive incident response.
            </p>
            <p style={{ margin: 0 }}>
              My primary focus lies within Blue Team operations. I thrive on diving deep into log analysis, alert investigation, and continuous monitoring to identify anomalies before they escalate. Simultaneously, I actively study offensive tactics and Red Team methodologies, believing that a comprehensive understanding of how adversaries operate is crucial to building sharper, more resilient defensive strategies.
            </p>
            <p style={{ margin: 0 }}>
              I bring practical, hands-on experience with industry-standard SIEM platforms, including Splunk and Microsoft Sentinel. My technical toolkit also extends to analyzing complex network traffic using Wireshark and Snort, and mapping adversary behaviors directly to the MITRE ATT&CK framework to ensure comprehensive threat coverage.
            </p>
            <p style={{ margin: 0 }}>
              I am currently seeking an entry-level SOC Analyst role where I can bring my analytical mindset and technical skills to a dynamic security team. I am eager to apply my expertise to mitigate real-world security incidents and continuously evolve as a cybersecurity professional.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px' }}>
            {data.skills.categories.map((cat, i) => (
              <div key={i}>
                <h4 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '20px' }}>{cat.name}</h4>
                <ul style={{ listStyle: 'none' }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '15px', marginBottom: '12px', color: 'var(--text-secondary)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '14px', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', marginTop: '80px', fontWeight: 600 }}>Certifications</h3>
          <div className="glass-card" style={{ padding: '24px 32px', borderRadius: '20px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ paddingBottom: '12px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, width: '45%' }}>Name</th>
                  <th style={{ paddingBottom: '12px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, width: '30%' }}>Issuer</th>
                  <th style={{ paddingBottom: '12px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, textAlign: 'right', width: '25%' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.certifications.map((cert, i) => (
                  <tr key={i} style={{ borderBottom: i !== data.certifications.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                    <td style={{ padding: '8px 0', fontSize: '14px', fontWeight: 500, paddingRight: '12px' }}>{cert.name}</td>
                    <td style={{ padding: '8px 0', fontSize: '13px', color: 'var(--text-secondary)', paddingRight: '12px' }}>{cert.issuer}</td>
                    <td style={{ padding: '8px 0', fontSize: '12px', color: 'var(--accent-color)', fontFamily: 'monospace', textAlign: 'right' }}>{cert.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Info;
