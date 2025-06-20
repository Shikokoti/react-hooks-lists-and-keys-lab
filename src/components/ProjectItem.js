import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {
          /* Map over the technologies array and render each technology */
          technologies.map((tech, index) => (
            <span key={index} className="technology">
              {tech}
            </span>
          ))
        
        /* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
