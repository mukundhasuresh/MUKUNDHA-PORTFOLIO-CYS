import React from 'react';
import FadeIn from '../components/FadeIn';
import { data } from '../data';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="container section">
      <FadeIn>
        <h2 className="section-title">Projects</h2>
      </FadeIn>
      <div className="card-grid">
        {data.projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.1}>
            <div className="card" onClick={() => navigate(`/projects/${project.id}`)}>
              <h3>{project.title}</h3>
              <p style={{ color: 'var(--accent)', marginBottom: '12px' }}>{project.subtitle}</p>
              <p>{project.description.substring(0, 100)}...</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Projects;
