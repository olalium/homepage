import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <NavBar/>
                <div>hei og velkommen til hjemmesiden min</div>
            </div>
        );
    }
}
export default Home;