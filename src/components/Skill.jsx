import React from 'react'

const Skill = ({ skillName, skillIcon }) => {
  return (
    <div>
      <li className="list-group-item">
        <p>
          <i className={skillIcon} />
        </p>
        <p>{skillName}</p>
      </li>
    </div>
  )
}

export default Skill
