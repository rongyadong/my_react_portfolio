import React from 'react'

const Education = ({ educationTitle, educationCampus, educationTime }) => {
  return (
    <div className="card education-item">
      <div className="card-header">{educationCampus}</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{educationTitle}</p>
          <footer className="blockquote-footer" style={{ color: '#000' }}>
            {educationTime}
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export default Education
