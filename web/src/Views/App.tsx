import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

import logo from '../media/logoBlue.svg'
import supportIcon from '../media/heartIcon.svg'
import infoIcon from '../media/infoIcon.svg'
import { Header } from 'semantic-ui-react'

import Home from './Home/Home'

class App extends Component {
  render (): JSX.Element {
    return (
      <div className="App">
        <nav>
          <a href='https://github.com/joshuashoemaker/brightScreen' target='_blank' rel='noopener noreferrer'>
            <img src={infoIcon} alt='info icon' />
            Docs
          </a>
          <Header className="topNav" as='h3' image={logo} content='brightScreen ( )' style={{color: 'white'}} />
          
          <a href='https://github.com/sponsors/joshuashoemaker/' target='_blank' rel='noopener noreferrer'>
            Sponsor
            <img src={supportIcon} alt='support icon' />
          </a>
        </nav>
        <Home />
      </div>
    )
  }
}

export default App
