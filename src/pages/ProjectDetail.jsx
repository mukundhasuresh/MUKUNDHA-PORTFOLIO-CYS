import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { data } from '../data';
import FadeIn from '../components/FadeIn';
import { ArrowLeft, ExternalLink, Code2, Rocket, Layout, Terminal } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = data.projects.find(p => p.id === id);

  // Scroll to top when loading the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="container section">Project not found.</div>;

  // Simple auto-tagging based on keywords in description
  const getTags = (text) => {
    if (!text) return [];
    const keywords = ['React', 'Python', 'Docker', 'Machine Learning', 'Security', 'Android', 'Pentest', 'Cybersecurity', 'API', 'Node.js', 'Streamlit', 'Sigma', 'Splunk'];
    return keywords.filter(kw => text.toLowerCase().includes(kw.toLowerCase()));
  };
  
  const tags = getTags(project.longDescription || project.description);

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* 1. HERO HEADER */}
      <div style={{ 
        position: 'relative',
        padding: '120px 0 80px',
        background: 'radial-gradient(circle at center, rgba(41, 151, 255, 0.1) 0%, var(--bg-primary) 70%)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container">
          <FadeIn>
            <Link to="/projects" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              marginBottom: '40px', color: 'var(--text-secondary)',
              textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <ArrowLeft size={18} /> Back to Projects
            </Link>
            
            <div className="glass-card" style={{ 
              padding: '60px', 
              borderRadius: '24px', 
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle background icon */}
              <Layout size={200} style={{ position: 'absolute', right: '-40px', bottom: '-40px', opacity: 0.03, transform: 'rotate(-15deg)' }} />
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h1 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
                  {project.title}
                </h1>
                <h2 style={{ fontSize: '24px', color: 'var(--accent-color)', fontWeight: '400', maxWidth: '600px' }}>
                  {project.subtitle}
                </h2>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 2. MAIN CONTENT (TWO COLUMNS) */}
      <div className="container" style={{ marginTop: '60px' }}>
        <div className="project-detail-layout" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 300px', 
          gap: '60px',
          alignItems: 'start'
        }}>
          
          {/* LEFT COLUMN: The Case Study / Markdown */}
          <FadeIn delay={0.1}>
            <div className="markdown-content" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              {project.longDescription ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {project.longDescription}
                </ReactMarkdown>
              ) : (
                <p style={{ fontSize: '20px', color: 'var(--text-secondary)' }}>{project.description}</p>
              )}
            </div>
          </FadeIn>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <FadeIn delay={0.2}>
            <div style={{ 
              position: 'sticky', 
              top: '100px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '30px' 
            }}>
              
              {/* Action Buttons */}
              <div className="glass-card" style={{ padding: '30px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '8px' }}>Project Links</h4>
                
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="btn-glow" style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', 
                    padding: '14px', background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', 
                    color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500', transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    <FaGithub size={20} /> View Source Code
                  </a>
                )}
                
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', 
                    padding: '14px', background: 'var(--accent-color)', 
                    borderRadius: '12px', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'opacity 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    <ExternalLink size={20} /> Live Application
                  </a>
                )}
              </div>

              {/* Tags / Tech Stack */}
              {tags.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '16px' }}>Technologies Detected</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {tags.map((tag, i) => (
                      <span key={i} style={{ 
                        padding: '6px 14px', 
                        background: 'rgba(41, 151, 255, 0.1)', 
                        border: '1px solid rgba(41, 151, 255, 0.2)', 
                        borderRadius: '20px', 
                        color: 'var(--accent-color)', 
                        fontSize: '14px',
                        fontWeight: '500'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="glass-card" style={{ padding: '30px', borderRadius: '16px' }}>
                  <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '16px' }}>Key Features</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {project.features.map((feature, i) => (
                      <li key={i} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '10px', 
                        fontSize: '15px', 
                        color: 'var(--text-primary)',
                        lineHeight: '1.4'
                      }}>
                        <Rocket size={16} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
