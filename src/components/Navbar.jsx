import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link
        className="navbar-brand"
        to="/"
        style={{ fontWeight: 'bold', color: '#fff', fontSize: '2rem' }}
      >
        <i className="fas fa-code" />
        Yadong Rong
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link
            className="btn btn-outline-dark"
            to="/about"
            style={{ margin: 'auto 7px', fontSize: '1.5rem' }}
          >
            About
          </Link>
          <Link
            className="btn btn-outline-dark"
            to="/projects"
            style={{ margin: 'auto 7px', fontSize: '1.5rem' }}
          >
            Projects
          </Link>
          <Link
            className="btn btn-outline-dark"
            to="/contact"
            style={{ margin: 'auto 7px', fontSize: '1.5rem' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
