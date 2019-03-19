import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <div className="container">
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
