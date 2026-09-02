import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { data } from '../data';
import FadeIn from '../components/FadeIn';
import { ArrowLeft, BookOpen, Calendar, Tag } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const post = data.blog.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) return <div className="container section">Post not found.</div>;

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* 1. HERO HEADER */}
      <div style={{ 
        position: 'relative',
        padding: '120px 0 80px',
        background: 'radial-gradient(circle at center, rgba(41, 151, 255, 0.05) 0%, var(--bg-primary) 70%)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container">
          <FadeIn>
            <Link to="/blog" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              marginBottom: '40px', color: 'var(--text-secondary)',
              textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <ArrowLeft size={18} /> Back to Write-ups
            </Link>
            
            <div className="glass-card" style={{ 
              padding: '60px', 
              borderRadius: '24px', 
              position: 'relative',
              overflow: 'hidden'
            }}>
              <BookOpen size={200} style={{ position: 'absolute', right: '-40px', bottom: '-40px', opacity: 0.03, transform: 'rotate(-15deg)' }} />
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h1 className="title-hero" style={{ marginBottom: '24px', maxWidth: '800px', lineHeight: '1.2' }}>
                  {post.title}
                </h1>
                
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '14px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={16} /> {post.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Tag size={16} />
                    {post.tags.map(tag => (
                      <span key={tag} style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '8px', fontSize: '12px' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container" style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
        <FadeIn delay={0.1}>
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default BlogDetail;
