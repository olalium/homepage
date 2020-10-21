import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import NavButton from "./subcomponents/NavButton";


class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            title: "_"
        };
        this.finalizedTitle = "developer";
        this.titleIndex = 0;
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidMount() {
        if (this.props.animateTitle) {
            this.timerID = setInterval(
                () => this.updateText(),
                100
            );
        } else {
            this.setState({
                title: this.finalizedTitle
            })
        }
    }

    updateText() {
        if (this.state.title === this.finalizedTitle && this.state.name === this.finalizedName) {
            clearInterval(this.timerID);
        } else {
            this.titleIndex += 1;
            let currentText = this.finalizedTitle.substring(0, this.titleIndex);
            this.setState( {
                title: currentText
            });
        }
    }

    render() {
        return (
            <div className="NavBar">
                <div className="Top">
                    <Link to="/" className="Name">{"OLA LIUM"}</Link>
                    <div className="Title">{this.state.title}</div>
                </div>
                <div className="NavButtonContainer">
                    <NavButton link={"/about"} name={"about"} />
                    <NavButton link={"/pictures"} name={"pictures"} />
                    <NavButton link={"/documentation"} name={"documentation"} />
                    {/*<Link to="/linkedIn">
                        <button className="Logo-button-1"><i className="fa fa-linkedin"/></button>
                    </Link>
                    <Link to="/github">
                        <button className="Logo-button-2"><i className="fa fa-github"/></button>
                    </Link>*/}
                </div>
            </div>
        );
    }


}
export default NavBar;
