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
        '3-month part time developer in St James Terrace Aged Care',
        'Performance Education - Melbourne Campus',
        '(01/2019 - 04/2019)'
      ],
      [
        '3-month unpaid internship in Mak Technology',
        'Performance Education - Melbourne Campus',
        '(11/2016 - 01/2017)'
      ],
      [
        'IT Professional Year Program',
        'Performance Education - Melbourne Campus',
        '(04/2016 - 11/2016)'
      ],
      [
        'Master of Commerce and finance',
        'Deakin University - Burwood Campus',
        '(10 / 2014 - 03 / 2016)'
      ],
      [
        'Bachelor of Information Technology',
        'Deakin University - Burwood Campus',
        '(06/2010 - 06/2013)'
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
            <h2 className="font-anton">My Education</h2>
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
