import React, { useState, useEffect } from 'react';

const ProjectList = ({ projects }) => {

  // useEffect(() => {
  //   const fetchProj = async () => {
  //     try {
  //       const res = await fetch('/api/projects');
  //       const data = await res.json();
  //       setProjects(data);
  //     } catch (error) {
  //       console.error('ProjectList fetch error:', error)
  //     }
  //   };

  //   fetchProj();
  // }, []) // i am not sure if i need this, keep commented just in case

  return (
    <div>
      <div className="project-list">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.img} alt={project.title} />
            <br />
            <div className="info">
            <h2>{project.title}</h2>
              <ul>
                <li><h3>by: {project.designer}</h3></li>
                <li>yarn: {project.yarn}</li>
                <li>needle sizes: {project.needles}</li>
                <li>start date: {project.start}</li>
                {project.end ? <li>end date: {project.end}</li> : <li>in progress</li>}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
