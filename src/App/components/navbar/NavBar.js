import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


class NavBar extends Component {
    render() {
        let navButton1 = "about";
        let navButton2 = "pictures";
        let navButton3 = "doc";
        let name = "OLA LIUM";
        let title = "Computer Science Engineer";

        return (
            <div className="NavBar">
                <div className="Name">{name}</div>
                <div className="Title">{title}</div>
                <div className="flex-container nav-buttons">
                    {NavBar.getNavButton(navButton1, "/about")}
                    {NavBar.getNavButton(navButton2, "/pictures")}
                    {NavBar.getNavButton(navButton3, "/documentation")}
                </div>
                <div className="flex-container logo-buttons">
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

    static getNavButton(buttonName, link) {
        return(
        <div className="flex-container nav-button">
            <Link to= {link}>
                <button className="Nav-button">
                    {buttonName}
                </button>
            </Link>
        </div>
        );
    }
}
export default NavBar;
