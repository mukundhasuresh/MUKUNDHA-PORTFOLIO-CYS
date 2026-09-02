import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { data } from '../data';
import FadeIn from '../components/FadeIn';
import { ArrowRight, BookOpen } from 'lucide-react';

const BlogIndex = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ padding: '60px 20px', paddingBottom: '120px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '60px', alignItems: 'center' }}>
        <div>
          <h1 className="title-section" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BookOpen size={32} color="var(--accent-color)" /> Technical Write-ups
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '16px' }}>
            Deep dives, homelab experiments, and threat analysis.
          </p>
        </div>
        <Link to="/" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--accent-color)' }}>&larr; Back to Home</Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {data.blog.map((post, i) => (
          <FadeIn key={post.id} delay={i * 0.1}>
            <div 
              className="glass-card" 
              style={{ 
                cursor: 'pointer', 
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
              onClick={() => navigate(`/blog/${post.id}`)}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(41, 151, 255, 0.3)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>{post.title}</h2>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{post.date}</span>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                {post.summary}
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '11px', 
                    padding: '4px 10px', 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '12px',
                    color: 'var(--text-secondary)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', fontSize: '14px', fontWeight: '500' }}>
                Read Post <ArrowRight size={16} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
