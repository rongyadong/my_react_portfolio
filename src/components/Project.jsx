import React from 'react'

const Project = ({ imgURL, projectSkills, liveDemoLink, githubLink }) => {
  return (
    <div className="col">
      <div className="card" style={{ minWidth: '18rem', margin: '1rem 0' }}>
        <img
          className="card-img-top project-img-size"
          src={imgURL}
          alt="project details"
        />
        <ul className="list-group list-group-flush">
          {projectSkills &&
            projectSkills.map((skill, index) => (
              <li className="list-group-item" key={index}>
                {skill}
              </li>
            ))}
        </ul>
        <div className="card-body">
          <a
            href={liveDemoLink}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-chrome" />
            LiveDemo
          </a>
          <a
            href={githubLink}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
            Github Link
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
