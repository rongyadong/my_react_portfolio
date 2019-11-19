import React from 'react'

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            className="avatar-img"
            src="https://avatars1.githubusercontent.com/u/35794495?s=460&v=4"
            alt="my avatar"
          />
          <div className="banner-text">
            <h1>Web Developer</h1>
            <hr />
            <p>
              HTML5 | CSS3 | Bootstrap | JavaScript | React | Node.js | Express
            </p>
          </div>
          <div className="social-links">
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/yadong-rong-816b4314b/"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/rongyadong"
              target="_blank"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
