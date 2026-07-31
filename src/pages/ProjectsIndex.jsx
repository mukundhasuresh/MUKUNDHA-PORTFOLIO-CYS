import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { data } from '../data';

const ProjectsIndex = () => {
  const navigate = useNavigate();

  return (
    <div className="container section">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '80px', alignItems: 'center' }}>
        <h1 className="title-section">All Projects</h1>
        <Link to="/" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--accent-color)' }}>&larr; Back to Home</Link>
      </div>

      <div className="card-grid">
        {data.projects.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card"
            onClick={() => navigate(`/projects/${project.id}`)}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', cursor: 'pointer' }}
          >
            <div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>{project.title}</h3>
              <p style={{ color: 'var(--accent-color)', marginBottom: '16px', fontWeight: 500 }}>{project.subtitle}</p>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{project.description.substring(0, 100)}...</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsIndex;
