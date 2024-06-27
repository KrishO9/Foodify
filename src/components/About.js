import User from './User';
import UserClass from './UserClass';
import React from 'react';
import {LOGO_URL} from '../utils/constants';
class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("parent constructor");
    }

    componentDidMount(){
        //console.log("parent componentDidMount");
    }

    render()
    {
       // console.log("parent render");
        return (
            <div className="about-container">
              <h1>About</h1>
              <UserClass name={"First"} github={"KrishO9"} location={"Guwahati"} />
              <div className="project-info">
                <h2>About the Project</h2>
                <div className="project-details">
                  <div className="project-icon">
                    <img src={LOGO_URL} alt="Food Delivery Icon" className="project-logo"/>
                  </div>
                  <div className="project-description">
                    <p>This is a Food Ordering App built using ReactJS, HTML, and CSS. It allows users to browse restaurants, view menus, and place orders online.</p>
                  </div>
                </div>
                <div className="tech-stack">
                  <h3>Tech Stack</h3>
                  <div className="tech-icons">
                    <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="ReactJS Icon"/>
                    <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML Icon"/>
                    <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS Icon"/>
                  </div>
                </div>
              </div>
            </div>
          );
    }
} 

export default About;