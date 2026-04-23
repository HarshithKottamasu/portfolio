import React from 'react';
import { DATA } from '../data';

function Projects() {
  return (
    <div>
      <div className="projects-hero">
        <p className="projects-label">SELECTED WORK</p>
        <h1 className="projects-title">Things I've<br /><em>built &amp; shipped.</em></h1>
      </div>
      <div className="project-list">
        {DATA.projects.map((p, i) => (
          <div className="project-item" key={i}>
            <div className="project-num">0{i + 1}</div>
            <div>
              <div className="project-tags">
                {p.tech.map(t => <span className="project-tag" key={t}>{t}</span>)}
              </div>
              <h2 className="project-name">{p.name}</h2>
              <p className="project-desc">{p.desc}</p>
              <div className="project-actions">
                <a className="btn-github" href={p.repo} target="_blank" rel="noreferrer">
                  ↗ View on GitHub
                </a>
              </div>
            </div>
            <div className="project-year">{p.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
