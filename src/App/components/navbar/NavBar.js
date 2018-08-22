import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="Name">OLA LIUM</div>
                <div className="Title">Computer Science Engineer</div>
                <div class="flex-container">
                    <Link to="/about">
                        <button class="Nav-button">
                            about
                        </button>
                    </Link>
                    <Link to="/pictures">
                        <button class="Nav-button">
                            pictures
                        </button>
                    </Link>
                </div>
                <div class="flex-container">
                    <Link to="/linkedIn">
                        <button className="Logo-button"><i className="fa fa-linkedin"></i></button>
                    </Link>
                    <Link to="/github">
                        <button className="Logo-button"><i className="fa fa-github"></i></button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default NavBar;
