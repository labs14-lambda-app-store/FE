import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import AddProjectCard from './AddProjectCard';
import projectPlaceholder from '../../../assets/projectplaceholder.jpg';

const ProjectCards = ({ top_projects, projects, media }) => {
  const [hide, toggleHide] = useState(true);

  const map = arr =>
    arr.map(proj => (
      <Link
        key={proj.id}
        className="project-card"
        to={`/student/project-view/${proj.id}`}
      >
        <img
          src={proj.media[0] ? proj.media[0] : projectPlaceholder}
          alt={proj.media[0] ? "Project media" : "placeholder"}
        />
        <div className="caption">
          <h3>{proj.name}</h3>
          <p>{proj.short_description}</p>
        </div>
      </Link>
    ));
  return (
    <div className="projects-wrapper">
      <hr className="hrTop" />
      <h2> My Projects</h2>
      <div className="projects-inner-wrapper">
        {top_projects.length ? map(top_projects) : <AddProjectCard />}
        {projects.length ? (
          <Fade bottom collapse when={!hide}>
            <div style={hide ? { display: 'none' } : { display: 'flex' }}>
              {map(projects)}
            </div>
          </Fade>
        ) : null}
      </div>
      {projects.length ? (
        <div className="projects-buttons-container">
          <button type="button" onClick={() => toggleHide(!hide)}>
            {hide ? 'See more' : 'See less '}
            <i className={hide ? 'fas fa-chevron-down' : 'fas fa-chevron-up'} />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectCards;
