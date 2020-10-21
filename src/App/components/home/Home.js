import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import "./Home.css"
import Footer from "../footer/Footer";

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <NavBar animateTitle={true}/>
                <div className="Home-container">
                    <div className="Home-text">Hi, welcome to my website!</div>
                    <div className="Home-text">Learn more about me,</div>
                    <div className="Home-text"t>learn how this webpage was created,</div>
                    <div className="Home-text">or just look at some pictures!</div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Home;
