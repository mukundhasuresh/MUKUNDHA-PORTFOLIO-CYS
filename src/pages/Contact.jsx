import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';

const Contact = () => {
  return (
    <div className="container" style={{ padding: '60px 40px', paddingBottom: '120px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '80px', alignItems: 'center' }}>
        <h1 className="title-section">Contact</h1>
        <Link to="/" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--accent-color)' }}>&larr; Back to Home</Link>
      </div>

      <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
        {/* Left Box */}
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px' }}>
          <div className="glass-card" style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Let's talk about your security posture.</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
              I respond quickly to apprenticeship requests, SOC analyst roles, and collaborations around cybersecurity.
            </p>
          </div>
          
          <div className="glass-card" style={{ padding: '24px', borderRadius: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '16px', fontSize: '14px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Based in</span>
              <span style={{ fontWeight: 500 }}>{data.personal.location}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '16px', fontSize: '14px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Status</span>
              <span style={{ fontWeight: 500, color: '#4cd964' }}>Graduate</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Avg. Response</span>
              <span style={{ fontWeight: 500 }}>24h</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div style={{ flex: '2', minWidth: '300px', padding: '20px 0' }}>
          <h3 style={{ fontSize: '14px', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontWeight: 600 }}>Contact</h3>
          <h2 className="title-hero" style={{ marginBottom: '32px' }}>Let's secure together.</h2>
          
          <p style={{ fontSize: '24px', lineHeight: '1.4', marginBottom: '32px', maxWidth: '600px', fontWeight: 500 }}>
            Cybersecurity graduate, focused on Threat Detection, Incident Response, and Security Operations.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '80px', maxWidth: '600px' }}>
            If you have a role in mind, an ambitious team, I'd be glad to discuss it with you and explore a potential collaboration.
          </p>

          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ flex: '2', minWidth: '300px' }}>
              <h4 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '20px' }}>Send a Message</h4>
              <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* 
                  IMPORTANT: Replace this YOUR_ACCESS_KEY_HERE with your free access key from https://web3forms.com/
                */}
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY || ''} />
                <input type="hidden" name="subject" value="New Submission from Portfolio" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <input type="text" name="name" placeholder="Your Name" required style={{ flex: '1', minWidth: '200px', padding: '14px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none' }} />
                  <input type="email" name="email" placeholder="Your Email" required style={{ flex: '1', minWidth: '200px', padding: '14px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none' }} />
                </div>
                
                <input type="text" name="message_subject" placeholder="Subject" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                
                <textarea name="message" placeholder="Your Message" rows="5" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}></textarea>
                
                <button type="submit" style={{ background: 'var(--accent-color)', color: '#fff', padding: '14px 24px', borderRadius: '12px', border: 'none', fontWeight: 600, fontSize: '15px', fontFamily: 'inherit', cursor: 'pointer', marginTop: '8px', transition: 'all 0.2s ease', alignSelf: 'flex-start' }}>Send Message</button>
              </form>
            </div>
            
            <div style={{ flex: '1', minWidth: '200px' }}>
              <h4 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '20px' }}>Shortcuts</h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '16px' }}><a href={`mailto:${data.personal.email}`} style={{ fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Direct mail</a></li>
                <li style={{ marginBottom: '16px' }}><a href={data.personal.linkedin} target="_blank" rel="noreferrer" style={{ fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s' }}>LinkedIn</a></li>
                <li style={{ marginBottom: '16px' }}><a href={data.personal.github} target="_blank" rel="noreferrer" style={{ fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s' }}>GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
