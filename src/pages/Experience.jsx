import React from 'react';
import FadeIn from '../components/FadeIn';
import { data } from '../data';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();

  return (
    <div className="container section">
      <FadeIn>
        <h2 className="section-title">Experience</h2>
      </FadeIn>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {data.experience.map((exp, index) => (
          <FadeIn key={exp.id} delay={index * 0.1}>
            <div 
              onClick={() => navigate(`/experience/${exp.id}`)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '24px 0',
                borderBottom: '1px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <div>
                <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>{exp.role}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{exp.company}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{exp.duration}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Experience;
