import React, { Component } from 'react'
import Skill from './Skill'
import Education from './Education'

class About extends Component {
  state = {
    skills: [
      ['HTML5', 'fab fa-html5 fa-2x'],
      ['CSS3', 'fab fa-css3 fa-2x'],
      ['JavaScript', 'fab fa-js fa-2x'],
      ['React', 'fab fa-react fa-2x'],
      ['Node.js', 'fab fa-node fa-2x']
    ],
    educations: [
      [
        '8-month contract frontend developer in EMS Brüel & Kjær',
        'Frontend Web Developer - EMS Brüel & Kjær',
        '(06/2019 - 01/2020)'
      ],
      [
        '3-month part time developer in St James Terrace Aged Care',
        'Web Developer - St James Terrace Aged Care',
        '(01/2019 - 04/2019)'
      ],
      [
        'IT Professional Year Program',
        'Performance Education - Melbourne Campus',
        '(04/2016 - 11/2016)'
      ]
    ]
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="font-anton">My skill set</h2>
            <ul className="list-group">
              {this.state.skills.map((skill, index) => (
                <Skill key={index} skillName={skill[0]} skillIcon={skill[1]} />
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="font-anton">My Working Experience</h2>
            <ul className="list-group">
              {this.state.educations.map((education, index) => (
                <Education
                  key={index}
                  educationTitle={education[0]}
                  educationCampus={education[1]}
                  educationTime={education[2]}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About
