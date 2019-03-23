import React, { Component } from 'react'
import Project from './Project'

class Projects extends Component {
  state = {
    projects: [
      [
        'https://www.compuskills.com/wp-content/uploads/2017/11/html5-css3-300x200.jpg',
        ['HTML5/CSS3', 'SASS', 'jQuery'],
        'https://rongyadong.github.io/responsive-single-page',
        'https://github.com/rongyadong/responsive-single-page'
      ],
      [
        'https://cdn-images-1.medium.com/max/1200/1*3ZvYiNbTXCwr_-sHdhf_zA.jpeg',
        ['HTML5/CSS3', 'Materialize', 'jQuery'],
        'https://rongyadong.github.io/Materialize_study/index.html',
        'https://github.com/rongyadong/Materialize_study'
      ],
      [
        'https://i.ytimg.com/vi/xCGPPimXgJU/maxresdefault.jpg',
        ['React', 'Bootstrap4', 'Axios'],
        'https://stoic-goldwasser-51f3aa.netlify.com/',
        'https://github.com/rongyadong/react-weather-app'
      ],
      [
        'https://miro.medium.com/max/1200/0*1p4U99DAhsOHqX-m.jpg',
        ['React', 'Redux', 'ES6'],
        'https://cranky-yalow-46c623.netlify.com/',
        'https://github.com/rongyadong/shopping_cart'
      ],
      [
        'https://cdn-images-1.medium.com/max/2600/1*5Jv5YAGqu3zL5endb8dtBA.png',
        ['React', 'Bootstrap4', 'CSS3'],
        'https://quirky-lumiere-4d9e68.netlify.com',
        'https://github.com/rongyadong/my_react_portfolio'
      ],
       [
        'https://cms-assets.tutsplus.com/uploads/users/769/posts/28733/preview_image/WPBakery-Page-Builder-fix.jpg',
        ['HTML5/CSS3', 'WPBakery', 'jQuery'],
        'https://stjamesterrace.com.au/'
      ],
    ]
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{ margin: '5em 1em' }}>
          {this.state.projects.slice(0, 3).map((project, index) => (
            <div className="col" key={index}>
              <Project
                imgURL={project[0]}
                projectSkills={project[1]}
                liveDemoLink={project[2]}
                githubLink={project[3]}
              />
            </div>
          ))}
        </div>
        <div className="row" style={{ margin: '5em 1em' }}>
          {this.state.projects.slice(3, 6).map((project, index) => (
            <div className="col" key={index}>
              <Project
                imgURL={project[0]}
                projectSkills={project[1]}
                liveDemoLink={project[2]}
                githubLink={project[3]}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Projects
