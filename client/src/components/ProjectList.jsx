import React, { useState, useEffect } from 'react';

const ProjectList = ({ projects }) => {

  return (
    <div>
      <div className="project-list">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.img} alt={project.title} />
            <br />
            <div className="info">
            <h2>{project.title}</h2>
                <h3>by: {project.designer}</h3>
                <p>yarn: {project.yarn}</p>
                <p>needle sizes: {project.needles}</p>
                <p>start date: {project.start}</p>
                {project.end ? <p>end date: {project.end}</p> : <p>in progress</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
