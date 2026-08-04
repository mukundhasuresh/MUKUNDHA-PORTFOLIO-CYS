import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="project-card-premium"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <div>
        <h3>{project.title}</h3>
        <div className="subtitle">{project.subtitle}</div>
        <p>{project.description.substring(0, 85)}...</p>
        
        {project.features && (
          <div className="card-tags">
            {project.features.slice(0, 3).map((tag, i) => (
              <span key={i} className="card-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      
      <div className="card-footer">
        <span className="view-btn">
          View Case Study <ArrowRight size={16} />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
