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
        <p>{project.description.substring(0, 110)}...</p>
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
