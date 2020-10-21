import React, {Component} from 'react'
import NavBar from "../navbar/NavBar";
import "./About.css"
import Footer from "../footer/Footer";
class About extends Component {
    render() {
        return(
            <div className="App">
                <NavBar/>
                <div className="MainText">My name is Ola, I am a 24 year old developer from Norway. More info about my projects to come..</div>
                <Footer/>
            </div>
        );
    }
}

export default About;
