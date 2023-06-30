import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Title from './components/Title'
import InfoTitle from "./components/InfoTitle";
import Details from "./components/Details";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Work from "./components/Work";
import Education from "./components/Education";


class App extends Component {
  constructor() {
    super();

    this.state = {
      
      
    };
  }

  render() {
     
    return (
      <div className="wrapper" id ="wrapper">
        <Title />
        <div id="infoContainer">
                <div id="sidebar">
                  <div id="personalInfo">
                  <InfoTitle title="Details" />
                    <Details/>
                  </div>
                  <div id="skills">
                  <InfoTitle title="Skills" />
                   <Skills />
                  </div>
                </div>
                 <div id="main">
                  <div id="profile">
                  <InfoTitle title="Profile" />
                  <Profile />
                  </div>
                  <div id="work">
                  <InfoTitle title="Work History" />
                  <Work/>
                  </div>
                  <div id="school">
                  <InfoTitle title="Education" />
                  <Education/>
                  </div>

                </div>
        </div>
      </div>
    )

  }

}

export default App;