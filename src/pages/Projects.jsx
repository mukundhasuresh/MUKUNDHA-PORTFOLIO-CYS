import React from 'react';
import FadeIn from '../components/FadeIn';
import { data } from '../data';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="container section">
      <FadeIn>
        <h2 className="section-title">Projects</h2>
      </FadeIn>
      <div className="card-grid">
        {data.projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Projects;
