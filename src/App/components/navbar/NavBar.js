import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="Name">OLA LIUM</div>
                <div className="Title">Computer Science Engineer</div>
                <div class="flex-container nav-buttons">
                    <div class="flex-container nav-button">
                        <Link to="/about">
                            <button class="Nav-button">
                                about
                            </button>
                        </Link>
                    </div>
                    <div className="flex-container nav-button">
                        <Link to="/pictures">
                            <button class="Nav-button">
                                pictures
                            </button>
                        </Link>
                    </div>
                    <div className="flex-container nav-button">
                        <Link to="/documentation">
                            <button className="Nav-button">
                                doc
                            </button>
                        </Link>
                    </div>
                </div>
                <div class="flex-container logo-buttons">
                    <Link to="/linkedIn">
                        <button className="Logo-button-1"><i className="fa fa-linkedin"></i></button>
                    </Link>
                    <Link to="/github">
                        <button className="Logo-button-2"><i className="fa fa-github"></i></button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default NavBar;
