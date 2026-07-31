import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../data';
import FadeIn from '../components/FadeIn';
import { ArrowLeft } from 'lucide-react';

const ExperienceDetail = () => {
  const { id } = useParams();
  const exp = data.experience.find(e => e.id === id);

  if (!exp) return <div className="container section">Experience not found.</div>;

  return (
    <div className="container section" style={{ maxWidth: '800px' }}>
      <FadeIn>
        <Link to="/experience" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', color: 'var(--text-secondary)' }}>
          <ArrowLeft size={20} /> Back to Experience
        </Link>
        <h2 style={{ fontSize: '40px', marginBottom: '8px' }}>{exp.role}</h2>
        <h3 style={{ fontSize: '24px', color: 'var(--accent)', marginBottom: '16px' }}>{exp.company}</h3>
        
        <div style={{ display: 'flex', gap: '24px', color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '14px' }}>
          <span>{exp.duration}</span>
          <span>{exp.location}</span>
        </div>

        <div style={{ lineHeight: '1.8', fontSize: '18px' }}>
          <ul style={{ paddingLeft: '20px' }}>
            {exp.description.map((desc, idx) => (
              <li key={idx} style={{ marginBottom: '16px' }}>{desc}</li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
  );
};

export default ExperienceDetail;
