import React, {Component} from 'react'
import NavBar from "../navbar/NavBar";
import "./About.css"
class About extends Component {
    render() {
        return(
            <div className="App">
                <NavBar/>
                <div className="MainText">My name is Ola, I am a 24 year old developer from Norway. More info about my projects to come..</div>
            </div>
        );
    }
}

export default About;
