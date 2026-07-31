import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../data';
import FadeIn from '../components/FadeIn';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = data.projects.find(p => p.id === id);

  if (!project) return <div className="container section">Project not found.</div>;

  return (
    <div className="container section" style={{ maxWidth: '800px' }}>
      <FadeIn>
        <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', color: 'var(--text-secondary)' }}>
          <ArrowLeft size={20} /> Back to Projects
        </Link>
        <h2 style={{ fontSize: '48px', marginBottom: '8px', letterSpacing: '-0.04em' }}>{project.title}</h2>
        <h3 style={{ fontSize: '24px', color: 'var(--text-secondary)', marginBottom: '32px', fontWeight: 400 }}>{project.subtitle}</h3>
        
        <div style={{ lineHeight: '1.8', fontSize: '18px', marginBottom: '40px' }}>
          <p>{project.description}</p>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '30px', color: 'var(--text-primary)' }}>
              <FaGithub size={20} /> View Source
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--text-primary)', color: 'var(--bg-primary)', borderRadius: '30px' }}>
              <ExternalLink size={20} /> Live Demo
            </a>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default ProjectDetail;
